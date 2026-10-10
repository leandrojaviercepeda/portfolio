# Skills de countergank integradas al portfolio

Referencia: https://github.com/countergank/skills
Instalación: npx skills add countergank/skills (README.md del repositorio)
Ticket Linear: [Instalar] Skills de countergank/skills relevantes al portfolio (COU-254, fixes COU-254)

## Relevamiento completo (6 skills disponibles)
Aplicables (4, instaladas): react-frontend, github-conventions, git-environment-flow, linear-tickets
No aplicables (2, descartadas): nestjs-backend (backend NestJS, no aplica); kubernetes-best-practices (K8s/CDK8s, no aplica)

## Aplicación según SKILL.md
- react-frontend: SKILL.md cargado; P0 verificado (key-props, server-client-boundary, conditional-rendering, hooks-rules); reglas P1-P3 disponibles.
- github-conventions: SKILL.md cargado; P0 aplicado (conventional-commits, branch naming `type/description` y `type/COU-###-desc`, PR structure).
- git-environment-flow: SKILL.md cargado; P0 aplicado (develop/staging/main, promotion flow, release tags vX.Y.Z).
- linear-tickets: SKILL.md cargado; P0 aplicado (title [Verbo] [Qué], description Contexto->Scope->Criterios, labels EN, fixes COU-254).

## Estado
- Instaladas las 4 skills aplicables en `.agents/skills/` (symlinks en `.claude/skills/`, ignorados por git).
- Descartadas las 2 no aplicables (`nestjs-backend`, `kubernetes-best-practices`) para respetar el criterio de "skills relevantes".
- Rama: `chore/COU-254-corregir-skills` → PR `fixes COU-254` a `develop`.
