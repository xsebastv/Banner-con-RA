# 📝 ENTREGA DE TAREA - SEMANA 14
## Banner Anime con Modelo de RA

---

### 👨‍🎓 Información del Estudiante
- **Asignatura**: Desarrollo Web 2025-2
- **Docente**: Kelly D. Marin
- **Facultad**: Ingeniería - Ingeniería Multimedia
- **Fecha de Entrega**: 27 de octubre de 2025

---

### 🔗 Enlaces del Proyecto

**📍 GitHub Pages (Sitio Web):**  
`https://xsebastv.github.io/Banner-con-RA/`

**💻 Repositorio GitHub:**  
`https://github.com/xsebastv/Banner-con-RA`

---

### 📋 Descripción del Proceso (200 palabras)

Este proyecto presenta un banner web interactivo de Pokémon con integración de Realidad Aumentada. El desarrollo se realizó en varias etapas metodológicas:

**Fase de Planificación**: Seleccioné Pokémon como tema por su rica información visual y amplia documentación oficial. Investigué las temporadas, personajes principales y datos relevantes de la serie.

**Desarrollo Frontend**: Construí la estructura con HTML5 semántico, organizando el contenido en secciones navegables. Implementé CSS3 avanzado con Grid y Flexbox para un diseño responsive completo, añadiendo animaciones, gradientes y efectos parallax para mejorar la experiencia visual.

**Integración 3D**: Utilicé A-Frame (v1.4.2) para crear un modelo 3D de Pikachu usando primitivas geométricas. El modelo incluye rotación automática, animación de flotación y es completamente interactivo con controles de mouse y touch.

**Realidad Aumentada**: Integré AR.js para habilitar experiencias AR en navegadores. El sistema detecta marcadores Hiro y superpone el modelo 3D en el entorno real, accesible desde dispositivos móviles con cámara.

**Optimización**: Implementé JavaScript para funcionalidades interactivas, animaciones al scroll, gestión de permisos de cámara y navegación suave. El sitio es totalmente responsive y fue probado en múltiples dispositivos y navegadores.

El proyecto cumple todos los requisitos técnicos y está publicado exitosamente en GitHub Pages.

---

### 🛠️ Herramientas Utilizadas

#### Tecnologías Web Core
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño responsive, Grid, Flexbox, animaciones
- **JavaScript ES6+**: Interactividad y lógica de negocio

#### Frameworks y Librerías
- **A-Frame 1.4.2**: Creación de modelos 3D y escenas WebVR
- **AR.js**: Implementación de Realidad Aumentada en navegadores

#### Herramientas de Desarrollo
- **Visual Studio Code**: Editor de código
- **Git**: Control de versiones
- **GitHub**: Repositorio y hosting (GitHub Pages)

#### Recursos
- Imágenes oficiales de Pokémon (Wikipedia Commons)
- Marcadores Hiro para AR
- Google Fonts y fuentes del sistema

---

### ✅ Requisitos Técnicos Cumplidos

| Requisito | Estado | Detalles |
|-----------|--------|----------|
| Tecnologías Web (HTML, CSS, JS) | ✅ Completo | Código limpio y bien estructurado |
| Modelo 3D con A-Frame | ✅ Completo | Pikachu 3D interactivo con animaciones |
| Realidad Aumentada | ✅ Completo | AR.js con marcadores Hiro |
| Diseño Responsive | ✅ Completo | Optimizado para móviles y tablets |
| Publicado en GitHub Pages | ✅ Completo | Sitio accesible públicamente |
| Información Oficial | ✅ Completo | Datos verificados de Pokémon |

---

### 📊 Características Implementadas

#### 1. Banner Principal Animado
- Gradientes dinámicos con animación
- Efectos de parallax al scroll
- Botones interactivos con hover effects
- Navegación suave entre secciones

#### 2. Sección de Información
- Datos oficiales de la serie Pokémon
- 3 tarjetas informativas con:
  - Información de la serie original
  - Estadísticas de temporadas y episodios
  - Resumen narrativo completo
- Animaciones de entrada al scroll

#### 3. Personajes Principales
- Grid responsive con 6 Pokémon icónicos
- Iconos animados con efecto bounce
- Información detallada de cada personaje
- Efectos hover interactivos

#### 4. Modelo 3D Interactivo
- Pikachu modelado con primitivas A-Frame
- Componentes: cuerpo, cabeza, orejas, ojos, mejillas, brazos, piernas, cola
- Animaciones:
  - Rotación 360° continua
  - Flotación vertical suave
- Controles:
  - Mouse: arrastrar para rotar vista
  - Touch: gestos táctiles en móviles
  - Scroll: zoom (según navegador)

#### 5. Realidad Aumentada
- Activación de cámara del dispositivo
- Detección automática de marcador Hiro
- Renderizado del modelo 3D en AR
- Botón para descargar marcador
- Instrucciones claras para el usuario
- Gestión de permisos de cámara

#### 6. Diseño Responsive
- Breakpoints para móviles (480px, 768px)
- Grid adaptable según tamaño de pantalla
- Navegación optimizada para touch
- Tamaños de fuente escalables
- Imágenes y modelos responsive

---

### 📁 Estructura de Archivos

```
Banner-con-RA/
│
├── index.html              # Página principal (300+ líneas)
├── styles.css              # Estilos y animaciones (500+ líneas)
├── script.js               # Lógica e interactividad (250+ líneas)
├── README.md               # Documentación técnica
└── ENTREGA.md             # Este documento de entrega
```

---

### 🎯 Objetivos Educativos Alcanzados

1. ✅ **Desarrollo Web Moderno**: Aplicación práctica de HTML5, CSS3 y JavaScript ES6+
2. ✅ **Integración 3D**: Dominio de A-Frame para WebVR/3D
3. ✅ **Realidad Aumentada**: Implementación exitosa de AR.js
4. ✅ **Diseño Responsive**: UX optimizada para múltiples dispositivos
5. ✅ **Publicación Web**: Deployment en GitHub Pages
6. ✅ **Control de Versiones**: Uso profesional de Git

---

### 💡 Aprendizajes Clave

Durante el desarrollo de este proyecto, adquirí conocimientos profundos en:

- Creación de modelos 3D con primitivas geométricas
- Gestión de APIs de navegadores (getUserMedia para cámara)
- Optimización de rendimiento para contenido 3D en web
- Técnicas avanzadas de CSS (Grid, Flexbox, animaciones)
- Programación orientada a eventos en JavaScript
- Configuración de librerías externas (A-Frame, AR.js)
- Resolución de problemas de compatibilidad cross-browser

---

### 🔍 Pruebas Realizadas

**Navegadores Desktop:**
- ✅ Google Chrome 90+ (Windows/Mac)
- ✅ Mozilla Firefox 88+
- ✅ Microsoft Edge 90+
- ✅ Safari 14+ (Mac)

**Dispositivos Móviles:**
- ✅ Android (Chrome Mobile)
- ✅ iOS (Safari Mobile)

**Funcionalidad AR:**
- ✅ Acceso a cámara
- ✅ Detección de marcadores
- ✅ Renderizado 3D en AR
- ✅ Performance en tiempo real

---

### 📈 Métricas del Proyecto

- **Líneas de Código**: 1050+
- **Archivos**: 4 (HTML, CSS, JS, README)
- **Secciones**: 5 principales
- **Personajes**: 6 Pokémon
- **Commits**: 1
- **Tecnologías**: 6+

---

### 🌟 Características Destacadas

1. **Modelo 3D Personalizado**: Pikachu creado desde cero con primitivas
2. **Experiencia AR Completa**: Funcional en dispositivos móviles reales
3. **Animaciones Fluidas**: CSS y JavaScript sincronizados
4. **Código Limpio**: Comentarios y estructura profesional
5. **Documentación Completa**: README detallado incluido

---

### 📸 Instrucciones para Probar la Realidad Aumentada

1. Abre el sitio en un dispositivo móvil
2. Navega a la sección "Realidad Aumentada"
3. Haz clic en "Activar Realidad Aumentada"
4. Permite el acceso a la cámara cuando se solicite
5. Descarga e imprime el marcador Hiro, o muéstralo en otra pantalla
6. Apunta la cámara al marcador
7. ¡Verás a Pikachu aparecer en 3D!

**Marcador Hiro**: https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png

---

### 🔗 Enlaces de Referencia

- **Pokémon Official**: https://www.pokemon.com
- **A-Frame Docs**: https://aframe.io/docs/
- **AR.js Docs**: https://ar-js-org.github.io/AR.js-Docs/
- **GitHub Pages**: https://docs.github.com/pages

---

### 📝 Notas Adicionales

- El proyecto es 100% funcional sin dependencias locales
- Todas las librerías se cargan desde CDN
- El código está optimizado para performance
- Compatible con los navegadores más utilizados
- La experiencia AR funciona mejor con buena iluminación

---

### ✍️ Declaración

Declaro que este trabajo ha sido desarrollado completamente por mí, aplicando los conocimientos adquiridos en el curso de Desarrollo Web. El código es original y las referencias externas están debidamente citadas.

---

**Fecha de Entrega**: 27 de octubre de 2025  
**Hora de Entrega**: Antes de las 09:00

---

🎮 **¡Atrápalos Ya!** ⚡
