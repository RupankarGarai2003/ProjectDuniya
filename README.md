# ProjectDuniya — Next.js Edition

This is a full rebuild of the original ProjectDuniya Vite/React single-page site as a **Next.js 14 (App Router)** project — with real, separately-indexable pages, per-page SEO metadata, structured data (JSON-LD), a sitemap, and several brand-new content pages designed to bring in organic search traffic.

## What changed vs. the old site

The original site was a single-page Vite app using `HashRouter` — everything lived on one URL (`/#services`, `/#about`, etc.), which search engines can't index as separate pages. This rebuild gives every section and every service its own real, crawlable URL, rendered as static HTML at build time.

## New pages added (beyond the original one-pager)

- `/about`, `/contact`, `/pricing`, `/faq`, `/team`, `/testimonials`
- `/services` and 8 dynamic `/services/[slug]` pages (one per service, each with its own title, description, FAQs, and "how it works" section)
- `/projects` → `/projects/[category]` → `/projects/[category]/[item]` — a 3-level dynamic catalogue covering all 18 sub-services
- `/blog` and 6 original long-form articles at `/blog/[slug]` (project ideas, topic selection, Python vs Java, viva prep, data analysis for beginners, research paper writing)
- `/project-ideas` — brings the previously external project-ideas link in-house
- `/locations` and 8 dynamic `/locations/[city]` local-SEO pages (Kolkata, Delhi, Mumbai, Bangalore, Pune, Hyderabad, Chennai, Noida)

**61 static pages** are generated at build time in total.

## SEO features included

- Per-page `<title>`, meta description, canonical URL, Open Graph & Twitter cards (via Next's Metadata API)
- JSON-LD structured data: `Organization` (site-wide), `Service` (each service page), `BlogPosting` (each article), `FAQPage` (FAQ page)
- Auto-generated `sitemap.xml` (`src/app/sitemap.ts`) and `robots.txt` (`src/app/robots.ts`) that stay in sync with your data files automatically
- Semantic heading structure, descriptive alt text, and internal linking between services, categories, blog posts, and location pages

## Editing content

All editable content lives in `src/lib/data/`:

| File | Controls |
|---|---|
| `services.ts` | The 8 `/services/[slug]` pages |
| `categories.ts` | The `/projects` catalogue (categories + sub-services) |
| `blog.ts` | Blog articles |
| `locations.ts` | City landing pages |
| `faqs.ts` | FAQ page + homepage FAQ preview |
| `testimonials.ts` | Reviews |
| `team.ts` | Team page |

`src/lib/site.ts` holds site-wide constants (phone, email, social links, WhatsApp number) — update these once and they update everywhere.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (already verified to succeed)
npm start         # serve the production build
```

## Deploying

This project is ready to deploy to **Vercel** (recommended — zero config for Next.js), or any Node hosting that supports Next.js. Once deployed, update `siteConfig.url` in `src/lib/site.ts` to your live domain so canonical URLs and the sitemap are correct.

## Known follow-ups

- The `next` version here (14.2.35) has a couple of known high-severity advisories that are only fully resolved in Next.js 16, which has breaking changes. Worth planning an upgrade after launch.
- The contact form still posts to the original Formspree endpoint (`meoarbod`) — swap this for your own endpoint if you want form submissions routed elsewhere.
- Pricing numbers on `/pricing` are placeholders ("Starting ₹...") — replace with your real starting prices.
