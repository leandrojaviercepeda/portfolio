# Tasks: fix-language-switcher-and-certificates

## Phase 1: Translation Updates

- [x] 1.1 Agregar campo `url` a `degrees.diploma` en `src/i18n/locales/es.json`
- [x] 1.2 Agregar campo `url` a certificaciones (courses) en `src/i18n/locales/es.json`
- [x] 1.3 Agregar campo `url` a `degrees.diploma` en `src/i18n/locales/en.json`
- [x] 1.4 Agregar campo `url` a certificaciones (courses) en `src/i18n/locales/en.json`
- [x] 1.5 Agregar campo `url` a `degrees.diploma` en `src/i18n/locales/pt.json`
- [x] 1.6 Agregar campo `url` a certificaciones (courses) en `src/i18n/locales/pt.json`

## Phase 2: Language Switcher Implementation

- [x] 2.1 Importar `usePathname` en `src/components/Navbar.tsx`
- [x] 2.2 Crear función helper para reconstruir pathname con nuevo locale
- [x] 2.3 Actualizar Links del selector de idioma para usar la función helper

## Phase 3: Certificate Links Implementation

- [x] 3.1 Actualizar tipos en `src/components/Education.tsx` para incluir campo `url` opcional
- [x] 3.2 Agregar renderizado de enlace "Ver Certificado" en tarjetas de educación
- [x] 3.3 Quitar sección certificaciones, mover DevOps a educación

## Phase 4: Verification

- [x] 4.1 Verificar que el build pasa sin errores (`npm run build`)
- [ ] 4.2 Verificar manualmente que cambiar idioma preserva el pathname
- [ ] 4.3 Verificar manualmente que los certificados muestran los enlaces
- [ ] 4.2 Verificar manualmente que cambiar idioma preserva el pathname
- [ ] 4.3 Verificar manualmente que los certificados muestran los enlaces