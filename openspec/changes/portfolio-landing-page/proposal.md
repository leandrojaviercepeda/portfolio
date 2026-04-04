# Proposal: Portfolio Landing Page

## Intent

Crear una landing page de portfolio personal profesional que showcases las habilidades, experiencia y proyectos de Leandro Cepeda (Analista de Sistemas). El sitio debe ser moderno, accesible y multilingüe con soporte para tema oscuro/claro.

## Scope

### In Scope
- Landing page completa con secciones estándar 2026
- Sistema de temas (oscuro/claro) con persistencia
- Internacionalización (ES, EN, PT) con URLs localizadas
- Animaciones suaves con Framer Motion
- Diseño responsive y accesible

### Out of Scope
- Blog personal
- Panel de admin CMS
- Backend API externo
- SEO avanzado (metadata básico sí)

## Capabilities

### New Capabilities
- `theme-system`: Selector de tema con transición suave, persistencia localStorage, detección de preferencia del sistema
- `i18n-routing`: URLs localizadas (/es/, /en/, /pt/), persistencia de idioma, detección automática del navegador
- `hero-section`: Nombre y título profesional, bio breve, links a redes/contacto
- `about-section`: Resumen profesional y habilidades técnicas
- `experience-section`: Historial laboral con timeline
- `projects-section`: Portfolio de proyectos con imágenes y descripciones
- `skills-section`: Habilidades técnicas organizadas por categoría
- `education-section`: Formación académica y certificaciones
- `contact-section`: Formulario de contacto y links sociales

## Approach

Next.js 14+ con App Router, TypeScript estricto, Tailwind CSS para estilos, Framer Motion para animaciones. Componentes reutilizables con atomic design. next-intl para i18n con middleware de routing.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `app/` | New | Next.js App Router estructura |
| `components/` | New | Componentes React por sección |
| `i18n/` | New | Configuración internacionalización |
| `styles/` | New | Tailwind config y temas CSS |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Performance animaciones | Low | Usar Framer Motion optimizado, lazy loading |
| i18n complexity | Medium | next-intl bien configurado desde inicio |
| Theme flash | Low | Script en _document para evitar FOUC |

## Rollback Plan

1. Eliminar directorio del proyecto Next.js
2. Restaurar estado anterior del repo
3. El portfolio actual (si existiera) queda intacto

## Dependencies

- Node.js 18+
- npm/yarn/pnpm

## Success Criteria

- [ ] Site carga sin errores en desarrollo
- [ ] Theme toggle funciona y persiste
- [ ] Cambio de idioma funciona y cambia URL
- [ ] Todas las secciones renderizan correctamente
- [ ] Responsive en móvil, tablet, desktop
- [ ] Build exitoso sin errores TypeScript