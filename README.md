# Remote Business Partner — Corporate Website

A statically deployed React / Vite corporate services website for **Remote Business Partner**. This replaces the former pre-launch application and waitlist website.

## Positioning

Remote Business Partner delivers commercial advisory, outsourced business management and practical project support to Australian businesses. The site is organised around client needs rather than a personal résumé.

**Visual system**
- Deep navy: #17323c, with #102832 for dark sections
- Warm ivory: #f8f7f3 and #fffefa
- Muted copper: #bb916c
- Clean sans-serif body and headings: DM Sans
- Editorial italic accents: Instrument Serif
- Grid, geometric marks, restrained motion and responsive spacing

## Pages

- Home: /
- Services directory: /services
- Nine service pages: /services/<service-slug>
- Who We Help: /who-we-help
- Our Work: /our-work
- How We Work: /how-we-work
- About RBP: /about
- Contact: /contact
- Privacy / Terms / Disclaimer

Service content and anonymised project summaries are maintained in src/data/site.ts. Components and page templates are in src/App.tsx; global styling is in src/index.css.

## Development

Requirements: Node.js 20 or newer and npm.

1. Run npm ci.
2. Run npm run dev for local development.
3. Run npm run lint for the TypeScript check.
4. Run npm run build for the production site.
5. The deployable static output is in dist/.

## Cloudflare Workers deployment

This repository is linked to Cloudflare **Workers Builds** as the existing `landing-page` Worker (not a Cloudflare Pages project). Keep the Worker name unchanged to retain its existing deployment target.

- Node.js: 22 or 24
- Repository branch: `main`
- Root directory: `/`
- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Output directory: `dist`
- Static assets and SPA fallback: `wrangler.jsonc`

`npm run deploy` uses the explicitly pinned Wrangler CLI and reads `wrangler.jsonc`, preventing the first-run interactive Vite project setup in CI. `npm run check:deploy` checks the deployment configuration in dry-run mode without publishing. A 502/503/504 returned by Cloudflare's API is an upstream transient service error, not a Vite compilation failure; retry the Workers Build if that occurs.

Workers Static Assets uses the `assets.not_found_handling` setting in `wrangler.jsonc` to provide SPA fallback. Do **not** add a Pages-style `public/_redirects` catch-all (`/* /index.html 200`): Workers rejects it as an infinite redirect loop (Cloudflare error 100324). The `public/_headers` file remains available for supported static response headers. Public `sitemap.xml` and `robots.txt` support search discovery. Update the canonical domain in `index.html`, `src/data/site.ts`, and public files if the domain changes.

## Contact form

The contact form opens the visitor's email application with a prepared message addressed to info@remotebusinesspartner.com.au. It has **no backend** and does not claim to send or save form data. Confirm this mailbox is monitored before launch. A hosted form submission service can be added as a separate, privacy-reviewed enhancement.

## Content and publishing safeguards

- Do not publish identifiable client details or confidential documents without consent.
- Work examples are anonymised, describe the work product and avoid unverified outcome claims.
- Commercial valuation and due diligence are described as advisory, not regulated financial or legal opinions.
- Verify service availability, specialist-service URLs, company details and the legal notices before publishing.
- No Gemini API key, client portal, waitlist or application backend is used.
