Crea una landing page de portfolio personal profesional con las siguientes especificaciones:

## Stack Tecnológico
- Next.js 14+ con App Router
- React 18+
- TypeScript estricto
- Tailwind CSS para estilos
- Framer Motion para animaciones suaves

## Funcionalidades Principales

### 1. Sistema de Temas
- Selector de tema oscuro/claro
- Transiciones suaves entre temas
- Persistencia de preferencia en localStorage
- Soporte para preferencia del sistema operativo
- Variables CSS personalizadas para ambos temas

### 2. Internacionalización (i18n)
- Selector de idioma: Español, Inglés, Portugués
- Implementación con next-intl o react-i18next
- URLs localizadas (/es/, /en/, /pt/)
- Persistencia de idioma seleccionado
- Detección automática del idioma del navegador

### 3. Estructura de Secciones (Estándar 2026)

**Hero Section:**
- Nombre y título profesional destacado
- Breve tagline/descripción
- CTA principal (contacto/descargar CV)
- Avatar o imagen profesional
- Enlaces a redes sociales principales

**About Me:**
- Biografía profesional concisa
- Stack tecnológico con iconos
- Años de experiencia
- Áreas de especialización

**Skills:**
- Categorización de habilidades (Frontend, Backend, Tools, Soft Skills)
- Barras de progreso o badges visuales
- Versiones de tecnologías utilizadas

**Experience:**
- Timeline de experiencia laboral
- Empresa, rol, período
- Logros principales en bullet points
- Tecnologías utilizadas por proyecto

**Projects (Con Previews):**
- Grid responsivo de proyectos
- Cada tarjeta debe incluir:
  * Preview visual (imagen/screenshot del proyecto)
  * Título y descripción breve
  * Stack tecnológico usado
  * Enlaces a demo live y repositorio GitHub
  * Modal o página expandida con detalles completos
  * Imágenes adicionales/carousel
  * Challenges y soluciones implementadas

**Testimonials (Opcional):**
- Carrusel de testimonios
- Nombre, rol y empresa del testimonio

**Contact:**
- Formulario funcional con validación
- Campos: nombre, email, asunto, mensaje
- Integración con servicio de email (FormSpree, EmailJS o API propia)
- Mensajes de éxito/error
- Información de contacto alternativa (email, LinkedIn)

**Footer:**
- Copyright
- Enlaces rápidos a secciones
- Redes sociales

### 4. Características de Diseño

**Diseño Moderno 2026:**
- Glassmorphism sutil en cards
- Gradientes modernos
- Micro-interacciones en hover
- Animaciones de scroll reveal
- Bento grid layouts donde sea apropiado
- Espaciado generoso y aire respirable
- Tipografía moderna (Inter, Geist, o similar)

**Responsividad:**
- Mobile-first approach
- Breakpoints: móvil, tablet, desktop, ultra-wide
- Navegación hamburguesa en móvil
- Imágenes optimizadas y lazy loading

**Performance:**
- Optimización de imágenes con next/image
- Code splitting automático
- Métricas Core Web Vitals optimizadas
- SEO optimization con metadata

**Accesibilidad:**
- Contraste WCAG AA mínimo
- Navegación por teclado
- ARIA labels apropiados
- Focus indicators visibles

### 5. Características Técnicas

**Animaciones:**
- Scroll animations con Framer Motion o Intersection Observer
- Transiciones de página suaves
- Micro-interacciones en botones y cards
- Parallax sutil en hero section

**Navegación:**
- Navbar sticky con backdrop blur
- Indicador de sección activa
- Smooth scroll a secciones
- Progress bar de lectura (opcional)

**Extras:**
- Modo de alto contraste
- Opción de reducir movimiento (prefers-reduced-motion)
- Easter eggs sutiles (opcional)
- Analytics ready (Google Analytics/Plausible)

## Paleta de Colores Sugerida

**Tema Claro:**
- Background: #ffffff, #f9fafb
- Text: #111827, #374151
- Primary: #3b82f6 o color de marca
- Accent: complementario al primary

**Tema Oscuro:**
- Background: #0f172a, #1e293b
- Text: #f1f5f9, #cbd5e1
- Primary: versión más brillante del color de marca
- Accent: complementario ajustado

## Estructura de Archivos Esperada