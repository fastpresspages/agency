# FastPress Labs — AI agency storefront

The marketing and sales surface for [FastPress Labs](https://github.com/fastpresspages): a small AI-assisted software studio. Live at **https://fastpresspages.github.io/agency/**.

Badges: [CI](https://github.com/fastpresspages/agency/actions/workflows/ci.yml) · [Live audit A+ 100](https://fastpresspages.github.io/agency/samples/agency/report.html) (26 Oct 2026) · Apache-2.0 · zero build, zero dependencies.

## What this page is
- 12 service lines in 5 pillars (build / agents & automation / data & knowledge / launch & growth / advising), each with a starting price in USD.
- Honest proof: only our own public, dated, auditable work — no invented case studies.
- Engagement model: written scope → fixed quote → 50% upfront (refundable before the first paid week) → weekly demos → code you own.
- Structured data for search/agents: `ProfessionalService` + `OfferCatalog` + `FAQPage` JSON-LD.

## Files
- `index.html` — the storefront (hero, services, work, process, pricing, FAQ, contact, about).
- `styles.css` / `app.js` — dark+lime design, zero layout JS, FormSubmit AJAX with honeypot.
- `privacy.html` / `terms.html` — plain-language legal pages (engagement terms: refund, ownership, liability cap).
- `llms.txt` / `llms-full.txt` — agent-readable studio brief with rules (no auto-submitting the form).
- `samples/agency/` — LaunchGrade audit of the live site (report.html/json/md, badge, fix plan).
- `.github/workflows/` — CI (link check, metadata, file presence) + Pages deploy.

## Run locally
```
node scripts/serve.js 8123        # or: python -m http.server 8123
node scripts/check-links.js       # all internal refs resolve
node ../launchgrade/bin/launchgrade.js http://127.0.0.1:8123/ --ignore tech.https
```

## Edit rules (also see AGENTS.md)
- Prices are starting points, not quotes — keep that language.
- Update dated claims together with `samples/agency/` when re-audited.
- Keep the form at two visible fields (email + message).
- Zero build: plain HTML/CSS/JS. No analytics, no cookies, no trackers.

## License
Apache-2.0. Fork it, restyle it, run your own studio page with it — keep your claims honest, that's the only condition that matters.
