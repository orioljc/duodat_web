/* Contact, thank-you, legal pages and 404. */

const C = require('../lib/components');
const esc = C.esc;
const fill = C.fill;
const icon = C.icon;

/* -------------------------------------------------------------- contact --- */

function renderContact(ctx) {
  const L = ctx.locale;
  const K = L.contact;
  const cfg = ctx.config;
  const mail = '<a href="mailto:' + esc(cfg.email) + '">' + esc(cfg.email) + '</a>';

  const hero =
    '<section class="phero">' +
      '<div class="wrap wrap--narrow">' +
        '<span class="eyebrow">' + esc(K.eyebrow) + '</span>' +
        '<h1>' + esc(K.h1) + '</h1>' +
        '<p class="lead">' + esc(K.lead) + '</p>' +
      '</div>' +
    '</section>';

  const body =
    '<section class="section">' +
      '<div class="wrap cta__grid">' +
        '<div>' +
          '<h2>' + esc(K.sideTitle) + '</h2>' +
          '<div class="grid steps mt-2">' + K.sideSteps.map(function (step) {
            return '<div class="step"><h3>' + esc(step.title) + '</h3><p>' + esc(step.text) + '</p></div>';
          }).join('') + '</div>' +
          '<div class="panel panel--tint mt-3">' +
            '<h3>' + esc(K.directTitle) + '</h3>' +
            '<p>' + fill(esc(K.directText), { email: mail }) + '</p>' +
          '</div>' +
        '</div>' +
        '<div>' + C.leadForm(ctx) + '</div>' +
      '</div>' +
    '</section>';

  return C.layout(ctx, {
    title: L.meta.contact.title,
    description: L.meta.contact.description,
    body: hero + body
  });
}

/* --------------------------------------------------------------- thanks --- */

function renderThanks(ctx) {
  const L = ctx.locale;
  const K = L.thanks;
  const u = ctx.urls;
  const mail = '<a href="mailto:' + esc(ctx.config.email) + '">' + esc(ctx.config.email) + '</a>';

  const body =
    '<section class="section">' +
      '<div class="wrap wrap--narrow center">' +
        '<span class="card__icon" style="margin-inline:auto;width:4rem;height:4rem;background:var(--ok-100);color:var(--ok-600)">' +
          icon('check-circle', 34, 2) + '</span>' +
        '<span class="eyebrow" style="margin-top:1rem">' + esc(K.eyebrow) + '</span>' +
        '<h1>' + esc(K.h1) + '</h1>' +
        '<p class="lead">' + esc(K.lead) + '</p>' +
        '<div class="panel panel--tint mt-3" style="text-align:left">' +
          '<h3>' + esc(K.nextTitle) + '</h3>' +
          '<p>' + esc(K.nextText) + '</p>' +
        '</div>' +
        '<div class="btn-row mt-3" style="justify-content:center">' +
          '<a class="btn" href="' + u.url(L.code, 'home') + '">' + esc(K.backBtn) + '</a>' +
          '<a class="btn btn--ghost" href="' + u.url(L.code, 'home') + '#casos">' + esc(K.casesBtn) + '</a>' +
        '</div>' +
        '<p class="form-note mt-2">' + fill(esc(K.mailNote), { email: mail }) + '</p>' +
      '</div>' +
    '</section>';

  return C.layout(ctx, {
    title: L.meta.thanks.title,
    description: L.meta.thanks.description,
    noindex: true,
    body: body
  });
}

/* ---------------------------------------------------------------- legal --- */

function renderLegal(ctx, which) {
  const L = ctx.locale;
  const page = L.legalPages[which];
  const cfg = ctx.config;

  const vars = {
    legalName: esc(cfg.company.legalName),
    domain: esc(cfg.domain),
    city: esc(cfg.company.city),
    country: esc(cfg.company.country),
    email: '<a href="mailto:' + esc(cfg.email) + '">' + esc(cfg.email) + '</a>'
  };

  const blocks = page.blocks.map(function (block) {
    if (block.h2) return '<h2>' + esc(block.h2) + '</h2>';
    if (block.h3) return '<h3>' + esc(block.h3) + '</h3>';
    if (block.p) return '<p>' + fill(esc(block.p), vars) + '</p>';
    if (block.ul) return '<ul>' + block.ul.map(function (li) {
      return '<li>' + fill(esc(li), vars) + '</li>';
    }).join('') + '</ul>';
    if (block.table) return '<table><thead><tr>' +
      block.table.head.map(function (h) { return '<th scope="col">' + esc(h) + '</th>'; }).join('') +
      '</tr></thead><tbody>' +
      block.table.rows.map(function (row) {
        return '<tr>' + row.map(function (cell) { return '<td>' + fill(esc(cell), vars) + '</td>'; }).join('') + '</tr>';
      }).join('') +
      '</tbody></table>';
    return '';
  }).join('');

  const body =
    '<section class="phero">' +
      '<div class="wrap wrap--narrow"><h1>' + esc(page.h1) + '</h1></div>' +
    '</section>' +
    '<section class="section">' +
      '<div class="wrap wrap--narrow">' +
        '<div class="prose">' +
          '<p class="prose__updated">' + esc(page.updated) + '</p>' +
          blocks +
        '</div>' +
      '</div>' +
    '</section>';

  return C.layout(ctx, {
    title: L.meta[which].title,
    description: L.meta[which].description,
    body: body
  });
}

/* ------------------------------------------------------------------ 404 --- */

function renderNotFound(ctx, allLocales) {
  const L = ctx.locale;
  const u = ctx.urls;

  const extra = (allLocales || []).filter(function (code) { return code !== L.code; }).map(function (code) {
    const other = ctx.locales[code];
    return '<p lang="' + other.htmlLang + '" style="color:var(--muted);font-size:.98rem">' +
      esc(other.notFound.lead) + ' <a href="' + u.url(code, 'home') + '">' + esc(other.notFound.backBtn) + '</a></p>';
  }).join('');

  const body =
    '<section class="section">' +
      '<div class="wrap wrap--narrow center">' +
        '<p class="eyebrow" style="justify-content:center">404</p>' +
        '<h1>' + esc(L.notFound.h1) + '</h1>' +
        '<p class="lead">' + esc(L.notFound.lead) + '</p>' +
        '<div class="btn-row mt-3" style="justify-content:center">' +
          '<a class="btn btn--lg" href="' + u.url(L.code, 'home') + '">' + esc(L.notFound.backBtn) + '</a>' +
          '<a class="btn btn--ghost btn--lg" href="' + u.url(L.code, 'contact') + '">' + esc(L.nav.contact) + '</a>' +
        '</div>' +
        (extra ? '<hr>' + extra : '') +
      '</div>' +
    '</section>';

  return C.layout(ctx, {
    title: L.meta.notFound.title,
    description: L.meta.notFound.description,
    noindex: true,
    canonical: ctx.config.siteUrl + '/',
    body: body
  });
}

module.exports = {
  renderContact: renderContact,
  renderThanks: renderThanks,
  renderLegal: renderLegal,
  renderNotFound: renderNotFound
};
