#!/usr/bin/env node
/**
 * Duodat static site generator.
 *
 * Renders site/ into output_duodat.com/, which the GitHub Action syncs to S3.
 * No dependencies: plain Node (>= 16).
 *
 *   node build-site.js
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SITE = path.join(ROOT, 'site');
const OUT = path.join(ROOT, 'output_duodat.com');

const config = JSON.parse(fs.readFileSync(path.join(SITE, 'config.json'), 'utf8'));

const C = require('./site/lib/components');
const renderHome = require('./site/pages/home');
const renderUseCase = require('./site/pages/usecase');
const simple = require('./site/pages/simple');

/* ----------------------------------------------------------------- utils --- */

function rmrf(target) {
  if (!fs.existsSync(target)) return;
  fs.rmSync(target, { recursive: true, force: true });
}

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dst = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dst);
    else fs.copyFileSync(src, dst);
  }
}

let written = 0;
function write(relPath, contents) {
  const full = path.join(OUT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, contents, 'utf8');
  written++;
}

/* ----------------------------------------------------------------- setup --- */

const locales = {};
for (const code of config.locales) {
  locales[code] = require(path.join(SITE, 'content', code + '.js'));
}

const urls = C.makeUrls({ config: config, locales: locales });

/** Short content hash, so browsers pick up CSS/JS changes immediately. */
function hashOf(relPath) {
  const full = path.join(SITE, 'static', relPath);
  return require('crypto').createHash('sha1').update(fs.readFileSync(full)).digest('hex').slice(0, 8);
}

const assetVersion = {
  css: hashOf('assets/css/styles.css'),
  js: hashOf('assets/js/main.js')
};

/** Build the rendering context for one page in one locale. */
function context(localeCode, pageId) {
  return {
    config: config,
    locales: locales,
    locale: locales[localeCode],
    urls: urls,
    assetVersion: assetVersion,
    pageId: pageId
  };
}

/* ----------------------------------------------------------------- build --- */

console.log('Duodat site build');
console.log('-----------------');

rmrf(OUT);
fs.mkdirSync(OUT, { recursive: true });

// 1. Static assets (css, js, images)
copyDir(path.join(SITE, 'static'), OUT);
console.log('· copied static assets');

// 2. Generated images (logo raster versions, og image)
require('./site/tools/make-images')(path.join(OUT, 'assets', 'img'));
console.log('· generated raster images');

// 3. Pages
const sitemapUrls = [];

for (const code of config.locales) {
  const L = locales[code];

  write(urls.outPath(code, 'home'), renderHome(context(code, 'home')));
  sitemapUrls.push({ loc: urls.absolute(code, 'home'), priority: '1.0' });

  for (const id of C.USE_CASE_IDS) {
    write(urls.outPath(code, id), renderUseCase(context(code, id), id));
    sitemapUrls.push({ loc: urls.absolute(code, id), priority: '0.9' });
  }

  write(urls.outPath(code, 'contact'), simple.renderContact(context(code, 'contact')));
  sitemapUrls.push({ loc: urls.absolute(code, 'contact'), priority: '0.8' });

  write(urls.outPath(code, 'thanks'), simple.renderThanks(context(code, 'thanks')));

  for (const which of ['privacy', 'legal']) {
    write(urls.outPath(code, which), simple.renderLegal(context(code, which), which));
    sitemapUrls.push({ loc: urls.absolute(code, which), priority: '0.3' });
  }

  console.log('· rendered ' + L.name + ' (' + code + ')');
}

// 4. Error document — one file at the root, with a note in every language.
// 'notfound' is not a real page id, so the header renders absolute links
// rather than on-page anchors, and no hreflang alternates are emitted.
write('404.html', simple.renderNotFound(context(config.defaultLocale, 'notfound'), config.locales));

// 5. sitemap.xml
const today = new Date().toISOString().slice(0, 10);
write('sitemap.xml',
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  sitemapUrls.map(function (entry) {
    return '  <url><loc>' + entry.loc + '</loc><lastmod>' + today +
      '</lastmod><priority>' + entry.priority + '</priority></url>';
  }).join('\n') +
  '\n</urlset>\n');

// 6. robots.txt
write('robots.txt',
  'User-agent: *\n' +
  'Allow: /\n' +
  'Disallow: /gracies/\n' +
  'Disallow: /es/gracias/\n' +
  'Disallow: /en/thank-you/\n' +
  '\n' +
  'Sitemap: ' + config.siteUrl + '/sitemap.xml\n');

/* ---------------------------------------------------------------- report --- */

const keyReady = config.form.accessKey && config.form.accessKey.indexOf('REPLACE_WITH') !== 0;

console.log('-----------------');
console.log('Wrote ' + written + ' files to output_duodat.com/');
console.log(sitemapUrls.length + ' indexable URLs in sitemap.xml');
if (!keyReady) {
  console.log('');
  console.log('  !! The contact form is NOT connected yet.');
  console.log('     Put your Web3Forms access key in site/config.json -> form.accessKey');
  console.log('     Get one free at https://web3forms.com (it is tied to ' + config.email + ').');
  console.log('     Until then the form shows a message pointing visitors to that address.');
}
