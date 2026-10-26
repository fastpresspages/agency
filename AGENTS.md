# Agency storefront — agent instructions

The repo at https://github.com/fastpresspages/agency is the FastPress Labs storefront: https://fastpresspages.github.io/agency/

## Facts that must stay true
- 5 service pillars / 12 service lines with starting prices (audit $150, fix sprint $750, build $1,500, care plan $100/mo, advising from $150).
- Count of public repos lives in the org profile README (github.com/fastpresspages). Check it there rather than trusting a number written here.
- Proof items are dated 24 Oct 2026 with real audit artifacts committed in the linked repos.
- Form target: formsubmit.co/meetcode99@gmail.com, `request_type: "AI agency enquiry"`, honeypot `_honey` (class `hp`).

## Editing rules
- No invented clients, case studies, testimonials, user counts or star counts.
- Keep claims past-tense/dated: "audited A+ 100 on 24 Oct 2026" style. When re-audited, update the date and sample links together (`samples/agency/`).
- Keep the two-field form (email + message) — it passes LaunchGrade friction rules and keeps the "one specific message" promise.
- Zero build: plain HTML/CSS/JS only, no dependencies, no analytics, no cookies.
- LaunchGrade audit of the live site must be A+ (the one intentional warning is `tech.analytics` — the site deliberately has none).

## Verify locally
1. `python -m http.server 8123` (or `node scripts/serve.js 8123`) in this folder.
2. `node ../launchgrade/bin/launchgrade.js http://127.0.0.1:8123/ --ignore tech.https` → expect A+ 98-99 locally (local server warns on compression).
3. `node scripts/check-links.js` → all internal links/assets resolve.
4. On the live site, run the same without `--ignore tech.https` and commit the new sample to `samples/agency/`.
