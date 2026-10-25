const C = require('../lib/components');
const esc = C.esc;
const icon = C.icon;

module.exports = function renderHome(ctx) {
  const L = ctx.locale;
  const H = L.home;
  const u = ctx.urls;
  const cfg = ctx.config;

  /* ------------------------------------------------------------- hero --- */

  const hero =
    '<section class="hero">' +
      '<div class="wrap hero__grid">' +
        '<div class="hero__copy">' +
          '<span class="eyebrow">' + esc(H.heroEyebrow) + '</span>' +
          '<h1>' + esc(H.heroTitle) + '</h1>' +
          '<p class="lead">' + esc(H.heroLead) + '</p>' +
          '<div class="btn-row">' +
            '<a class="btn btn--accent btn--lg" href="#demo">' + esc(H.heroCtaPrimary) + icon('arrow-right', 18, 2.2) + '</a>' +
            '<a class="btn btn--on-dark-ghost btn--lg" href="#casos">' + esc(H.heroCtaSecondary) + '</a>' +
          '</div>' +
          '<ul class="hero__badges">' + H.heroBadges.map(function (b) {
            return '<li>' + icon(b.icon, 16, 2) + esc(b.text) + '</li>';
          }).join('') + '</ul>' +
          '<p class="hero__note">' + esc(H.heroNote) + '</p>' +
        '</div>' +
        '<div>' + C.callCard(ctx, H.demo) +
          '<p class="hero__note center" style="max-width:28rem;margin-inline:auto">' + esc(L.ui.demoDisclaimer) + '</p>' +
        '</div>' +
      '</div>' +
    '</section>';

  /* ------------------------------------------------------ trust strip --- */

  const trustStrip =
    '<section class="section--tint">' +
      '<div class="wrap"><ul class="trust">' + H.trust.map(function (t) {
        return '<li>' + icon(t.icon, 18, 1.9) + esc(t.text) + '</li>';
      }).join('') + '</ul></div>' +
    '</section>';

  /* ---------------------------------------------------------- problem --- */

  const problem =
    '<section class="section">' +
      '<div class="wrap">' +
        '<div class="section-head">' +
          '<span class="eyebrow">' + esc(H.problemEyebrow) + '</span>' +
          '<h2>' + esc(H.problemTitle) + '</h2>' +
          '<p>' + esc(H.problemLead) + '</p>' +
        '</div>' +
        '<div class="grid grid--3">' + H.problemItems.map(function (item) {
          return '<div class="card reveal">' +
            '<span class="card__icon">' + icon(item.icon, 26, 1.8) + '</span>' +
            '<h3>' + esc(item.title) + '</h3>' +
            '<p>' + esc(item.text) + '</p>' +
          '</div>';
        }).join('') + '</div>' +
      '</div>' +
    '</section>';

  /* -------------------------------------------------------------- how --- */

  const how =
    '<section class="section section--tint" id="com-funciona">' +
      '<div class="wrap">' +
        '<div class="section-head section-head--center">' +
          '<span class="eyebrow">' + esc(H.howEyebrow) + '</span>' +
          '<h2>' + esc(H.howTitle) + '</h2>' +
          '<p>' + esc(H.howLead) + '</p>' +
        '</div>' +
        '<div class="grid grid--3 steps">' + H.howSteps.map(function (step) {
          return '<div class="step reveal">' +
            '<h3>' + esc(step.title) + '</h3>' +
            '<p>' + esc(step.text) + '</p>' +
          '</div>';
        }).join('') + '</div>' +
      '</div>' +
    '</section>';

  /* -------------------------------------------------------- use cases --- */

  const useCases =
    '<section class="section" id="casos">' +
      '<div class="wrap">' +
        '<div class="section-head">' +
          '<span class="eyebrow">' + esc(H.useCasesEyebrow) + '</span>' +
          '<h2>' + esc(H.useCasesTitle) + '</h2>' +
          '<p>' + esc(H.useCasesLead) + '</p>' +
        '</div>' +
        C.useCaseCards(ctx) +
      '</div>' +
    '</section>';

  /* --------------------------------------------------------- features --- */

  const features =
    '<section class="section section--tint">' +
      '<div class="wrap">' +
        '<div class="section-head">' +
          '<span class="eyebrow">' + esc(H.featuresEyebrow) + '</span>' +
          '<h2>' + esc(H.featuresTitle) + '</h2>' +
        '</div>' +
        '<div class="grid grid--3">' + H.featuresItems.map(function (item) {
          return '<div class="card reveal">' +
            '<span class="card__icon">' + icon(item.icon, 26, 1.8) + '</span>' +
            '<h3>' + esc(item.title) + '</h3>' +
            '<p>' + esc(item.text) + '</p>' +
          '</div>';
        }).join('') + '</div>' +
      '</div>' +
    '</section>';

  /* ------------------------------------------------------------ trust --- */

  const trust =
    '<section class="section" id="confianca">' +
      '<div class="wrap">' +
        '<div class="section-head">' +
          '<span class="eyebrow">' + esc(H.trustEyebrow) + '</span>' +
          '<h2>' + esc(H.trustTitle) + '</h2>' +
          '<p>' + esc(H.trustLead) + '</p>' +
        '</div>' +
        '<div class="grid grid--2">' + H.trustItems.map(function (item) {
          return '<div class="panel panel--tint reveal">' +
            '<h3>' + esc(item.title) + '</h3>' +
            '<p>' + esc(item.text) + '</p>' +
          '</div>';
        }).join('') + '</div>' +
      '</div>' +
    '</section>';

  /* ---------------------------------------------------------- pricing --- */

  const pricing =
    '<section class="section section--tint" id="preus">' +
      '<div class="wrap">' +
        '<div class="section-head section-head--center">' +
          '<span class="eyebrow">' + esc(H.pricingEyebrow) + '</span>' +
          '<h2>' + esc(H.pricingTitle) + '</h2>' +
          '<p>' + esc(H.pricingLead) + '</p>' +
        '</div>' +
        '<div class="grid grid--3">' + H.pricingPlans.map(function (plan) {
          const amount = plan.amountText
            ? '<b>' + esc(plan.amountText) + '</b>'
            : '<b>' + esc(cfg.pricing.currency + plan.amount) + '</b>';
          return '<div class="card price-card reveal' + (plan.featured ? ' price-card--featured' : '') + '">' +
            (plan.flag ? '<span class="price-card__flag">' + esc(plan.flag) + '</span>' : '') +
            '<span class="ucard__tag">' + esc(plan.audience) + '</span>' +
            '<h3>' + esc(plan.name) + '</h3>' +
            '<p class="price">' + amount + (plan.unit ? '<small>' + esc(plan.unit) + '</small>' : '') + '</p>' +
            '<p>' + esc(plan.desc) + '</p>' +
            '<ul class="checks mt-1">' + plan.features.map(function (f) {
              return '<li>' + icon('check', 16, 2.4) + '<span>' + esc(f) + '</span></li>';
            }).join('') + '</ul>' +
            '<div class="price-card__cta">' +
              '<a class="btn' + (plan.featured ? ' btn--accent' : ' btn--ghost') + ' btn--block" href="' +
                u.url(L.code, 'contact') + '?interes=' + esc(plan.useCase) + '">' + esc(plan.cta) + '</a>' +
            '</div>' +
          '</div>';
        }).join('') + '</div>' +
        '<p class="form-note mt-2">' + esc(H.pricingNote) + '</p>' +
      '</div>' +
    '</section>';

  /* -------------------------------------------------------------- faq --- */

  const faq =
    '<section class="section" id="faq">' +
      '<div class="wrap">' +
        '<div class="section-head">' +
          '<span class="eyebrow">' + esc(H.faqEyebrow) + '</span>' +
          '<h2>' + esc(H.faqTitle) + '</h2>' +
        '</div>' +
        C.faqList(H.faq, { openFirst: true }) +
      '</div>' +
    '</section>';

  /* ----------------------------------------------------------- schema --- */

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: cfg.brandName,
      url: cfg.siteUrl + '/',
      logo: cfg.siteUrl + '/assets/img/logo-mark.svg',
      email: cfg.email,
      description: L.footer.about,
      address: { '@type': 'PostalAddress', addressLocality: cfg.company.city, addressCountry: 'ES' },
      areaServed: 'ES',
      knowsLanguage: ['ca', 'es', 'en']
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: cfg.brandName,
      url: cfg.siteUrl + '/',
      inLanguage: L.htmlLang
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: H.faq.map(function (item) {
        return {
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a }
        };
      })
    }
  ];

  return C.layout(ctx, {
    title: L.meta.home.title,
    description: L.meta.home.description,
    schema: schema,
    body: hero + trustStrip + problem + how + useCases + features + trust + pricing + faq + C.finalCta(ctx)
  });
};
