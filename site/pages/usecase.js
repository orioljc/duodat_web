const C = require('../lib/components');
const esc = C.esc;
const icon = C.icon;

module.exports = function renderUseCase(ctx, id) {
  const L = ctx.locale;
  const uc = L.useCases[id];
  const S = L.useCaseSection;
  const u = ctx.urls;
  const cfg = ctx.config;

  /* ------------------------------------------------------- page hero --- */

  const crumbs =
    '<nav class="crumbs" aria-label="' + esc(L.ui.home) + '">' +
      '<a href="' + u.url(L.code, 'home') + '">' + esc(L.ui.home) + '</a>' +
      '<span aria-hidden="true">/</span>' +
      '<strong>' + esc(uc.navTitle) + '</strong>' +
    '</nav>';

  const hero =
    '<section class="phero">' +
      '<div class="wrap">' + crumbs +
        '<div class="phero__grid">' +
          '<div>' +
            '<span class="eyebrow">' + esc(uc.tag) + '</span>' +
            '<h1>' + esc(uc.h1) + '</h1>' +
            '<p class="lead">' + esc(uc.lead) + '</p>' +
            '<div class="btn-row mt-2">' +
              '<a class="btn btn--accent btn--lg" href="#demo">' + esc(uc.cta) + icon('arrow-right', 18, 2.2) + '</a>' +
              '<a class="btn btn--on-dark-ghost btn--lg" href="' + u.url(L.code, 'home') + '#com-funciona">' + esc(L.nav.how) + '</a>' +
            '</div>' +
          '</div>' +
          '<div>' + C.callCard(ctx, uc.demo) +
            '<p class="hero__note center" style="max-width:28rem;margin-inline:auto">' + esc(L.ui.demoDisclaimer) + '</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';

  /* --------------------------------------------------------- problem --- */

  const problem =
    '<section class="section">' +
      '<div class="wrap split">' +
        '<div>' +
          '<span class="eyebrow">' + esc(S.problem) + '</span>' +
          '<h2>' + esc(uc.problemIntro) + '</h2>' +
        '</div>' +
        '<div class="panel">' +
          '<ul class="crosses">' + uc.problemItems.map(function (p) {
            return '<li>' + icon('x', 18, 2.4) + '<span>' + esc(p) + '</span></li>';
          }).join('') + '</ul>' +
        '</div>' +
      '</div>' +
    '</section>';

  /* -------------------------------------------------------- solution --- */

  const solution =
    '<section class="section section--tint">' +
      '<div class="wrap">' +
        '<div class="section-head">' +
          '<span class="eyebrow">' + esc(S.solution) + '</span>' +
          '<h2>' + esc(uc.solutionIntro) + '</h2>' +
        '</div>' +
        '<div class="grid grid--3">' + uc.solutionItems.map(function (item) {
          return '<div class="card reveal">' +
            '<span class="card__icon">' + icon(item.icon, 26, 1.8) + '</span>' +
            '<h3>' + esc(item.title) + '</h3>' +
            '<p>' + esc(item.text) + '</p>' +
          '</div>';
        }).join('') + '</div>' +
      '</div>' +
    '</section>';

  /* ------------------------------------------------ includes / not for --- */

  const includes =
    '<section class="section">' +
      '<div class="wrap split">' +
        '<div class="panel panel--tint">' +
          '<h3>' + esc(S.includes) + '</h3>' +
          '<ul class="checks">' + uc.includesItems.map(function (i) {
            return '<li>' + icon('check', 18, 2.4) + '<span>' + esc(i) + '</span></li>';
          }).join('') + '</ul>' +
        '</div>' +
        '<div class="panel panel--amber">' +
          '<h3>' + esc(S.notFor) + '</h3>' +
          '<ul class="checks">' + uc.notForItems.map(function (i) {
            return '<li>' + icon('info', 18, 2) + '<span>' + esc(i) + '</span></li>';
          }).join('') + '</ul>' +
        '</div>' +
      '</div>' +
    '</section>';

  /* ------------------------------------------------------------- faq --- */

  const faq =
    '<section class="section section--tint">' +
      '<div class="wrap">' +
        '<div class="section-head">' +
          '<span class="eyebrow">' + esc(L.home.faqEyebrow) + '</span>' +
          '<h2>' + esc(S.faq) + '</h2>' +
        '</div>' +
        C.faqList(uc.faq, { openFirst: true }) +
      '</div>' +
    '</section>';

  /* ------------------------------------------------------ other cases --- */

  const others =
    '<section class="section">' +
      '<div class="wrap">' +
        '<div class="section-head"><h2>' + esc(S.other) + '</h2></div>' +
        C.useCaseCards(ctx, { exclude: id }) +
      '</div>' +
    '</section>';

  /* ---------------------------------------------------------- schema --- */

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: uc.cardTitle,
      serviceType: uc.navTitle,
      description: uc.metaDescription,
      provider: { '@type': 'Organization', name: cfg.brandName, url: cfg.siteUrl + '/' },
      areaServed: 'ES',
      availableLanguage: ['ca', 'es', 'en'],
      url: u.absolute(L.code, id)
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: L.ui.home, item: u.absolute(L.code, 'home') },
        { '@type': 'ListItem', position: 2, name: uc.navTitle, item: u.absolute(L.code, id) }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: uc.faq.map(function (item) {
        return { '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } };
      })
    }
  ];

  return C.layout(ctx, {
    title: uc.metaTitle,
    description: uc.metaDescription,
    schema: schema,
    body: hero + problem + solution + includes + faq +
      C.finalCta(ctx, { useCase: id, formTitle: uc.cta }) + others
  });
};
