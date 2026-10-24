# ProjectDuniya

Marketing and lead-generation website for ProjectDuniya (final year project help, coding help, academic guidance).
Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · Radix UI**.

## Requirements

- Node.js **>= 20.9** (Node 22 LTS recommended) and npm 10+

## Commands

```bash
npm install        # install (keep package-lock.json committed)
npm run dev        # local dev server on http://localhost:3000
npm run lint       # ESLint (flat config, eslint-config-next)
npm run typecheck  # tsc --noEmit
npm run build      # production build
npm start          # serve the production build
```

Run `lint`, `typecheck` and `build` before every deploy.

## Routes (all statically generated)

| Route | Data source |
| --- | --- |
| `/`, `/about`, `/pricing`, `/faq`, `/contact`, `/team`, `/testimonials`, `/project-ideas` | page files + `src/lib/data/*` |
| `/services`, `/services/[slug]` | `src/lib/data/services.ts` |
| `/projects`, `/projects/[category]`, `/projects/[category]/[item]` | `src/lib/data/categories.ts` |
| `/blog`, `/blog/[slug]` | `src/lib/data/blog.ts` |
| `/locations`, `/locations/[country]` | `src/lib/data/countries.ts` |
| `/privacy`, `/terms`, `/refund-policy`, `/academic-integrity` | page files (`LegalPage` component) |

City/state URLs (`/locations/[country]/[place]`) were retired: they permanently (308) redirect to the country page (see `next.config.mjs`).

## Where to edit things

- **Site constants, contact details, claims, promo banner:** `src/lib/site.ts`. Only keep numbers you can substantiate (`claims.projectsLabel`, `claims.experienceLabel`). Set `promo.active = false` when the offer ends.
- **Blog posts:** `src/lib/data/blog.ts`. Content blocks are markdown-lite: `## H2`, `### H3`, `- bullets`, `1. numbered`, `**bold**`, `[text](/internal-link)`. Set `updated` when you materially revise a post (feeds `dateModified` and the sitemap). Every post needs a `serviceSlug` (Blog -> Service path) and a cover image in `public/og/`.
- **Team / testimonials / FAQs:** `src/lib/data/team.ts`, `testimonials.ts`, `faqs.ts`. Omit `linkedin`/`github` if a profile doesn't exist; nothing is rendered for missing links.

## SEO

- Per-page metadata is built with `pageMeta()` in `src/lib/seo.ts` (title, description, canonical, Open Graph, Twitter). **Pass the title without the brand**; the layout template appends ` | ProjectDuniya`.
- Canonical host is `https://www.projectduniya.com` (`siteConfig.url`). Make sure the apex domain 301-redirects to `www` in your hosting/DNS settings.
- `src/app/sitemap.ts` lists canonical, 200-status URLs only. `src/app/robots.ts` allows everything and points at the sitemap.
- Structured data: Organization + WebSite (layout), BlogPosting (posts), Service (+ FAQPage where the FAQ is visible), BreadcrumbList (all inner pages).
- Default social image: `public/og-default.jpg` (1200x630). Article covers: `public/og/`.
- **Do not rename or delete** `/blog/top-final-year-project-ideas-computer-science-2026`; it is the site's main organic landing page. Improve it in place.

## Analytics (GA4) and forms

- GA4 ID is in `siteConfig.gaId`. Events sent: `contact_form_start`, `contact_form_submit`, `quote_request`, `contact_form_error`, `whatsapp_click`, `phone_click`, `email_click`, plus `*_cta_click` events from any link with a `data-track="event_name"` attribute (see `AnalyticsEvents.tsx`).
- In GA4: mark `contact_form_submit`, `quote_request`, `whatsapp_click`, `phone_click`, `email_click` as **Key events**, and verify them in DebugView after each deploy.
- Contact form (`src/components/ContactForm.tsx`) posts via `fetch` to the Formspree endpoint in `siteConfig.formEndpoint`, with client-side validation, a honeypot field, loading/success/error states and double-submit protection. In the Formspree dashboard: confirm you own the form, enable reCAPTCHA/spam filtering and restrict allowed domains to `projectduniya.com`/`www.projectduniya.com`.

## Security

`next.config.mjs` sets HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` and `Permissions-Policy`. A **Content-Security-Policy** is intentionally not set yet: design it after auditing Google Analytics, Formspree and the inline JSON-LD (use a nonce/hash approach, start in report-only mode).

## Performance notes

- Poppins is self-hosted (`src/app/fonts`, `next/font/local`), so there is no Google Fonts request.
- The hero renders a single illustration at a time and only preloads the next one.
- Use `next/image` for all images; keep raster assets small and in `public/images` only if referenced.

## Deployment

Any Next.js host works (Vercel recommended). Build command `npm run build`, output handled by Next. After each deploy, check: contact form submission, GA4 events, `/sitemap.xml`, `/robots.txt`, canonical tags on a few pages, and Search Console inspection of the homepage and the main blog post.
