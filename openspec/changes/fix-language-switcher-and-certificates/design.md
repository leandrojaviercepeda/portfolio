# Design: fix-language-switcher-and-certificates

## Technical Approach

1. **Language Switcher**: Reemplazar el `href={`/${loc}`}` estático en Navbar.tsx con una función que tome el pathname actual y替换 el locale usando `usePathname` y `getPathname` de next-intl/navigation.

2. **Certificate Links**: Agregar campos `url` a las traducciones de educación y certificaciones, luego actualizar Education.tsx para renderizar los enlaces cuando estén disponibles.

## Architecture Decisions

### Decision: How to preserve pathname on language switch

**Choice**: Usar `usePathname()` de next-intl/navigation y reconstruir la ruta con el nuevo locale.
**Alternatives considered**: 
- Usar `replace` del router — no preserva el pathname
- Extraer manualmente el path desde window.location — coupling innecesario
**Rationale**: next-intl proporciona `usePathname` que ya parsea correctamente el locale actual de la URL.

### Decision: How to handle missing certificate URLs

**Choice**: Campo `url` opcional en las traducciones, renderizar link solo si existe.
**Alternatives considered**:
-hardcodear los URLs en el componente — coupling, no escalable
- Usar un array separado de URLs indexado por índice — frágil, difícil de mantener
**Rationale**: Mantiene las traducciones self-contained y permite que cada idioma tenga su propio enlace.

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/components/Navbar.tsx` | Modify | Agregar helper para reconstruir pathname con nuevo locale |
| `src/i18n/locales/es.json` | Modify | Agregar campo `url` a degrees.diploma y courses |
| `src/i18n/locales/en.json` | Modify | Agregar campo `url` a degrees.diploma y courses |
| `src/i18n/locales/pt.json` | Modify | Agregar campo `url` a degrees.diploma y courses |
| `src/components/Education.tsx` | Modify | Agregar renderizado de enlaces para certificados |

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Manual | Navigation funciona correctamente | Navegar a diferentes rutas y cambiar idioma |
| Manual | Certificados muestran enlaces | Verificar que los links aparecen cuando hay URL |
| Manual | Build pasa | `npm run build` |

## Migration / Rollout

No migration required — cambios incrementales sin efectos secundarios.

## Open Questions

None