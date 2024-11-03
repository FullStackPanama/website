# Guía de Contribución

¡Gracias por tu interés en contribuir a Full Stack Panamá! Este documento proporciona las pautas y los pasos para contribuir a nuestro proyecto.

## Tabla de Contenido
- [Guía de Contribución](#guía-de-contribución)
  - [Tabla de Contenido](#tabla-de-contenido)
  - [Código de Conducta](#código-de-conducta)
  - [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
    - [Reportando Bugs](#reportando-bugs)
    - [Sugiriendo Mejoras](#sugiriendo-mejoras)
    - [Tu Primera Contribución de Código](#tu-primera-contribución-de-código)
  - [Proceso de Pull Request](#proceso-de-pull-request)
  - [Estándares de Código](#estándares-de-código)
    - [Mensajes de Commit](#mensajes-de-commit)
    - [Estilo de Código](#estilo-de-código)
  - [Configuración del Entorno de Desarrollo](#configuración-del-entorno-de-desarrollo)

## Código de Conducta

Este proyecto y todos los participantes están bajo el [Código de Conducta](CODE_OF_CONDUCT.md). Al participar, se espera que mantengas este código. Por favor, reporta comportamientos inaceptables a info@fullstackpanama.com.

## ¿Cómo puedo contribuir?

### Reportando Bugs

Los bugs se rastrean como [GitHub Issues](https://github.com/fullstackpanama/website/issues). Cuando reportes un bug, por favor incluye:

* Un título claro y descriptivo.
* Pasos exactos para reproducir el problema.
* Resultados esperados vs. resultados actuales.
* Screenshots si aplican.
* Tu entorno (sistema operativo, navegador, etc.).

### Sugiriendo Mejoras

Las mejoras también se rastrean como GitHub Issues. Cuando sugieras una mejora, incluye:

* Un título claro y descriptivo.
* Una descripción detallada de la mejora propuesta.
* Explicación de por qué esta mejora sería útil.
* Ejemplos de cómo se usaría.

### Tu Primera Contribución de Código

¿No sabes por dónde empezar? Puedes comenzar por:

1. Crear tu perfil de miembro (ver [guía de primeros pasos](https://xopa.dev/docs/guias/primeros-pasos))
2. Revisar issues etiquetados como `good first issue`
3. Mejorar la documentación
4. Corregir errores tipográficos

## Proceso de Pull Request

1. Fork del repositorio y crea tu rama desde `main`
2. Si añades código, añade pruebas cuando sea apropiado
3. Si cambias APIs, actualiza la documentación
4. Asegúrate de que pasan todas las pruebas
5. Asegúrate de que tu código sigue nuestras guías de estilo
6. Crea el Pull Request

## Estándares de Código

### Mensajes de Commit

* Usa el presente ("Add feature" no "Added feature")
* Usa el modo imperativo ("Move cursor to..." no "Moves cursor to...")
* Limita la primera línea a 72 caracteres
* Referencia issues y pull requests liberalmente

### Estilo de Código

* 2 espacios para indentación
* Usa TypeScript cuando sea posible
* Sigue las convenciones de Astro y React
* Mantén el código limpio y bien documentado

## Configuración del Entorno de Desarrollo

1. Instala Node.js (versión 16 o superior)
2. Clona el repositorio
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

¡Gracias por contribuir a Full Stack Panamá! 🇵🇦