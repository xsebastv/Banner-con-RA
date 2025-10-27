// Función para desplazar suavemente a una sección
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Función para activar AR Simple (sin marcador) - ¡MÁS FÁCIL!
function activarARSimple() {
    const arContainer = document.getElementById('ar-container-simple');
    const arButtonContainer = document.getElementById('ar-button-container');
    
    if (!arContainer || !arButtonContainer) {
        alert('❌ Error: Elementos AR no encontrados');
        return;
    }
    
    // Verificar soporte de cámara
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('❌ Tu navegador no soporta acceso a la cámara.\n\n✅ Por favor usa:\n- Chrome (Android/PC)\n- Safari (iPhone/iPad)\n- Firefox (Android/PC)');
        return;
    }
    
    // Solicitar acceso a la cámara
    navigator.mediaDevices.getUserMedia({ 
        video: { 
            facingMode: 'environment', // Cámara trasera en móviles
            width: { ideal: 1280 },
            height: { ideal: 720 }
        } 
    })
    .then(function(stream) {
        console.log('✅ Cámara activada correctamente');
        
        // Detener el stream de prueba
        stream.getTracks().forEach(track => track.stop());
        
        // Mostrar el contenedor AR CORRECTAMENTE
        arContainer.style.display = 'block';
        arContainer.style.position = 'fixed';
        arContainer.style.top = '0';
        arContainer.style.left = '0';
        arContainer.style.width = '100vw';
        arContainer.style.height = '100vh';
        arContainer.style.zIndex = '9999';
        
        arButtonContainer.style.display = 'none';
        document.body.style.overflow = 'hidden';
        
        // Esperar a que A-Frame inicialice
        setTimeout(() => {
            const scene = arContainer.querySelector('a-scene');
            if (scene) {
                console.log('✅ Escena A-Frame cargada');
                
                // Asegurar que la escena ocupe toda la pantalla
                scene.style.width = '100%';
                scene.style.height = '100%';
                scene.style.position = 'absolute';
                scene.style.top = '0';
                scene.style.left = '0';
                scene.style.display = 'block';
                
                // Ocultar videos no deseados
                const videos = document.querySelectorAll('video[autoplay]');
                videos.forEach(video => {
                    video.style.display = 'none';
                    video.style.visibility = 'hidden';
                });
                
                // Forzar renderizado
                if (scene.renderer) {
                    scene.renderer.setPixelRatio(window.devicePixelRatio);
                    scene.renderer.setSize(window.innerWidth, window.innerHeight);
                }
                
                // Mostrar mensaje de éxito
                setTimeout(() => {
                    console.log('🎉 AR listo! Pikachu debería estar visible');
                    // Mostrar notificación al usuario
                    showNotification('⚡ AR Activado! Mueve tu dispositivo');
                }, 1000);
            }
        }, 800);
        
        // Mensaje de ayuda
        console.log('💡 Tip: Mueve tu dispositivo lentamente para ver a Pikachu');
    })
    .catch(function(error) {
        console.error('❌ Error al acceder a la cámara:', error);
        
        let mensaje = '❌ No se pudo acceder a la cámara.\n\n';
        
        if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
            mensaje += '� Permiso denegado.\n\n';
            mensaje += 'Por favor:\n';
            mensaje += '1. Permite el acceso a la cámara\n';
            mensaje += '2. Recarga la página\n';
            mensaje += '3. Intenta de nuevo';
        } else if (error.name === 'NotFoundError') {
            mensaje += '📷 No se encontró cámara.\n\n';
            mensaje += 'Verifica que tu dispositivo tenga cámara.';
        } else if (error.name === 'NotReadableError') {
            mensaje += '⚠️ Cámara en uso.\n\n';
            mensaje += 'Cierra otras apps que usen la cámara.';
        } else {
            mensaje += 'Error: ' + error.message;
        }
        
        alert(mensaje);
    });
}

// Función legacy para compatibilidad
function activarAR() {
    activarARSimple();
}

// Función para cerrar la Realidad Aumentada
function cerrarAR() {
    const arContainerSimple = document.getElementById('ar-container-simple');
    const arButtonContainer = document.getElementById('ar-button-container');
    
    // Cerrar contenedor AR
    if (arContainerSimple) {
        arContainerSimple.style.display = 'none';
    }
    
    if (arButtonContainer) {
        arButtonContainer.style.display = 'block';
        document.body.style.overflow = 'auto';
    }
    
    // Ocultar y detener todos los videos
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.style.display = 'none';
        video.style.visibility = 'hidden';
        if (video.srcObject) {
            video.srcObject.getTracks().forEach(track => track.stop());
        }
        video.pause();
        video.src = '';
        video.load();
    });
    
    console.log('✅ AR cerrado y videos limpiados');
}

// Animación de entrada para las tarjetas al hacer scroll
function animateOnScroll() {
    const cards = document.querySelectorAll('.info-card, .character-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Banner fijo - sin parallax molesto
function initBanner() {
    const banner = document.querySelector('.banner');
    if (banner) {
        // Mantener el banner fijo y estable
        banner.style.transform = 'none';
        banner.style.position = 'relative';
    }
}

// Función para mostrar el marcador Hiro
function mostrarMarcadorHiro() {
    const marcadorUrl = 'https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png';
    window.open(marcadorUrl, '_blank');
}

// Contador animado para estadísticas
function animateCounters() {
    const stats = [
        { element: document.querySelector('.info-card:nth-child(2) p:nth-child(2)'), target: 25 },
        { element: document.querySelector('.info-card:nth-child(2) p:nth-child(3)'), target: 1200 },
        { element: document.querySelector('.info-card:nth-child(2) p:nth-child(4)'), target: 23 }
    ];
    
    stats.forEach(stat => {
        if (stat.element) {
            const targetNumber = stat.target;
            let current = 0;
            const increment = targetNumber / 100;
            const duration = 2000; // 2 segundos
            const stepTime = duration / 100;
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= targetNumber) {
                    current = targetNumber;
                    clearInterval(counter);
                }
                // Actualizar el texto manteniendo el formato original
                const originalText = stat.element.textContent;
                const label = originalText.split(':')[0];
                const suffix = originalText.includes('+') ? '+' : '';
                stat.element.textContent = `${label}: ${Math.floor(current)}${suffix}`;
            }, stepTime);
        }
    });
}

// Efecto de partículas para el banner (opcional)
function createParticles() {
    const banner = document.querySelector('.banner');
    if (banner) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 5 + 2}px;
                height: ${Math.random() * 5 + 2}px;
                background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${Math.random() * 3 + 2}s infinite ease-in-out;
                animation-delay: ${Math.random() * 2}s;
            `;
            banner.appendChild(particle);
        }
    }
}

// Easter egg: Pikachu sound effect
function pikachuSound() {
    const pikachu = document.getElementById('pikachu-model');
    if (pikachu) {
        pikachu.addEventListener('click', () => {
            console.log('Pika Pika! ⚡');
            // Aquí podrías agregar un sonido real si tienes un archivo de audio
            showNotification('⚡ Pika Pika! ⚡');
        });
    }
}

// Mostrar notificación temporal
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 215, 0, 0.95);
        color: #1a1a1a;
        padding: 20px 40px;
        border-radius: 10px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 10000;
        animation: fadeInOut 2s ease-in-out;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Función para ocultar videos molestos constantemente
function hideUnwantedVideos() {
    const videos = document.querySelectorAll('video[autoplay], video[playsinline]');
    videos.forEach(video => {
        video.style.display = 'none !important';
        video.style.visibility = 'hidden !important';
        video.style.position = 'absolute';
        video.style.top = '-9999px';
        video.style.left = '-9999px';
        video.style.width = '0';
        video.style.height = '0';
        video.style.opacity = '0';
    });
}

// Ejecutar constantemente para evitar videos molestos
setInterval(hideUnwantedVideos, 1000);

// Inicializar todas las funciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Event Listeners para los botones
    const btnVerModelo = document.getElementById('btn-ver-modelo');
    const btnActivarAR = document.getElementById('btn-activar-ar');
    const btnActivarARSimple = document.getElementById('btn-activar-ar-simple');
    const btnCerrarAR = document.getElementById('btn-cerrar-ar');
    
    if (btnVerModelo) {
        btnVerModelo.addEventListener('click', () => scrollToSection('modelo3d'));
    }
    
    if (btnActivarAR) {
        btnActivarAR.addEventListener('click', activarAR);
    }
    
    if (btnActivarARSimple) {
        btnActivarARSimple.addEventListener('click', activarARSimple);
    }
    
    if (btnCerrarAR) {
        btnCerrarAR.addEventListener('click', cerrarAR);
    }
    
    // Inicializar animaciones y efectos
    animateOnScroll();
    initBanner();
    hideUnwantedVideos(); // Ocultar videos desde el inicio
    // createParticles(); // Removido - muy confuso
    
    // Animar contadores cuando sean visibles
    const infoSection = document.querySelector('.info-section');
    if (infoSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(infoSection);
    }
    
    console.log('🎮 Proyecto Pokémon cargado correctamente');
    console.log('⚡ Desarrollado con HTML, CSS, JavaScript, A-Frame y AR.js');
});

// Prevenir zoom en dispositivos móviles al hacer doble tap
document.addEventListener('dblclick', (e) => {
    e.preventDefault();
}, { passive: false });

// Gestión de errores de A-Frame
window.addEventListener('error', (e) => {
    if (e.message.includes('A-Frame')) {
        console.warn('Error de A-Frame capturado:', e.message);
        // No mostrar el error al usuario, solo registrarlo
    }
});

// Detección de dispositivo móvil
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Ajustar experiencia según el dispositivo
if (isMobile()) {
    console.log('📱 Dispositivo móvil detectado - Optimizando experiencia');
    // Podrías agregar ajustes específicos para móviles aquí
}

// Log de bienvenida
console.log(`
╔═══════════════════════════════════════╗
║                                       ║
║     🎮 BANNER POKÉMON INTERACTIVO     ║
║                                       ║
║   Tecnologías: HTML5 | CSS3 | JS     ║
║   3D: A-Frame | AR: AR.js            ║
║                                       ║
║   Proyecto Educativo 2025            ║
║   Ingeniería Multimedia              ║
║                                       ║
╚═══════════════════════════════════════╝
`);
