# Delta for i18n-routing

## MODIFIED Requirements

### Requirement: Language Switcher Preservation

El selector de idioma DEBE preservar la ruta actual del usuario al cambiar de idioma.

(Previously: El selector de idioma navegaba a la raíz del nuevo idioma sin preservar la ruta)

#### Scenario: Preserve path when changing language

- GIVEN el usuario está en `/es/skills`
- WHEN hace click en el selector de idioma y elige "en"
- THEN la URL debe cambiar a `/en/skills`
- AND la ruta después del locale debe mantenerse igual

#### Scenario: Preserve path with hash

- GIVEN el usuario está en `/es/skills#projects`
- WHEN hace click en el selector de idioma y elige "pt"
- THEN la URL debe cambiar a `/pt/skills#projects`

#### Scenario: Preserve path at root

- GIVEN el usuario está en `/es`
- WHEN hace click en el selector de idioma y elige "en"
- THEN la URL debe cambiar a `/en`