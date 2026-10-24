# Things only the site owner can verify or decide

The code changes are done. These need your accounts, facts, or a legal opinion.

## Facts to confirm (then edit `src/lib/site.ts` / data files)
1. **"1000+ projects" and "4+ years"** (`siteConfig.claims`): keep only if you can back them up. They show on the hero, About, and homepage fact strip.
2. **The first-time-user offer** (`siteConfig.promo`): set `active: false` if it is not currently running.
3. **Testimonials** (`src/lib/data/testimonials.ts`): publish only real reviews you have permission to use. Add dates/sources when you can.
4. **Team members' LinkedIn/GitHub**: add real URLs to `team.ts`; none render until you do.
5. **Legal pages** are drafted to match how the site actually works. Have a lawyer review them, especially refund terms, governing law, and the academic-integrity wording for the countries you target (several, such as the UK, Australia, Ireland and New Zealand, have laws about academic-cheating services).
6. **Cookie consent**: GA4 loads without a consent banner. If you target EU/UK visitors, add a consent mechanism (Consent Mode).

## Accounts / dashboards
7. **Domain**: make the apex (`projectduniya.com`) 301-redirect to `www.projectduniya.com` at your host.
8. **Formspree** (`meoarbod`): confirm you own it, turn on spam protection, restrict domains, test delivery.
9. **GA4**: open DebugView, trigger each event, mark lead events as Key events.
10. **Search Console**: submit `https://www.projectduniya.com/sitemap.xml`; inspect the homepage and the main blog post; watch `/locations/*/*` URLs drop out as redirects are crawled.
11. **Lighthouse / PageSpeed / real devices**: run on mobile + desktop and test Safari/iPhone and Android Chrome. These were not testable in the build environment.

## Content to grow (only with substance)
12. Keep expanding `/blog/top-final-year-project-ideas-computer-science-2026` in place; use the same section pattern (more ideas, tools, sample architectures, FAQ).
13. Add genuine project examples/screenshots to project and service pages when you have permission to show them.
