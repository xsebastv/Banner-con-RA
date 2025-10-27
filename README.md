# Banner Interactivo de Pokémon con 3D y Realidad Aumentada (RA)

> Proyecto educativo: banner web que integra información oficial de la serie, un modelo 3D interactivo y un modo de Realidad Aumentada usando tecnologías web.

## Demo

- GitHub Pages: https://xsebastv.github.io/Banner-con-RA/

## Descripción breve (≤200 palabras)

Este banner web interactivo representa la serie Pokémon e integra un modelo 3D y un modo de Realidad Aumentada (RA) accesible desde el navegador. Está desarrollado con HTML, CSS y JavaScript, utilizando A‑Frame para el 3D y AR.js para la RA. 

La interfaz presenta un diseño atractivo inspirado en una página oficial: encabezado con navegación, banner principal con llamadas a la acción, sección de información oficial (título, resumen, temporadas, personajes y datos de producción), una sección con modelo 3D interactivo y una sección de RA que activa la cámara para visualizar a Pikachu en tu espacio. 

Se prioriza la experiencia móvil con diseño responsivo, botones “touch-friendly”, textos legibles y optimizaciones de rendimiento. La accesibilidad se cuida con estructura semántica, uso de alt en imágenes, colores con buen contraste y desplazamiento suave. El proyecto está listo para publicarse en GitHub Pages desde la raíz del repositorio.

## Características clave

- Información oficial de la serie (resumen, temporadas, personajes, producción, impacto).
- Modelo 3D interactivo creado con primitivas de A‑Frame (iluminación, cámara con controles, animaciones).
- Modo RA sin marcador con AR.js (botón para activar cámara, overlay con instrucciones, animaciones).
- Diseño visual limpio, moderno y coherente con la marca Pokémon.
- Totalmente responsivo y optimizado para móviles.
- JS con mejoras de UX (scroll suave, notificaciones, interacciones, ocultación de elementos de vídeo de AR.js cuando aplica).

## Tecnologías

- HTML5, CSS3, JavaScript
- [A‑Frame](https://aframe.io/) para 3D
- [AR.js](https://ar-js-org.github.io/AR.js-Docs/) para Realidad Aumentada en web

## Estructura del proyecto

```
index.html    # Estructura del sitio, escenas 3D y AR
styles.css    # Estilos, diseño responsivo y componentes
script.js     # Lógica de interacción, RA, animaciones y UX
```

## Cómo ejecutar localmente

1. Clona o descarga el repositorio.
2. Abre `index.html` en un navegador moderno.
   - Para usar la cámara (RA), es recomendable servir el sitio en `http://localhost` (o `https://…`).
   - Sugerido: usar la extensión “Live Server” de VS Code o cualquier servidor estático.
3. En móvil, permite el acceso a la cámara cuando el navegador lo solicite.

Notas RA:
- Los navegadores exigen HTTPS o `localhost` para acceder a la cámara.
- En iOS, usa Safari con permisos de cámara habilitados.

## Publicación en GitHub Pages

1. Sube este proyecto al repositorio público (ej.: `xsebastv/Banner-con-RA`).
2. En GitHub: Settings → Pages → Build and deployment
   - Source: “Deploy from a branch”
   - Branch: `master` (o `main`) y carpeta “/ (root)”
   - Guarda. Espera el despliegue.
3. La URL será: `https://<usuario>.github.io/<repo>/`  
   Ejemplo: `https://xsebastv.github.io/Banner-con-RA/`

## Revisión de requisitos (Checklist)

- [x] Tecnologías web (HTML, CSS, JS)
- [x] Modelo 3D embebido con librería (A‑Frame)
- [x] RA en web (AR.js, modo sin marcador + activación de cámara)
- [x] Información oficial relevante (nombre, resumen, temporadas, personajes, producción)
- [x] Diseño visual atractivo tipo página oficial
- [x] Responsivo y accesible en móviles (media queries, tamaños táctiles, contrastes, alt)
- [x] Publicado en GitHub Pages y enlace público incluido  
     

## Accesibilidad y responsive

- Tipografía legible, contraste suficiente y colores consistentes.
- Imágenes con `alt`, botones con etiquetas claras.
- Diseño mobile-first con `@media` queries y controles táctiles.
- Scroll suave y animaciones moderadas; reduce motion respetado (cuando aplica).

## Troubleshooting (RA)

- “No se pudo acceder a la cámara”: asegúrate de usar `https://` o `http://localhost` y permitir el permiso de cámara.
- iOS: usa Safari; activa “Camera” en Settings → Safari.
- Si la escena no ocupa toda la pantalla, verifica que ningún bloque externo esté ocultando el lienzo (el CSS del proyecto ya fuerza el fullscreen en RA).

## Créditos y avisos

- Pokémon y sus logotipos son propiedad de Nintendo, Game Freak y Creatures Inc. Este proyecto es con fines educativos, sin ánimo de lucro.
- Librerías: A‑Frame y AR.js bajo sus respectivas licencias.

