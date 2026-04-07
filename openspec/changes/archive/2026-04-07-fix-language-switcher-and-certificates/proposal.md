# Proposal: fix-language-switcher-and-certificates

## Intent

Corregir dos issues del portfolio: (1) el selector de idioma no preserva la ruta actual al cambiar de idioma, y (2) faltan agregar los enlaces a los certificados de la sección educación.

## Scope

### In Scope
- Corregir el LocaleSwitcher del Navbar para que preserve el pathname actual al cambiar de idioma
- Agregar enlaces a los certificados en la sección Educación

### Out of Scope
- Redesiseño del selector de idioma
- Nuevas secciones o traducciones

## Capabilities

### New Capabilities
- Ninguna

### Modified Capabilities
- `i18n-routing`: El cambio de idioma debe mantener la ruta actual (ej: `/es/skills` → `/en/skills`)
- `education-section`: Los certificados deben ser clicables con enlace a credencial

## Approach

1. **Language Switcher**: Usar `usePathname` de next-intl/navigation para получить la ruta actual y reconstruirla con el nuevo locale usando `getPathname` o reconstructPath.
2. **Certificates**: Agregar `url` fields a los certificados en los archivos de locale (es.json, en.json, pt.json) y actualizar Education.tsx para renderizar el link.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/components/Navbar.tsx` | Modified | Cambiar href del selector de idioma para usar pathname actual |
| `src/i18n/locales/es.json` | Modified | Agregar url a certificados |
| `src/i18n/locales/en.json` | Modified | Agregar url a certificados |
| `src/i18n/locales/pt.json` | Modified | Agregar url a certificados |
| `src/components/Education.tsx` | Modified | Renderizar link para certificados |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Rutas inválidas al cambiar idioma | Low | Probar cambios manualmente |
| Fallo en build por tipos | Low | Verificar tipos de los nuevos campos |

## Rollback Plan

Revertir cambios en Navbar.tsx y archivos locale a estado anterior via git.

## Dependencies

- None

## Success Criteria

- [ ] Cambiar de idioma preserva la ruta actual (ej: /es/skills → /en/skills)
- [ ] Los certificados muestran un enlace cliqueable
- [ ] Build pasa sin errores