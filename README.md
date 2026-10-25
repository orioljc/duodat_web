# duodat.com

Marketing and demand-validation site for **Duodat** — AI voice agents that make
check-in calls, confirm appointments and answer the phone after hours.

Static site, no runtime dependencies, three languages (Catalan default, Spanish,
English). Generated from `site/` into `output_duodat.com/`, which a GitHub
Action syncs to the S3 bucket behind duodat.com.

---

## Quick start

```bash
node build-site.js          # regenerate output_duodat.com/
npm run serve               # build, then serve it at http://localhost:4321
```

There is nothing to `npm install` for the site build — it uses only Node's
standard library (tested on Node 20).

## Deploying

`.github/workflows/deploy.yml` runs on every push to `main` and syncs
`output_duodat.com/` to `s3://duodat.com` (eu-west-3). **The committed
`output_duodat.com/` is what ships** — the Action does not rebuild. So:

```bash
node build-site.js
git add -A && git commit -m "..." && git push
```

If you forget the rebuild, your source edits will not reach the live site.

## Where things live

```
site/
  config.json           brand, contact email, form key, prices  ← edit this first
  content/ca.js         ALL Catalan copy
  content/es.js         ALL Spanish copy
  content/en.js         ALL English copy
  lib/components.js     header, footer, form, cards, page layout
  lib/icons.js          inline SVG icon set
  pages/home.js         home page sections
  pages/usecase.js      the four use-case landing pages (one template)
  pages/simple.js       contact, thank-you, privacy, legal notice, 404
  static/               copied verbatim into the output
    assets/css/styles.css
    assets/js/main.js
    assets/img/*.svg
  tools/make-images.js  draws og-image.png and the app icons (pure Node + zlib)
build-site.js           the generator
output_duodat.com/      GENERATED — never edit by hand, it is wiped on each build
```

All copy lives in the three `content/*.js` files. The templates contain no
prose, so changing wording never means touching layout code.

## Pages

Each language has 9 pages. Catalan sits at the root, Spanish under `/es/`,
English under `/en/`:

| Page | Catalan | Spanish | English |
| --- | --- | --- | --- |
| Home | `/` | `/es/` | `/en/` |
| Wellbeing calls | `/trucades-de-benestar/` | `/es/llamadas-de-bienestar/` | `/en/wellbeing-check-in-calls/` |
| Real estate | `/immobiliaries/` | `/es/inmobiliarias/` | `/en/real-estate/` |
| Appointment confirmations | `/confirmacio-de-cites/` | `/es/confirmacion-de-citas/` | `/en/appointment-confirmations/` |
| After-hours answering | `/atencio-fora-dhorari/` | `/es/atencion-fuera-de-horario/` | `/en/after-hours-answering/` |
| Contact / demo | `/contacte/` | `/es/contacto/` | `/en/contact/` |
| Thank you | `/gracies/` | `/es/gracias/` | `/en/thank-you/` |
| Privacy | `/privacitat/` | `/es/privacidad/` | `/en/privacy/` |
| Legal notice | `/avis-legal/` | `/es/aviso-legal/` | `/en/legal-notice/` |

Plus `404.html`, `sitemap.xml` and `robots.txt` at the root. Pages are linked
across languages with `hreflang`, and the language switcher keeps you on the
same page rather than dumping you on the home page.

### S3 requirement

URLs end in `/`, so the bucket must have **static website hosting** enabled with
`index.html` as the index document (it already does) — the plain REST endpoint
would not serve `/es/index.html` for `/es/`. Set `404.html` as the error
document if it is not set yet.

## Connecting the contact form

The forms post to [Web3Forms](https://web3forms.com) — no backend, no server.
Until a key is configured, every form shows a message pointing visitors at
`info@duodat.com` instead of failing silently.

1. Go to web3forms.com, enter `info@duodat.com`, and they email you an access key.
2. Put it in `site/config.json`:
   ```json
   "form": { "accessKey": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" }
   ```
3. `node build-site.js`, commit, push.

The build prints a loud warning while the key is still missing.

Submissions include name, email, phone, organisation, the use case, the call
volume, the message, the page the form was sent from and the language — so you
can tell which of the four hypotheses each lead came from. On success the
visitor lands on the thank-you page in their own language, which is the event
to count as a conversion.

**`info@duodat.com` must actually receive mail.** Cloudflare Email Routing is
free and takes about five minutes: Cloudflare dashboard → duodat.com → Email →
Email Routing → forward `info@` to your personal inbox.

## Tracking which hypothesis wins

Each use-case page is a separate landing page with its own URL, so you can point
one ad campaign at each and compare. Linking to the contact page with
`?interes=wellbeing` (or `realestate`, `confirmations`, `afterhours`)
preselects that option in the form — the pricing buttons already do this.

Analytics are off by default, so no cookie banner is needed. To turn them on,
fill in one of these in `site/config.json` and rebuild:

```json
"analytics": { "gaMeasurementId": "", "plausibleDomain": "" }
```

Plausible is cookieless and keeps you out of consent-banner territory; Google
Analytics would require adding a consent banner to stay compliant in the EU.

## Editing content

- **Prices** — `home.pricingPlans` in each `content/*.js`, plus `config.json`
  for the currency symbol.
- **Adding a use case** — add the entry to `useCases` in all three content
  files, add its slug to `slugs`, add the id to `USE_CASE_IDS` in
  `lib/components.js`, and add the option to `form.useCaseOptions`.
- **Legal pages** — `legalPages` in each content file. They are built from
  simple `{h2}`, `{p}`, `{ul}`, `{table}` blocks with `{email}`, `{domain}`,
  `{legalName}`, `{city}` and `{country}` filled in from `config.json`.

### Still to fill in

`config.json` has an empty `company.vatId`, and `company.legalName` is just
"Duodat". Once the company is registered, put the registered name and tax ID
there — Spanish law (LSSI-CE art. 10) requires them on a commercial site.

## Brand

- Teal `#0A5A66` / `#15949E`, amber accent `#F08F2C`, near-black `#08252B`.
- Headings Plus Jakarta Sans, body Inter (Google Fonts).
- The logo is a dot with two voice arcs — the person and the call. It is inline
  SVG in `lib/components.js` (header and footer) and standalone in
  `site/static/assets/img/`. `tools/make-images.js` redraws the raster versions,
  including the `duodat` wordmark, from the same geometry.

## Legacy

`webpack.duodat-com.config.js`, `.babelrc`, `.env.*`, `dist/`, `build_params/`
and the AWS/webpack entries in `package.json` are left over from the photo-generator
project this repo was forked from. The webpack config points at a `src/`
directory that does not exist, so nothing uses them. They can be deleted.
