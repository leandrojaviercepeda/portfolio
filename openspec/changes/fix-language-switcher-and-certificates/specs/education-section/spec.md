# Delta for education-section

## ADDED Requirements

### Requirement: Certificate Links

La sección educación DEBE mostrar enlaces cliqueables para los títulos que posean certificado o credencial digital.

El sistema DEBE permitir que cada título académico tenga un campo `url` opcional que renderice un enlace a la credencial.

#### Scenario: Display certificate link when available

- GIVEN un título académico tiene un campo `url` definido en las traducciones
- WHEN se renderiza la sección educación
- THEN debe mostrarse un enlace con el texto "Ver Certificado" o su equivalente en el idioma
- AND el enlace debe abrirse en una nueva pestaña

#### Scenario: No certificate link when unavailable

- GIVEN un título académico no tiene campo `url` en las traducciones
- WHEN se renderiza la sección educación
- THEN no se muestra ningún enlace de certificado

### Requirement: Certificate Links for Certifications

La sección de certificaciones DEBE mostrar enlaces cliqueables cuando estén disponibles.

#### Scenario: Display certification link when available

- GIVEN una certificación tiene un campo `url` definido en las traducciones
- WHEN se renderiza la sección de certificaciones
- THEN debe mostrarse un icono de enlace o texto "Ver"
- AND al hacer click debe navegar a la URL de la certificación