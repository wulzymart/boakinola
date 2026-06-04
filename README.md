# BOAkinola & Co — Website

A modern, SEO-optimised, statically prerendered site for **B.O. Akinola & Co (Chartered Accountants)**, built with **TanStack Start** + **Tailwind CSS v4** and deployed on **Netlify**.

- **Canonical domain:** `https://boakinola.com/`
- **ICAN licensed:** 24 May 1990
- **30+ years** of practice in Lagos, Abuja and Port Harcourt
- **13 services** across audit & assurance, tax, advisory and specialised engagements
- **7 principal officers** with full biographies and credentials

---

## Stack

| Layer                | Choice                                                          |
| -------------------- | --------------------------------------------------------------- |
| Framework            | [TanStack Start](https://tanstack.com/start) (static prerender) |
| Routing              | [TanStack Router](https://tanstack.com/router) (file-based)     |
| Styling              | [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config)  |
| Language             | TypeScript (strict)                                             |
| Build                | Vite                                                            |
| Deployment           | Netlify (`@netlify/vite-plugin-tanstack-start`)                 |
| Forms                | `mailto:` with copy-to-clipboard fallback                       |
| Analytics            | none (no cookies, no third-party trackers)                      |

The site is fully **prerendered to static HTML** at build time. There is no server runtime in production — the Netlify plugin only provides local-emulation of Netlify features during `vite dev`.

---

## Pages (15 + assets)

| Path                                | Purpose                                                         |
| ----------------------------------- | --------------------------------------------------------------- |
| `/`                                 | Home — hero, services grid, process, values, team preview, FAQ  |
| `/about`                            | History, mission/vision/values, offices, full team              |
| `/services`                         | All 13 services grouped by category                             |
| `/services/auditing`                | Auditing & assurance                                            |
| `/services/accounting`              | Accounting services                                             |
| `/services/taxation`                | Taxation _(`draft: true` — see Notes below)_                    |
| `/services/value-added-tax`         | VAT _(`draft: true`)_                                           |
| `/services/debt-recovery`           | Debt recovery                                                   |
| `/services/management-consultancy`  | Management consultancy                                          |
| `/services/company-formation`       | Company formation & secretarial services                        |
| `/services/receivership-liquidation`| Receivership & liquidation                                       |
| `/services/investigation`           | Investigation _(`draft: true`)_                                  |
| `/services/reconciliation`          | Reconciliation of accounts _(`draft: true`)_                    |
| `/services/asset-verification`      | Asset verification & valuation _(`draft: true`)_                |
| `/services/training`                | Professional training _(`draft: true`)_                         |
| `/services/agricultural-extension`  | Agricultural extension services _(`draft: true`)_               |
| `/contact`                          | Contact details + mailto form + Google Map embed                |
| `/privacy`                          | NDPR-aligned privacy notice                                     |
| `/sitemap.xml`                      | XML sitemap for crawlers                                         |
| `/robots.txt`, `/llms.txt`, `/humans.txt` | Crawler and AI assistant policies                          |
| `/manifest.webmanifest`             | PWA manifest                                                     |
| `/favicon.svg`                      | Brand favicon                                                    |

---

## Project layout

```
boakinola/
├── public/
│   ├── images/
│   │   ├── logo/boa.jpg            ← downloaded from boakinola.com
│   │   ├── hero/hero-portrait.jpg
│   │   ├── services/<one per service>.jpg
│   │   └── og/home.svg             ← 1200×630 social share image
│   ├── favicon.svg, manifest.webmanifest, robots.txt,
│   │   sitemap.xml, llms.txt, humans.txt
├── src/
│   ├── components/
│   │   ├── layout/   Header, Footer, MobileCTA
│   │   ├── seo/      Breadcrumbs, WebSchema (Organization + LocalBusiness + WebSite)
│   │   ├── home/     Hero, IntroBlock, ServicesGrid, ProcessTimeline,
│   │   │             ValuesGrid, StatsBand, PartnersStrip, TeamPreview,
│   │   │             HomeFAQ, CTABanner
│   │   ├── service/  ServiceHero, ServiceFAQs, RelatedServices, ServicePageView
│   │   ├── team/     TeamCard, TeamGrid
│   │   └── ui/       Button, Section, Container, Accordion, ServiceCard, IconForService
│   ├── content/
│   │   └── service-pages.ts         ← central source of truth for all 13 service pages
│   ├── lib/
│   │   ├── site.ts                  ← site-wide constants (NAP, phones, social)
│   │   ├── nav.ts                   ← nav + 13-service registry + category grouping
│   │   ├── seo.ts                   ← per-page meta helpers
│   │   ├── schema.ts                ← Schema.org generators (Organization, LocalBusiness, Service, FAQ, Person, Breadcrumb)
│   │   ├── contact.ts               ← mailto + WhatsApp link builders
│   │   ├── team.ts                  ← 7 principal officers (data only)
│   │   ├── firm.ts                  ← mission/values/process/stats/partners (data only)
│   │   └── route-helpers.tsx        ← `buildServiceRoute(slug)` — one-liner per service
│   ├── routes/                      ← file-based routes (TanStack Router)
│   │   ├── __root.tsx               ← HTML shell + global Schema.org
│   │   ├── index.tsx                ← Home
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── privacy.tsx
│   │   ├── services/index.tsx
│   │   └── services/<13 slugs>.tsx  ← each is `export const Route = buildServiceRoute("slug")`
│   ├── styles.css                   ← Tailwind 4 entry + design tokens
│   └── router.tsx                   ← router factory (default error/404, scroll restoration)
├── netlify.toml                     ← build, security, caching, trailing-slash redirects
├── vite.config.ts                   ← tanstackStart({prerender}) + netlify + tailwindcss
├── package.json
├── tsconfig.json
└── README.md (this file)
```

---

## Local development

```bash
# Requires Node 24+ (Netlify plugin requires it; declared in netlify.toml)
node --version   # v24.x

# Install
npm install

# Dev server (with Netlify local emulation)
npm run dev
# → http://localhost:5173/

# Production build (runs prerender for all 15 routes + assets)
npm run build
# → outputs to dist/client/ (static) and dist/server/ (for `vite preview`)
```

---

## Deployment to Netlify

### One-time setup

1. Push the repo to GitHub/GitLab.
2. In the Netlify dashboard, **Add new site → Import an existing project** and select the repo.
3. Netlify auto-detects the `@netlify/vite-plugin-tanstack-start` plugin. Confirm:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist/client`
   - **Node version:** 24 (set in `netlify.toml` already)
4. Deploy. Subsequent pushes to the default branch auto-deploy.

### Custom domain

In Netlify → **Domain settings** → point `boakinola.com` (and `www.`) to the site. The `netlify.toml` is configured for the canonical `https://boakinola.com/`.

### Environment variables

None required. If you later add analytics (Plausible / GA4), add the IDs in Netlify's **Environment** UI — not in the code.

---

## Design system

Tokens live in `src/styles.css` under `@theme` (Tailwind 4 CSS-first config):

| Token             | Value     | Purpose                          |
| ----------------- | --------- | -------------------------------- |
| `--color-primary` | `#0B2545` | Navy — trust, institutions       |
| `--color-accent`  | `#C9A227` | Gold — premium finance           |
| `--color-ink`     | `#0F172A` | Body text                        |
| `--color-muted`   | `#475569` | Secondary text                   |
| `--color-surface` | `#FFFFFF` | Page background                  |
| `--color-border`  | `#E2E8F0` | Hairlines                        |
| `--font-display`  | Fraunces  | Serif — headings, gravitas       |
| `--font-sans`     | Inter     | Sans — body and UI               |

Fonts are loaded from the system font stack (no Google Fonts call), so the site is **fully offline-capable** and privacy-respecting. If you want to load self-hosted woff2 files for typography parity, add the `@font-face` rules to `src/styles.css` and place the woff2 files in `public/fonts/`.

---

## SEO

The site is built SEO-first. Per route, `head()` exports produce:

- `<title>` and `<meta name="description">` — keyword-tuned, no longer than 160 chars
- Canonical URL
- Open Graph (`og:title`, `og:description`, `og:url`, `og:image`, `og:locale`)
- Twitter Card (`twitter:card: summary_large_image`)
- JSON-LD injected as `<script type="application/ld+json">`:
  - **Root** (every page): `Organization` + `WebSite` (with `SearchAction`) + `ProfessionalService` (`LocalBusiness` with NAP + opening hours + areas served)
  - **Home:** `BreadcrumbList` + `FAQPage`
  - **About:** `BreadcrumbList` + `Person` × 7 (one per principal officer)
  - **Service pages:** `BreadcrumbList` + `Service` + `FAQPage`
  - **Contact, Privacy:** `BreadcrumbList`

Additional SEO assets:

- `public/sitemap.xml` (referenced in `robots.txt` and every page)
- `public/robots.txt` (explicit `Allow: /` + sitemap line)
- `public/llms.txt` (LLM-friendly site summary)
- `public/humans.txt`
- `public/manifest.webmanifest` (PWA)
- `public/og/home.svg` (1200×630 social share image)
- `rel="preload"` on logo and hero image (LCP optimisation)
- Explicit `width` and `height` on every `<img>` (CLS = 0)
- `loading="lazy"` on below-the-fold images
- `lang="en-NG"` on `<html>`, `og:locale: en_NG`

Local SEO is explicit: the firm's full NAP is in the footer of every page; the contact page embeds a Google Map iframe of the office address; the `LocalBusiness` schema declares Lagos / Abuja / Port Harcourt as `areaServed` and the office hours as `OpeningHoursSpecification`.

### Verifying schema

After deploying, paste the homepage URL into:

- Google's [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

Both should report `Organization`, `LocalBusiness`, `WebSite`, `BreadcrumbList`, `FAQPage`.

### Submitting to search engines

1. Verify the site in [Google Search Console](https://search.google.com/search-console) using the canonical domain.
2. Submit `https://boakinola.com/sitemap.xml` under **Sitemaps**.
3. Use the **URL Inspection** tool to request indexing of the home and key service pages.

---

## Performance

- HTML is fully prerendered — no client-side data fetch on first paint
- One CSS file (Tailwind 4, tree-shaken) ~36 KB raw
- One main JS bundle ~380 KB raw (React 19 + TanStack Router + TanStack Start) — gzipped will be ~110 KB
- One per-route code-split chunk for the heavy pages (about, contact, services index)
- Self-hosted fonts via system stack = no FOIT, no external request
- `prefers-reduced-motion` respected
- `meta name="theme-color"` set to the primary navy

Targets (in production):

- LCP < 2.0 s
- CLS < 0.05
- INP < 200 ms
- Total transferred < 250 KB on the home route

---

## Accessibility

- WCAG 2.1 AA target
- Skip-to-content link
- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>` with `aria-label`)
- One `<h1>` per page
- Focus-visible rings on all interactive elements (gold, 2px, 3px offset)
- `aria-expanded` / `aria-controls` on the mobile-nav toggle and accordion items
- All form fields have `<label>`s
- Colour contrast ≥ 4.5:1 (tested at #0B2545 on #FFFFFF and #475569 on #FFFFFF)
- `prefers-reduced-motion` respected throughout
- Reduced-motion + `aria-hidden` on decorative SVG icons

To verify, run [axe DevTools](https://www.deque.com/axe/devtools/) in the browser on each route.

---

## Notes for the firm

### Draft service pages

Seven service pages have `status: "draft"` in `src/content/service-pages.ts`:

- `/services/taxation`
- `/services/value-added-tax`
- `/services/investigation`
- `/services/reconciliation`
- `/services/asset-verification`
- `/services/training`
- `/services/agricultural-extension`

These render a yellow "Draft for firm review" banner at the top so they are clearly distinguished from the source-content pages. The principal officers should review the copy and edit it directly in `src/content/service-pages.ts`.

The original source for these services was either a one-line teaser (taxation, VAT, investigation) or just a name on the services index (reconciliation, asset verification, training, agricultural extension). The copy we wrote is conservative and grounded in industry-standard Nigerian chartered-accounting practice, but it is not extracted from the firm's own internal documentation. Please review and rewrite as needed.

### Team photos

Team cards show **monogram avatars** (initials on a brand-tinted gradient). To add real photos:

1. Drop the photo into `public/images/team/<slug>.jpg` (200×200 px is plenty).
2. Edit `src/components/team/TeamCard.tsx` to render `<img src={"/images/team/" + member.slug + ".jpg"} alt={member.name} />` instead of the monogram.

### Partner logos

The partner strip renders partner names as typographic wordmarks (monochrome). To use official logos:

1. Drop the SVG/PNG into `public/images/partners/<slug>.svg`.
2. Edit `src/components/home/PartnersStrip.tsx` to swap the wordmark for `<img>`.

### Adding analytics

If you want to add Plausible or GA4 later, inject the script in `src/routes/__root.tsx` under the `<head>` (using the existing `<link>` and `<meta>` arrays in the `head()` function). Add the script URL in `netlify.toml` headers or a build-time env var if you prefer not to hard-code IDs.

---

## License

© 2026 B.O. Akinola & Co (Chartered Accountants). All rights reserved. Source code may be reused internally; please do not redistribute.
