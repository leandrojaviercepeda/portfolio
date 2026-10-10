# Feature: COU-254 — Countergank skills integration (corrective delivery)

- **Ticket**: COU-254 — [Instalar] Skills de countergank/skills relevantes al portfolio
- **Repo**: leandrojaviercepeda/portfolio
- **Branch**: `chore/COU-254-corregir-skills`
- **Base**: `develop`
- **Source**: https://github.com/countergank/skills

## Intent

Finalize the countergank skills integration so it matches the ticket's
"relevant skills" criterion and lands through the feature -> develop PR flow.

The skills work was previously committed directly to `develop` with no pull
request, and two non-applicable skills were installed. This corrective keeps the
four applicable skills and delivers the fix through a reviewable PR.

## Tasks

- [x] **T1 — Remove non-applicable skills and sync integration artifacts**
  - Removed `.agents/skills/{nestjs-backend,kubernetes-best-practices}` and their `.claude/skills` symlinks.
  - Dropped both entries from `skills-lock.json`.
  - Regenerated `.atl/skill-registry.md`.
  - Updated `docs/skills/integration.md`.
  - Evidence: `e63bd64`
- [x] **T2 — Track the delivery in this ODD feature document**
  - Evidence: `21c2e10`

## Delivery

- PR: `chore(skills): finalize countergank integration for COU-254` -> `develop`
- Linear: `fixes COU-254`

## Checks

- No automated test suite exists (`package.json` scripts: `dev`, `build`, `start`, `lint`).
- The change touches vendored skill documentation and generated indexes only; no application behavior, build, or runtime path is affected.
