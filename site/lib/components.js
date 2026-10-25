/* Shared rendering helpers and components. */

const { icon } = require('./icons');

const USE_CASE_IDS = ['wellbeing', 'realestate', 'confirmations', 'afterhours'];

/* ------------------------------------------------------------- helpers --- */

function esc(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Interpolate {placeholders}. Values are inserted as-is (may contain markup). */
function fill(template, vars) {
  return String(template || '').replace(/\{(\w+)\}/g, function (m, key) {
    return Object.prototype.hasOwnProperty.call(vars || {}, key) ? String(vars[key]) : m;
  });
}

function jsonAttr(value) {
  return esc(JSON.stringify(value));
}

/* ----------------------------------------------------------------- urls --- */

function makeUrls(ctx) {
  const defaultLocale = ctx.config.defaultLocale;

  /** Site-root-relative URL for a page in a given locale. */
  function url(localeCode, pageId) {
    const locale = ctx.locales[localeCode];
    const prefix = localeCode === defaultLocale ? '/' : '/' + localeCode + '/';
    const slug = locale.slugs[pageId];
    return slug ? prefix + slug + '/' : prefix;
  }

  /** Output file path, relative to the output root. */
  function outPath(localeCode, pageId) {
    const u = url(localeCode, pageId);
    return (u === '/' ? '' : u.slice(1)) + 'index.html';
  }

  function absolute(localeCode, pageId) {
    return ctx.config.siteUrl + url(localeCode, pageId);
  }

  return { url: url, outPath: outPath, absolute: absolute };
}

/* --------------------------------------------------------------- header --- */

function logoMark(size) {
  const s = size || 36;
  return '<svg class="logo__mark" width="' + s + '" height="' + s + '" viewBox="0 0 48 48" aria-hidden="true" focusable="false">' +
    '<defs><linearGradient id="dmark" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#15949E"/><stop offset=".55" stop-color="#0A5A66"/><stop offset="1" stop-color="#042B31"/>' +
    '</linearGradient></defs>' +
    '<rect width="48" height="48" rx="12" fill="url(#dmark)"/>' +
    '<circle cx="16.5" cy="24" r="4.6" fill="#fff"/>' +
    '<path d="M23.56 14.92a11.5 11.5 0 0 1 0 18.16" fill="none" stroke="#fff" stroke-width="3.6" stroke-linecap="round"/>' +
    '<path d="M28.24 10.36a18 18 0 0 1 0 27.28" fill="none" stroke="#F6A94B" stroke-width="3.4" stroke-linecap="round"/>' +
    '</svg>';
}

function logo(ctx, opts) {
  const o = opts || {};
  return '<a class="logo' + (o.light ? ' logo--light' : '') + '" href="' + ctx.urls.url(ctx.locale.code, 'home') + '"' +
    ' aria-label="' + esc(ctx.config.brandName) + ' — ' + esc(ctx.locale.ui.home) + '">' +
    logoMark(36) +
    '<span class="logo__name">duo<em>dat</em></span>' +
    '</a>';
}

function header(ctx) {
  const L = ctx.locale;
  const u = ctx.urls;
  const here = ctx.pageId;

  const useCaseItems = USE_CASE_IDS.map(function (id) {
    const uc = L.useCases[id];
    return '<li><a href="' + u.url(L.code, id) + '"' + (here === id ? ' aria-current="page"' : '') + '>' +
      '<span class="mi__icon">' + icon(uc.icon, 24, 1.8) + '</span>' +
      '<span><span class="mi__title">' + esc(uc.navTitle) + '</span>' +
      '<span class="mi__desc">' + esc(uc.navDesc) + '</span></span></a></li>';
  }).join('');

  const homeUrl = u.url(L.code, 'home');
  const anchor = function (hash) { return here === 'home' ? '#' + hash : homeUrl + '#' + hash; };

  const langItems = ctx.config.locales.map(function (code) {
    const other = ctx.locales[code];
    // Fall back to that locale's home page when the current page has no counterpart.
    const target = other.slugs[here] !== undefined ? u.url(code, here) : u.url(code, 'home');
    return '<li><a href="' + target + '" lang="' + other.htmlLang + '" hreflang="' + other.htmlLang + '"' +
      ' data-lang-pick="' + code + '"' + (code === L.code ? ' aria-current="true"' : '') + '>' +
      esc(other.name) + '</a></li>';
  }).join('');

  return '<header class="site-header">' +
    '<div class="wrap site-header__inner">' +
      logo(ctx) +
      '<button class="nav__burger" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="' + esc(L.ui.menu) + '">' +
        icon('menu', 24, 2) +
      '</button>' +
      '<nav class="nav" id="site-nav" data-open="false" aria-label="' + esc(L.ui.menu) + '">' +
        '<ul class="nav__list">' +
          '<li class="nav__item--has-menu">' +
            '<button class="nav__toggle" type="button" aria-expanded="false" aria-controls="menu-usecases">' +
              esc(L.nav.useCases) + icon('chevron-down', 16, 2.2) +
            '</button>' +
            '<ul class="nav__menu" id="menu-usecases" data-menu data-open="false">' + useCaseItems + '</ul>' +
          '</li>' +
          '<li><a class="nav__link" href="' + anchor('com-funciona') + '">' + esc(L.nav.how) + '</a></li>' +
          '<li><a class="nav__link" href="' + anchor('preus') + '">' + esc(L.nav.pricing) + '</a></li>' +
          '<li><a class="nav__link" href="' + anchor('faq') + '">' + esc(L.nav.faq) + '</a></li>' +
          '<li><a class="nav__link" href="' + u.url(L.code, 'contact') + '"' + (here === 'contact' ? ' aria-current="page"' : '') + '>' +
            esc(L.nav.contact) + '</a></li>' +
        '</ul>' +
        '<span class="nav__sep" aria-hidden="true"></span>' +
        '<div class="lang">' +
          '<span class="lang__label">' + esc(L.ui.language) + '</span>' +
          '<button class="lang__toggle" type="button" aria-expanded="false" aria-controls="menu-lang" aria-label="' + esc(L.ui.changeLanguage) + '">' +
            icon('globe', 16, 2) + '<span>' + esc(L.nameShort) + '</span>' + icon('chevron-down', 14, 2.2) +
          '</button>' +
          '<ul class="lang__menu" id="menu-lang" data-menu data-open="false">' + langItems + '</ul>' +
        '</div>' +
        '<a class="btn nav__cta" href="' + u.url(L.code, 'contact') + '">' + esc(L.nav.cta) + '</a>' +
      '</nav>' +
    '</div>' +
  '</header>';
}

/* --------------------------------------------------------------- footer --- */

function footer(ctx) {
  const L = ctx.locale;
  const u = ctx.urls;
  const year = new Date().getFullYear();

  const useCaseLinks = USE_CASE_IDS.map(function (id) {
    return '<li><a href="' + u.url(L.code, id) + '">' + esc(L.useCases[id].navTitle) + '</a></li>';
  }).join('');

  const homeUrl = u.url(L.code, 'home');

  return '<footer class="site-footer">' +
    '<div class="wrap">' +
      '<div class="footer__grid">' +
        '<div class="footer__about">' +
          logo(ctx, { light: true }) +
          '<p>' + esc(L.footer.about) + '</p>' +
          '<a class="footer__mail" href="mailto:' + esc(ctx.config.email) + '">' +
            icon('mail', 18, 1.8) + esc(ctx.config.email) + '</a>' +
        '</div>' +
        '<div class="footer__col">' +
          '<h4>' + esc(L.footer.colUseCases) + '</h4><ul>' + useCaseLinks + '</ul>' +
        '</div>' +
        '<div class="footer__col">' +
          '<h4>' + esc(L.footer.colCompany) + '</h4><ul>' +
            '<li><a href="' + homeUrl + '#com-funciona">' + esc(L.nav.how) + '</a></li>' +
            '<li><a href="' + homeUrl + '#preus">' + esc(L.nav.pricing) + '</a></li>' +
            '<li><a href="' + homeUrl + '#faq">' + esc(L.nav.faq) + '</a></li>' +
            '<li><a href="' + u.url(L.code, 'contact') + '">' + esc(L.nav.contact) + '</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer__col">' +
          '<h4>' + esc(L.footer.colLegal) + '</h4><ul>' +
            '<li><a href="' + u.url(L.code, 'privacy') + '">' + esc(L.legalPages.privacy.h1) + '</a></li>' +
            '<li><a href="' + u.url(L.code, 'legal') + '">' + esc(L.legalPages.legal.h1) + '</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="footer__bottom">' +
        '<span>© ' + year + ' ' + esc(ctx.config.brandName) + '. ' + esc(L.footer.rights) + '</span>' +
        '<nav aria-label="' + esc(L.ui.language) + '">' +
          ctx.config.locales.map(function (code) {
            const other = ctx.locales[code];
            const target = other.slugs[ctx.pageId] !== undefined ? u.url(code, ctx.pageId) : u.url(code, 'home');
            return '<a href="' + target + '" lang="' + other.htmlLang + '" hreflang="' + other.htmlLang +
              '" data-lang-pick="' + code + '"' + (code === L.code ? ' aria-current="true"' : '') + '>' +
              esc(other.name) + '</a>';
          }).join('') +
        '</nav>' +
      '</div>' +
    '</div>' +
  '</footer>';
}

/* ------------------------------------------------------------ call card --- */

/**
 * A voice call, not a chat thread: live-call chrome, an audio waveform and a
 * timestamped transcript in a single column. Turn timestamps are derived from
 * how much each speaker says, scaled to the call length in `demo.meta`.
 */
function callCard(ctx, demo, opts) {
  const L = ctx.locale;
  const o = opts || {};

  // Call length, read from the meta line ("… · 1 min 48 s").
  const matched = /(\d+)\s*min\s*(\d+)/.exec(demo.meta);
  const totalSec = matched ? Number(matched[1]) * 60 + Number(matched[2]) : 90;

  const clock = function (seconds) {
    const mm = Math.floor(seconds / 60);
    const ss = Math.round(seconds % 60);
    return mm + ':' + (ss < 10 ? '0' : '') + ss;
  };

  // Longer utterances take longer to say, so weight start times by length.
  const weights = demo.turns.map(function (turn) { return Math.max(turn.t.length, 24); });
  const totalWeight = weights.reduce(function (a, b) { return a + b; }, 0);
  let acc = 0;
  const starts = weights.map(function (w) {
    const at = (acc / totalWeight) * totalSec * 0.94;
    acc += w;
    return at;
  });

  const turns = demo.turns.map(function (turn, i) {
    const isAgent = turn.s === 'agent';
    return '<li class="turn turn--' + (isAgent ? 'agent' : 'human') + '">' +
      '<span class="turn__time">' + clock(starts[i]) + '</span>' +
      '<div class="turn__body">' +
        '<span class="turn__who">' + esc(isAgent ? L.ui.agent : L.ui.person) +
          (isAgent ? '<span class="waves waves--mini" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>' : '') +
        '</span>' +
        '<p>' + esc(turn.t) + '</p>' +
      '</div>' +
    '</li>';
  }).join('');

  // Deterministic but card-specific waveform.
  const seed = demo.who.length % 7;
  let bars = '';
  for (let i = 0; i < 46; i++) {
    const a = 0.5 + 0.5 * Math.sin((i + seed) * 0.92);
    const b = 0.45 + 0.55 * Math.abs(Math.sin((i + seed) * 0.37 + 1.2));
    const h = Math.round(14 + 86 * a * b);
    bars += '<i style="height:' + h + '%"></i>';
  }

  return '<figure class="callcard' + (o.className ? ' ' + o.className : '') + '" role="group" aria-label="' + esc(L.ui.exampleCall) + '">' +
    '<div class="callcard__top">' +
      '<span class="callcard__avatar">' + icon('phone', 20, 2) + '</span>' +
      '<span class="callcard__id">' +
        '<span class="callcard__who">' + esc(demo.who) + '</span>' +
        // Only the call type: the duration lives in the audio band, and a past
        // date would contradict the "in progress" badge.
        '<span class="callcard__meta">' + esc(demo.meta.split(' · ')[0]) + '</span>' +
      '</span>' +
      '<span class="callcard__live"><i></i>' + esc(L.ui.callLive) + '</span>' +
    '</div>' +
    '<div class="callcard__audio">' +
      '<span class="callcard__speaker">' + icon('volume', 16, 2) + '</span>' +
      '<span class="callcard__wave" aria-hidden="true">' + bars + '</span>' +
      '<span class="callcard__elapsed">' + clock(totalSec) + '</span>' +
    '</div>' +
    '<p class="callcard__label">' + icon('file-text', 14, 2) + esc(L.ui.transcript) + '</p>' +
    '<ol class="callcard__body">' + turns + '</ol>' +
    '<figcaption class="callcard__foot">' + icon('check-circle', 18, 1.8) +
      '<span>' + esc(demo.foot) + '</span></figcaption>' +
  '</figure>';
}

/* ----------------------------------------------------------------- form --- */

function leadForm(ctx, opts) {
  const L = ctx.locale;
  const F = L.form;
  const o = opts || {};
  const cfg = ctx.config.form;
  const keyReady = !!cfg.accessKey && cfg.accessKey.indexOf('REPLACE_WITH') !== 0;
  const privacyUrl = ctx.urls.url(L.code, 'privacy');
  const email = ctx.config.email;

  const jsConfig = {
    thanksUrl: ctx.urls.url(L.code, 'thanks'),
    errRequired: F.errRequired,
    errEmail: F.errEmail,
    errSend: fill(F.errSend, { email: email }),
    errNoKey: fill(F.errNoKey, { email: email })
  };

  const option = function (opt, selected) {
    return '<option value="' + esc(opt.value) + '"' +
      (opt.value === selected ? ' selected' : '') +
      (opt.value === '' ? ' disabled' : '') + '>' + esc(opt.label) + '</option>';
  };

  const req = ' <span class="req" aria-hidden="true">*</span><span class="sr-only"> (' + esc(F.required) + ')</span>';

  return '<form class="formcard" id="demo" data-duodat-form action="' + esc(cfg.endpoint) + '" method="POST"' +
      ' data-key-ready="' + (keyReady ? 'true' : 'false') + '" data-config="' + jsonAttr(jsConfig) + '" novalidate>' +
    '<h3>' + esc(o.title || F.title) + '</h3>' +
    '<p class="formcard__intro">' + esc(o.intro || F.intro) + '</p>' +

    '<div class="alert alert--ok" data-alert="ok" role="status" data-show="false">' +
      icon('check-circle', 20, 2) + '<span><strong>' + esc(F.okTitle) + '</strong> ' + esc(F.okText) + '</span>' +
    '</div>' +
    '<div class="alert alert--err" data-alert="err" role="alert" data-show="false">' +
      icon('alert', 20, 2) + '<span data-alert-text></span>' +
    '</div>' +

    '<input type="hidden" name="access_key" value="' + esc(cfg.accessKey) + '">' +
    '<input type="hidden" name="subject" value="' + esc(F.subject) + '">' +
    '<input type="hidden" name="from_name" value="' + esc(ctx.config.brandName) + ' — ' + esc(ctx.config.domain) + '">' +
    '<input type="hidden" name="language" value="' + esc(L.code) + '">' +
    '<input type="hidden" name="page_url" value="">' +
    '<input class="hp" type="checkbox" name="botcheck" tabindex="-1" aria-hidden="true">' +

    '<div class="form-grid form-grid--2">' +
      '<div class="field">' +
        '<label for="f-name">' + esc(F.name) + req + '</label>' +
        '<input class="input" id="f-name" name="name" type="text" autocomplete="name" required placeholder="' + esc(F.namePlaceholder) + '">' +
        '<p class="field__err" aria-live="polite"></p>' +
      '</div>' +
      '<div class="field">' +
        '<label for="f-email">' + esc(F.email) + req + '</label>' +
        '<input class="input" id="f-email" name="email" type="email" autocomplete="email" required placeholder="' + esc(F.emailPlaceholder) + '">' +
        '<p class="field__err" aria-live="polite"></p>' +
      '</div>' +
      '<div class="field">' +
        '<label for="f-phone">' + esc(F.phone) + '</label>' +
        '<input class="input" id="f-phone" name="phone" type="tel" autocomplete="tel" placeholder="' + esc(F.phonePlaceholder) + '">' +
        '<p class="hint">' + esc(F.phoneHint) + '</p>' +
      '</div>' +
      '<div class="field">' +
        '<label for="f-org">' + esc(F.organization) + '</label>' +
        '<input class="input" id="f-org" name="organization" type="text" autocomplete="organization" placeholder="' + esc(F.organizationPlaceholder) + '">' +
      '</div>' +
    '</div>' +

    '<div class="form-grid form-grid--2 mt-1">' +
      '<div class="field">' +
        '<label for="f-case">' + esc(F.useCase) + req + '</label>' +
        '<select class="select" id="f-case" name="use_case" required>' +
          F.useCaseOptions.map(function (opt) { return option(opt, o.useCase || ''); }).join('') +
        '</select>' +
        '<p class="field__err" aria-live="polite"></p>' +
      '</div>' +
      '<div class="field">' +
        '<label for="f-volume">' + esc(F.volume) + '</label>' +
        '<select class="select" id="f-volume" name="volume">' +
          F.volumeOptions.map(function (opt) { return option(opt, ''); }).join('') +
        '</select>' +
      '</div>' +
    '</div>' +

    '<div class="form-grid mt-1">' +
      '<div class="field">' +
        '<label for="f-message">' + esc(F.message) + '</label>' +
        '<textarea class="textarea" id="f-message" name="message" rows="4" placeholder="' + esc(F.messagePlaceholder) + '"></textarea>' +
      '</div>' +
      '<div class="check">' +
        '<input type="checkbox" id="f-consent" name="consent" value="yes" required>' +
        '<span><label for="f-consent">' + fill(F.consent, { privacy: privacyUrl }) + '</label>' +
        '<p class="field__err" aria-live="polite"></p></span>' +
      '</div>' +
    '</div>' +

    '<div class="form-actions">' +
      '<button class="btn btn--accent btn--lg btn--block" type="submit" data-submit>' +
        '<span class="spinner" aria-hidden="true"></span>' + esc(F.submit) +
      '</button>' +
      '<p class="form-note">' + esc(F.note) + '</p>' +
    '</div>' +
  '</form>';
}

/* ------------------------------------------------------------------ faq --- */

function faqList(items, opts) {
  const o = opts || {};
  return '<div class="faq"' + (o.id ? ' id="' + o.id + '"' : '') + '>' +
    items.map(function (item, i) {
      return '<details' + (o.openFirst && i === 0 ? ' open' : '') + '>' +
        '<summary>' + esc(item.q) + '</summary>' +
        '<div class="faq__a">' + esc(item.a) + '</div>' +
      '</details>';
    }).join('') +
  '</div>';
}

/* ------------------------------------------------------- use case cards --- */

function useCaseCards(ctx, opts) {
  const L = ctx.locale;
  const o = opts || {};
  const ids = USE_CASE_IDS.filter(function (id) { return id !== o.exclude; });
  // Four cards read best as a 2x2 block; three fit a single row of three.
  const gridClass = ids.length === 3 ? 'grid grid--3' : 'grid grid--2up';

  return '<div class="' + gridClass + '">' + ids.map(function (id) {
    const uc = L.useCases[id];
    return '<a class="card ucard reveal" href="' + ctx.urls.url(L.code, id) + '">' +
      '<span class="card__icon">' + icon(uc.icon, 26, 1.8) + '</span>' +
      '<span class="ucard__tag">' + esc(uc.tag) + '</span>' +
      '<h3>' + esc(uc.cardTitle) + '</h3>' +
      '<p>' + esc(uc.cardText) + '</p>' +
      '<ul>' + uc.cardBullets.map(function (b) {
        return '<li>' + icon('check', 16, 2.4) + '<span>' + esc(b) + '</span></li>';
      }).join('') + '</ul>' +
      '<span class="ucard__more"><span class="arrow-link">' + esc(L.ui.learnMore) + icon('arrow-right', 18, 2.2) + '</span></span>' +
    '</a>';
  }).join('') + '</div>';
}

/* ------------------------------------------------------------- final cta --- */

function finalCta(ctx, opts) {
  const L = ctx.locale;
  const o = opts || {};
  const H = L.home;

  return '<section class="section cta" id="demo-section">' +
    '<div class="wrap cta__grid">' +
      '<div>' +
        '<span class="eyebrow">' + esc(H.finalEyebrow) + '</span>' +
        '<h2>' + esc(o.title || H.finalTitle) + '</h2>' +
        '<p class="lead">' + esc(o.lead || H.finalLead) + '</p>' +
        '<ul class="cta__points">' + H.finalPoints.map(function (p) {
          return '<li>' + icon('check', 18, 2.4) + '<span>' + esc(p) + '</span></li>';
        }).join('') + '</ul>' +
      '</div>' +
      '<div>' + leadForm(ctx, { useCase: o.useCase, title: o.formTitle, intro: o.formIntro }) + '</div>' +
    '</div>' +
  '</section>';
}

/* --------------------------------------------------------------- layout --- */

function layout(ctx, opts) {
  const L = ctx.locale;
  const o = opts;
  const cfg = ctx.config;

  const canonical = o.canonical || ctx.urls.absolute(L.code, ctx.pageId);

  const alternates = cfg.locales.map(function (code) {
    const other = ctx.locales[code];
    if (other.slugs[ctx.pageId] === undefined) return '';
    return '<link rel="alternate" hreflang="' + other.htmlLang + '" href="' + ctx.urls.absolute(code, ctx.pageId) + '">';
  }).join('') +
  (ctx.locales[cfg.defaultLocale].slugs[ctx.pageId] !== undefined
    ? '<link rel="alternate" hreflang="x-default" href="' + ctx.urls.absolute(cfg.defaultLocale, ctx.pageId) + '">'
    : '');

  const analytics = cfg.analytics && cfg.analytics.plausibleDomain
    ? '<script defer data-domain="' + esc(cfg.analytics.plausibleDomain) + '" src="https://plausible.io/js/script.js"></script>'
    : (cfg.analytics && cfg.analytics.gaMeasurementId
      ? '<script async src="https://www.googletagmanager.com/gtag/js?id=' + esc(cfg.analytics.gaMeasurementId) + '"></script>' +
        '<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}' +
        'gtag("js",new Date());gtag("config","' + esc(cfg.analytics.gaMeasurementId) + '");</script>'
      : '');

  const schema = (o.schema || []).length
    ? '<script type="application/ld+json">' + JSON.stringify(o.schema.length === 1 ? o.schema[0] : o.schema) + '</script>'
    : '';

  return '<!doctype html>\n' +
'<html lang="' + L.htmlLang + '" class="no-js">\n' +
'<head>\n' +
'<meta charset="utf-8">\n' +
'<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
'<title>' + esc(o.title) + '</title>\n' +
'<meta name="description" content="' + esc(o.description) + '">\n' +
'<link rel="canonical" href="' + canonical + '">\n' +
alternates + '\n' +
'<meta name="robots" content="' + (o.noindex ? 'noindex, follow' : 'index, follow') + '">\n' +
'<meta property="og:type" content="website">\n' +
'<meta property="og:site_name" content="' + esc(cfg.brandName) + '">\n' +
'<meta property="og:locale" content="' + L.ogLocale + '">\n' +
'<meta property="og:title" content="' + esc(o.ogTitle || o.title) + '">\n' +
'<meta property="og:description" content="' + esc(o.description) + '">\n' +
'<meta property="og:url" content="' + canonical + '">\n' +
'<meta property="og:image" content="' + cfg.siteUrl + '/assets/img/og-image.png">\n' +
'<meta property="og:image:width" content="1200">\n' +
'<meta property="og:image:height" content="630">\n' +
'<meta name="twitter:card" content="summary_large_image">\n' +
'<meta name="theme-color" content="#042B31">\n' +
'<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">\n' +
'<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">\n' +
'<link rel="preconnect" href="https://fonts.googleapis.com">\n' +
'<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
'<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap">\n' +
'<link rel="stylesheet" href="/assets/css/styles.css' + (ctx.assetVersion ? '?v=' + ctx.assetVersion.css : '') + '">\n' +
analytics + '\n' +
schema + '\n' +
'</head>\n' +
'<body>\n' +
'<a class="skip-link" href="#main">' + esc(L.ui.skip) + '</a>\n' +
header(ctx) + '\n' +
'<main id="main">\n' + o.body + '\n</main>\n' +
footer(ctx) + '\n' +
'<script src="/assets/js/main.js' + (ctx.assetVersion ? '?v=' + ctx.assetVersion.js : '') + '" defer></script>\n' +
'</body>\n' +
'</html>\n';
}

module.exports = {
  USE_CASE_IDS: USE_CASE_IDS,
  esc: esc,
  fill: fill,
  icon: icon,
  makeUrls: makeUrls,
  logo: logo,
  logoMark: logoMark,
  header: header,
  footer: footer,
  callCard: callCard,
  leadForm: leadForm,
  faqList: faqList,
  useCaseCards: useCaseCards,
  finalCta: finalCta,
  layout: layout
};
