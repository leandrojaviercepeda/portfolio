# Feature: COU-258 — Portfolio content refresh + react-frontend P0 rules

- **Ticket**: COU-258 — Actualizar el portfolio con el CV actual y las reglas de las skills
- **Repo**: leandrojaviercepeda/portfolio
- **Branch**: `feat/COU-258-actualizar-portfolio-cv-y-reglas`
- **Base**: `develop`

## Intent

Bring the portfolio content in line with the current CV (add Belo as the current
role, correct employment periods, enrich tech stacks, fix the diploma period) and
apply the applicable `react-frontend` P0 rules to the code.

Rendered content is driven by `src/i18n/locales/{es,en,pt}.json`; the components
consume them through `next-intl`. The skill ships 87 rules (26 P0); its Vite/Vitest
rules do not apply because this project is Next.js (App Router) with no Vitest.

## Tasks

- [x] **T1 — Refresh CV content in es/en/pt locales**
  - Add Belo as current role (Jun 2026 – present), Buenos Aires.
  - Correct periods: ITR Banco Comafi (Aug 2023 – Jun 2026), Proguide (Jun 2021 – Aug 2023), Toptive (Dec 2020 – May 2021), Countergank (May 2025 – present).
  - Enrich `tech` per CV for each role; rename Countergank project to "Countergank Extensible Timer".
  - Fix education diploma period ("2020" -> Nov 2021 – Jun 2022).
  - Evidence: `fb2f9a5`
- [x] **T2 — react-frontend P0: react rules**
  - `p0-key-props`: replace index keys in `Experience.tsx` (experiences, achievements) and `About.tsx` (specializations).
  - `p0-server-client-boundary`: `src/app/[locale]/page.tsx` is `'use client'` without hooks/state -> make it a Server Component.
  - Evidence: `b755371`
- [x] **T3 — react-frontend P0: accessibility rules**
  - `p0-semantic-html`: `Projects.tsx` clickable card is a `<div onClick>` -> semantic control; modal close button needs an accessible name.
  - `p0-semantic-html`: `Footer.tsx` icon-only buttons that call `window.open` -> real `<a>` links with `rel` and accessible names.
  - `p0-semantic-html`: `Hero.tsx` scroll-down button has no accessible name.
  - `p0-focus-visible`: `globals.css` `.social-btn:focus` -> `:focus-visible`.
  - Evidence: `f44fae2`
- [x] **T4 — Track the delivery in this ODD feature document**

## Out of scope

- i18n of strings currently hardcoded in components (`Contact.tsx`, `About.tsx`
  tech stack, `Education.tsx` language names) — P1 `ux-design-tokens` i18n
  readiness.
- Visual redesign, new sections, contact form behavior.
- Vite/Vitest rule categories (not applicable to this stack).

## Delivery

- PR: `feat(portfolio): refresh CV content and apply react-frontend P0 rules` -> `develop`
- Linear: `fixes COU-258`

## Checks

- No test suite exists (`package.json` scripts: `dev`, `build`, `start`, `lint`).
- Baseline lint before changes: 0 errors, 1 warning (`Navbar.tsx:27` unused `router`, pre-existing).
- Verification: `npm run lint` and `npm run build` must pass.
