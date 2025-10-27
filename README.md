# 🎮 Pokémon - Banner Interactivo con Realidad Aumentada

![Pokémon](https://img.shields.io/badge/Pokémon-Project-yellow?style=for-the-badge&logo=pokemon)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![A-Frame](https://img.shields.io/badge/A--Frame-EF2D5E?style=for-the-badge&logo=aframe&logoColor=white)

## 📋 Descripción del Proyecto

Banner web interactivo de **Pokémon** con modelo 3D de Pikachu embebido y experiencia de **Realidad Aumentada (AR) sin marcadores**. Desarrollado como proyecto académico para la materia de **Desarrollo Web 2025-2** de la **Facultad de Ingeniería - Ingeniería Multimedia**.

### ✨ Características Principales

- ✅ **Banner Hero Animado**: Sección principal con gradientes dinámicos y efectos visuales
- ✅ **Información Oficial Completa**: Datos verificados de la serie Pokémon (temporadas, episodios, películas, regiones, impacto cultural)
- ✅ **Galería de Personajes**: Presentación interactiva de 6 Pokémon icónicos con animaciones
- ✅ **Modelo 3D de Pikachu**: Visualización interactiva en 3D con controles de rotación y animaciones de flotación
- ✅ **Realidad Aumentada Sin Marcadores**: Experiencia AR moderna sin necesidad de códigos QR, usando la cámara del dispositivo
- ✅ **Diseño 100% Responsive**: Adaptable a móviles, tablets y desktop con múltiples breakpoints
- ✅ **Navegación Fluida**: Scroll suave entre secciones con animaciones
- ✅ **Código Limpio**: Separación correcta de responsabilidades (HTML, CSS, JavaScript)
- ✅ **Publicado en GitHub Pages**: Accesible públicamente

## �️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Grid, Flexbox, variables CSS y animaciones avanzadas
- **JavaScript ES6+**: Interactividad, event listeners y manejo de eventos sin código inline

### Frameworks y Librerías
- **[A-Frame 1.4.2](https://aframe.io/)**: Framework para experiencias 3D y VR en la web
- **[AR.js](https://ar-js-org.github.io/AR.js/)**: Biblioteca de Realidad Aumentada basada en WebRTC

### Buenas Prácticas Implementadas
- ✅ Separación completa de HTML, CSS y JavaScript
- ✅ Sin código inline (`onclick`, `style=""`)
- ✅ Event listeners centralizados en JavaScript
- ✅ Variables CSS para mantenibilidad
- ✅ Código comentado y organizado

## 🚀 Instalación y Uso

### Opción 1: Acceso Directo (GitHub Pages)

**Visita el sitio en vivo:**
```
https://xsebastv.github.io/Banner-con-RA/
```

### Opción 2: Uso Local

1. **Clona el repositorio**:
```bash
git clone https://github.com/xsebastv/Banner-con-RA.git
cd Banner-con-RA
```

2. **Abre el proyecto**:
   - Abre `index.html` directamente en tu navegador
   - O usa Live Server en VS Code para desarrollo

## 📱 Cómo Usar la Realidad Aumentada

### AR Sin Marcadores (Moderna)

1. **Activa la RA**: Haz clic en **"Activar Realidad Aumentada"**
2. **Permite la cámara**: Acepta el acceso cuando el navegador lo solicite
3. **Explora**: Mueve tu dispositivo lentamente para ver a Pikachu en tu entorno
4. **Observa**: Pikachu rotará y flotará automáticamente
5. **Cierra**: Usa el botón "✕ Cerrar" cuando termines

### 📋 Requisitos para AR
- ✅ Navegador moderno (Chrome 90+, Safari 14+, Firefox 88+)
- ✅ Dispositivo con cámara (móvil preferido)
- ✅ Conexión HTTPS (GitHub Pages incluido)
- ✅ Buena iluminación ambiental

## 📂 Estructura del Proyecto

```
Banner-con-RA/
│
├── index.html              # Página principal HTML (estructura)
├── styles.css              # Estilos CSS (presentación)
├── script.js               # JavaScript (comportamiento)
├── README.md              # Documentación principal
└── ENTREGA.md             # Documento de entrega académica
```

## 🎨 Características de Diseño

### 🎨 Paleta de Colores Oficial
- **Amarillo Pokémon**: `#FFDE00` (Pikachu)
- **Azul Pokémon**: `#3B4CCA` (Logo oficial)
- **Rojo Pokéball**: `#FF1C1C`
- **Azul Claro**: `#6EABFF`
- **Fondo Claro**: `#F0F8FF`

### 📐 Responsive Design
- **Desktop**: 1024px+ (diseño completo)
- **Tablet**: 768px - 1023px (adaptado)
- **Móvil Grande**: 480px - 767px (optimizado)
- **Móvil Pequeño**: 360px - 479px (compacto)
- **Landscape**: Soporte para orientación horizontal

### ✨ Animaciones y Efectos
- Transiciones suaves entre secciones
- Rotación automática del modelo 3D (360°)
- Hover effects en tarjetas con escala y rotación
- Animación de flotación en Pikachu
- Scroll smooth navigation
- Fade in on scroll para tarjetas

## 💻 Compatibilidad

### Navegadores Soportados
| Navegador | Versión Mínima | 3D | AR | Estado |
|-----------|---------------|----|----|--------|
| Chrome    | 90+           | ✅ | ✅ | Completo |
| Safari    | 14+           | ✅ | ✅ | Completo |
| Firefox   | 88+           | ✅ | ⚠️ | Parcial AR |
| Edge      | 90+           | ✅ | ✅ | Completo |

### Dispositivos Probados
- ✅ Desktop (Windows, macOS, Linux)
- ✅ iPhone (Safari iOS 14+)
- ✅ Android (Chrome 90+)
- ✅ Tablets (iPad, Android)

## 🎯 Requisitos Cumplidos

### ✅ Requisitos Obligatorios
- ✅ **Información oficial relevante**: Nombre, resumen, temporadas (25+), personajes principales (6), episodios (1200+), películas (23), regiones Pokémon
- ✅ **Modelo 3D integrado**: Pikachu en 3D con A-Frame, interactivo con controles de cámara
- ✅ **Realidad Aumentada**: Compatible con AR sin marcadores, acceso a cámara del dispositivo
- ✅ **Diseño visual atractivo**: Paleta oficial Pokémon, animaciones modernas, efectos visuales
- ✅ **Tecnologías web**: HTML5, CSS3, JavaScript ES6+
- ✅ **Framework 3D**: A-Frame 1.4.2 integrado
- ✅ **Publicado en GitHub Pages**: Accesible en https://xsebastv.github.io/Banner-con-RA/
- ✅ **Responsive**: Funcional en móviles, tablets y desktop

### ✅ Extras Implementados
- ✅ Código limpio sin inline styles ni onclick
- ✅ Event listeners modernos en JavaScript
- ✅ Animaciones CSS avanzadas
- ✅ Optimización de rendimiento
- ✅ Accesibilidad y SEO
- ✅ Documentación completa

## 📖 Proceso de Desarrollo

1. **Planificación**: Análisis de requisitos y selección de Pokémon como tema
2. **Estructura HTML**: Secciones semánticas (header, banner, info, personajes, 3D, AR, footer)
3. **Diseño CSS**: Sistema de Grid/Flexbox, variables CSS, paleta de colores oficial
4. **Modelo 3D**: Construcción de Pikachu con primitivas A-Frame (esferas, conos, cilindros)
5. **Realidad Aumentada**: Integración AR.js sin marcadores, acceso a cámara WebRTC
6. **JavaScript**: Event listeners, animaciones al scroll, gestión de AR
7. **Optimización**: Pruebas en múltiples dispositivos, ajustes responsive
8. **Refactoring**: Eliminación de código inline, separación de responsabilidades
9. **Documentación**: README y ENTREGA completos
10. **Publicación**: Deploy en GitHub Pages

## 🔧 Herramientas Utilizadas

- **Visual Studio Code**: Editor principal con extensiones (Live Server, Prettier)
- **Git & GitHub**: Control de versiones y hosting
- **GitHub Pages**: Despliegue automático
- **Chrome DevTools**: Debugging, responsive testing
- **Firefox Developer Edition**: Testing cross-browser
- **A-Frame Inspector**: Depuración de modelos 3D

## 📚 Recursos y Referencias

- [A-Frame Documentation](https://aframe.io/docs/) - Framework 3D/VR
- [AR.js Documentation](https://ar-js-org.github.io/AR.js-Docs/) - Realidad Aumentada
- [MDN Web Docs](https://developer.mozilla.org/) - Referencias web estándar
- [Pokémon Official](https://www.pokemon.com/) - Información oficial
- [GitHub Pages Guide](https://docs.github.com/pages) - Publicación web

## 👨‍💻 Información Académica

**Proyecto Desarrollado Por:**
- 👤 **Estudiante**: Juan Sebastián Ríos Altamirano
- 🎓 **Programa**: Ingeniería de Sistemas
- 📚 **Asignatura**: Desarrollo Web 2025-2
- 👩‍🏫 **Docente**: Kelly D. Marín
- 🏫 **Institución**: Facultad de Ingeniería
- 📅 **Período**: Semana 14 (20-27 de octubre de 2025)

## 🚀 Características Técnicas Avanzadas

### JavaScript
- Event listeners sin código inline
- Gestión de permisos de cámara
- Detección de errores y feedback al usuario
- Animaciones programáticas
- Intersection Observer para lazy animations

### CSS
- Variables CSS para tema consistente
- Grid y Flexbox responsivos
- Animaciones y transiciones suaves
- Media queries para 5+ breakpoints
- Gradientes y efectos visuales modernos

### HTML
- Estructura semántica (header, section, footer)
- Meta tags optimizados para SEO
- Accesibilidad (alt, aria-labels)
- Sin estilos ni eventos inline

## 📝 Notas de Implementación

- El proyecto cumple **todos** los requisitos obligatorios
- Código limpio siguiendo **mejores prácticas**
- Optimizado para **rendimiento móvil**
- Compatible con **lectores de pantalla**
- Sin dependencias de backend
- 100% funcional en **GitHub Pages**

## 📄 Licencia

Este proyecto es de uso **educativo**. Pokémon es propiedad de **Nintendo**, **Game Freak** y **Creatures Inc.**

## 🤝 Contribuciones

Este es un proyecto académico finalizado. Para sugerencias o mejoras:
1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Agregar mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📧 Contacto

**Estudiante**: Juan Sebastián Ríos Altamirano  
**Programa**: Ingeniería de Sistemas  
**GitHub**: [@xsebastv](https://github.com/xsebastv)  
**Repositorio**: [Banner-con-RA](https://github.com/xsebastv/Banner-con-RA)  
**Sitio Web**: [GitHub Pages](https://xsebastv.github.io/Banner-con-RA/)

---

<div align="center">

### ⚡ ¡Atrápalos Ya! ⚡

**Hecho con ❤️ por Juan Sebastián Ríos Altamirano**

**Ingeniería de Sistemas - Facultad de Ingeniería**

![Pikachu](https://media.giphy.com/media/xuXzcHMkuwvf2/giphy.gif)

*"Quiero ser el mejor, el mejor que habrá"* 🎵

**Proyecto Académico - Desarrollo Web 2025-2**

</div>

## ✨ Características Principales

- **Banner Animado**: Diseño visual atractivo con animaciones CSS y gradientes dinámicos
- **Información Completa**: Detalles oficiales de la serie, temporadas y personajes
- **Modelo 3D Interactivo**: Pikachu modelado en 3D con A-Frame, con animaciones de rotación y flotación
- **Realidad Aumentada**: Experiencia AR usando marcadores Hiro para visualizar a Pikachu en el mundo real
- **Diseño Responsive**: Totalmente adaptable a dispositivos móviles y tablets
- **Navegación Suave**: Scroll animado entre secciones
- **Efectos Visuales**: Parallax, partículas y animaciones de entrada

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos avanzados con Grid, Flexbox, animaciones y transiciones
- **JavaScript**: Interactividad, animaciones dinámicas y gestión de eventos

### Librerías 3D y RA
- **A-Frame 1.4.2**: Framework para crear experiencias WebVR/3D
- **AR.js**: Librería para Realidad Aumentada en navegadores web

### Recursos
- Imágenes oficiales de Pokémon
- Fuentes web del sistema
- Iconos y emojis Unicode

## 📂 Estructura del Proyecto

```
# 🎮 Pokémon - Banner Interactivo con Realidad Aumentada

![Pokémon](https://img.shields.io/badge/Pokémon-Project-yellow?style=for-the-badge&logo=pokemon)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![A-Frame](https://img.shields.io/badge/A--Frame-EF2D5E?style=for-the-badge&logo=aframe&logoColor=white)

## 📋 Descripción del Proyecto

Banner web interactivo de **Pokémon** con modelo 3D de Pikachu embebido y experiencia de Realidad Aumentada (AR) completa. Desarrollado como proyecto académico para la materia de **Desarrollo Web 2025-2** de la **Facultad de Ingeniería - Ingeniería Multimedia**.

### ✨ Características Principales

- ✅ **Banner Animado Hero**: Sección principal con efectos visuales y animaciones
- ✅ **Información Completa**: Detalles oficiales de la serie Pokémon (temporadas, episodios, películas)
- ✅ **Galería de Personajes**: Presentación de los Pokémon más icónicos
- ✅ **Modelo 3D de Pikachu**: Visualización interactiva en 3D con rotación y animaciones
- ✅ **Realidad Aumentada**: Experiencia AR usando marcadores Hiro para ver a Pikachu en tu entorno
- ✅ **Diseño Responsive**: 100% adaptable a móviles, tablets y desktop
- ✅ **Navegación Fluida**: Scroll suave entre secciones
- ✅ **Optimizado para GitHub Pages**: Listo para publicar

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Grid, Flexbox, variables CSS y animaciones
- **JavaScript ES6+**: Interactividad y manejo de eventos

### Frameworks y Librerías
- **[A-Frame 1.4.2](https://aframe.io/)**: Framework para experiencias 3D y VR en la web
- **[AR.js](https://ar-js-org.github.io/AR.js/)**: Biblioteca de Realidad Aumentada basada en marcadores

## 🚀 Instalación y Uso

### Opción 1: Uso Local

1. **Clona el repositorio**:
```bash
git clone https://github.com/xsebastv/Banner-con-RA.git
cd "Banner con RA"
```

2. **Abre el proyecto**:
   - Simplemente abre `index.html` en tu navegador
   - O usa Live Server en VS Code para desarrollo

### Opción 2: GitHub Pages

1. **Sube los archivos** a tu repositorio de GitHub
2. Ve a **Settings** → **Pages**
3. Selecciona la rama `master` y carpeta raíz `/`
4. Guarda y espera unos minutos
5. Tu sitio estará disponible en: `https://xsebastv.github.io/Banner-con-RA/`

## 📱 Cómo Usar la Realidad Aumentada

### Paso 1: Preparar el Marcador
1. Descarga el **Marcador Hiro** desde el botón en la sección AR
2. Imprime el marcador o muéstralo en otra pantalla
3. [Descargar Marcador Hiro](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png)

### Paso 2: Activar la Cámara
1. Haz clic en **"Activar Realidad Aumentada"**
2. Permite el acceso a la cámara cuando se solicite
3. Espera a que la cámara se active

### Paso 3: Ver el Modelo
1. Apunta tu cámara al **marcador Hiro**
2. Verás aparecer a **Pikachu en 3D** sobre el marcador
3. Mueve el marcador para ver el modelo desde diferentes ángulos

### 📋 Requisitos para AR
- ✅ Navegador moderno (Chrome, Firefox, Safari)
- ✅ Acceso a la cámara del dispositivo
- ✅ Buena iluminación ambiental
- ✅ Marcador Hiro impreso o en pantalla

## 📂 Estructura del Proyecto

```
Banner con RA/
│
├── index.html              # Página principal HTML
├── styles.css              # Estilos CSS con animaciones
├── script.js               # JavaScript para interactividad
└── README.md              # Documentación (este archivo)
```

## 🎨 Características de Diseño

### 🎨 Paleta de Colores
- **Amarillo Pokémon**: `#FFD700` / `#FFDE00`
- **Rojo Pokémon**: `#CC0000` / `#FF0000`
- **Azul Pokémon**: `#3B4CCA`
- **Fondo Oscuro**: `#1a1a1a`
- **Blanco**: `#ffffff`

### 📐 Características Responsivas
- Grid system adaptativo
- Breakpoints para móvil, tablet y desktop
- Imágenes y assets optimizados
- Menú responsive con hamburger menu

### ✨ Animaciones
- Transiciones suaves entre secciones
- Rotación automática del modelo 3D
- Hover effects en tarjetas
- Floating animation en Pikachu
- Scroll smooth navigation

## 💻 Compatibilidad

### Navegadores Soportados
| Navegador | Versión Mínima | Estado |
|-----------|---------------|--------|
| Chrome    | 90+           | ✅ Completo |
| Firefox   | 88+           | ✅ Completo |
| Safari    | 14+           | ✅ Completo |
| Edge      | 90+           | ✅ Completo |
| Opera     | 76+           | ⚠️ Parcial |

### Dispositivos
- ✅ Desktop (Windows, macOS, Linux)
- ✅ Smartphones (Android, iOS)
- ✅ Tablets
- ✅ Pantallas 4K

## 🎯 Objetivos Cumplidos

- ✅ Diseñar un banner web interactivo de una serie anime popular (Pokémon)
- ✅ Incluir información oficial relevante (nombre, resumen, temporadas, personajes)
- ✅ Integrar modelo 3D interactivo de Pikachu
- ✅ Implementar Realidad Aumentada compatible con marcadores
- ✅ Diseño visual atractivo y funcional
- ✅ Desarrollo con HTML, CSS y JavaScript
- ✅ Modelo 3D embebido con A-Frame
- ✅ Publicable en GitHub Pages
- ✅ Banner responsive y accesible en móviles

## 📖 Proceso de Desarrollo

1. **Planificación**: Análisis de requisitos y definición de estructura
2. **Diseño**: Creación de mockups y paleta de colores Pokémon
3. **HTML**: Estructura semántica con secciones bien definidas
4. **CSS**: Estilos responsive con Grid/Flexbox y animaciones
5. **JavaScript**: Funcionalidades interactivas (scroll, AR, navegación)
6. **A-Frame**: Implementación del modelo 3D de Pikachu
7. **AR.js**: Integración de Realidad Aumentada con marcadores
8. **Testing**: Pruebas en múltiples dispositivos y navegadores
9. **Optimización**: Mejoras de rendimiento y accesibilidad
10. **Documentación**: README completo con instrucciones

## 🔧 Herramientas Utilizadas

- **Editor**: Visual Studio Code
- **Control de Versiones**: Git & GitHub
- **Testing**: Chrome DevTools, Firefox Developer Edition
- **3D/AR**: A-Frame Framework, AR.js Library
- **Diseño**: CSS3 Grid, Flexbox, Custom Properties
- **Hosting**: GitHub Pages

## 📚 Recursos y Referencias

- [A-Frame Documentation](https://aframe.io/docs/)
- [AR.js Documentation](https://ar-js-org.github.io/AR.js-Docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Pokémon Official Website](https://www.pokemon.com/)
- [Hiro Marker Download](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png)

## 👨‍💻 Información Académica

**Proyecto Desarrollado Para:**
- 📚 **Curso**: Desarrollo Web 2025-2
- 👩‍🏫 **Profesor**: Kelly D. Marín
- 🏫 **Institución**: Facultad de Ingeniería
- 🎓 **Programa**: Ingeniería Multimedia
- 📅 **Semana**: 14 (20-27 de octubre de 2025)

## 🚀 Próximas Mejoras

- [ ] Añadir más modelos 3D de Pokémon
- [ ] Implementar búsqueda de Pokémon por tipo
- [ ] Agregar efectos de sonido
- [ ] Modo oscuro/claro
- [ ] Galería de capturas AR
- [ ] Integración con PokeAPI
- [ ] Animaciones más complejas en 3D
- [ ] Multiplayer AR experiences

## 📝 Notas Adicionales

- El proyecto es 100% funcional y cumple todos los requisitos
- Código limpio y bien comentado
- Optimizado para rendimiento en dispositivos móviles
- Compatible con lectores de pantalla
- Sin dependencias de backend

## 📄 Licencia

Este proyecto es de uso **educativo**. Pokémon es propiedad de **Nintendo**, **Game Freak** y **Creatures Inc.**

## 🤝 Contribuciones

Este es un proyecto académico, pero si deseas sugerir mejoras:
1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Agregar mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📧 Contacto

**Estudiante**: Sebastián  
**GitHub**: [@xsebastv](https://github.com/xsebastv)  
**Repositorio**: [Banner-con-RA](https://github.com/xsebastv/Banner-con-RA)

---

<div align="center">

### ⚡ ¡Atrápalos Ya! ⚡

**Hecho con ❤️ para Ingeniería Multimedia**

![Pikachu](https://media.giphy.com/media/xuXzcHMkuwvf2/giphy.gif)

*"Quiero ser el mejor, el mejor que habrá"* 🎵

</div>/
│
├── index.html          # Página principal con toda la estructura
├── styles.css          # Estilos y animaciones
├── script.js           # Lógica e interactividad
└── README.md           # Este archivo
```

## 🚀 Instalación y Uso

### Opción 1: Visualización Local

1. Clona o descarga este repositorio
2. Abre el archivo `index.html` en un navegador moderno (Chrome, Firefox, Safari, Edge)
3. Para usar la función AR, necesitarás permitir el acceso a la cámara

### Opción 2: GitHub Pages

1. Sube los archivos a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama `main` como fuente
4. Guarda y espera unos minutos
5. Tu sitio estará disponible en: `https://[tu-usuario].github.io/[nombre-repo]/`

## 📱 Funcionalidades

### 1. Banner Principal
- Diseño con gradientes animados
- Botones de navegación interactivos
- Animaciones de entrada

### 2. Sección de Información
- Datos oficiales de la serie
- Tarjetas interactivas con efecto hover
- Información sobre temporadas y películas

### 3. Personajes Principales
- Grid responsive con 6 personajes icónicos
- Iconos animados con efecto bounce
- Información de cada Pokémon

### 4. Modelo 3D
- Pikachu creado con primitivas de A-Frame
- Rotación automática 360°
- Animación de flotación
- Controles interactivos con mouse/touch

### 5. Realidad Aumentada
- Activación de cámara del dispositivo
- Detección de marcador Hiro
- Visualización de Pikachu en AR
- Enlace para descargar el marcador

## 🎯 Requisitos Técnicos Cumplidos

✅ Desarrollado con HTML, CSS y JavaScript  
✅ Modelo 3D embebido con A-Frame  
✅ Compatible con Realidad Aumentada  
✅ Diseño responsive para móviles  
✅ Publicable en GitHub Pages  
✅ Información oficial relevante  
✅ Diseño visual atractivo y funcional  

## 🔧 Proceso de Desarrollo

1. **Planificación**: Selección de Pokémon como tema principal
2. **Estructura HTML**: Creación de secciones semánticas
3. **Diseño Visual**: Implementación de estilos con CSS3
4. **Modelo 3D**: Construcción de Pikachu con primitivas de A-Frame
5. **Integración AR**: Configuración de AR.js con marcadores
6. **Interactividad**: Programación de funciones JavaScript
7. **Optimización**: Pruebas y ajustes responsive
8. **Documentación**: Creación de este README

## 🌐 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+
- ⚠️ Internet Explorer: No compatible

## 📸 Uso de Realidad Aumentada

1. Haz clic en "Activar Realidad Aumentada"
2. Permite el acceso a la cámara
3. Descarga e imprime el marcador Hiro (o muéstralo en otra pantalla)
4. Apunta la cámara al marcador
5. ¡Verás a Pikachu aparecer en 3D sobre el marcador!

**Marcador Hiro**: https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png

## 🎓 Objetivos Educativos Alcanzados

- ✅ Aplicación de conocimientos de desarrollo web moderno
- ✅ Integración de contenido 3D en entornos web
- ✅ Uso de librerías y frameworks especializados
- ✅ Práctica con APIs de navegadores (getUserMedia)
- ✅ Implementación de diseño responsive
- ✅ Publicación en plataformas web públicas

## 👨‍💻 Autor

**Proyecto Educativo**  
Ingeniería Multimedia - Facultad de Ingeniería  
Desarrollo Web 2025-2  
Profesor: Kelly D. Marin

## 📄 Licencia

Este es un proyecto educativo. Pokémon y todos los personajes relacionados son propiedad de Nintendo, Game Freak y Creatures Inc.

## 🔗 Enlaces Útiles

- [A-Frame Documentation](https://aframe.io/docs/)
- [AR.js Documentation](https://ar-js-org.github.io/AR.js-Docs/)
- [Pokémon Official Website](https://www.pokemon.com)
- [GitHub Pages Documentation](https://docs.github.com/pages)

## 📊 Estadísticas del Proyecto

- **Líneas de código**: ~1000+
- **Archivos**: 4
- **Tecnologías**: 6+
- **Secciones**: 5
- **Personajes**: 6

---

**Nota**: Para una mejor experiencia AR, se recomienda usar dispositivos móviles con buena cámara y en un ambiente bien iluminado.

🎮 **¡Atrápalos Ya!** ⚡
