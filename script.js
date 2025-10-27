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

// Función para activar la Realidad Aumentada
function activarAR() {
    const arContainer = document.getElementById('ar-container');
    const arButtonContainer = document.getElementById('ar-button-container');
    
    if (arContainer && arButtonContainer) {
        // Verificar si el navegador soporta getUserMedia
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Solicitar permiso para acceder a la cámara
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function(stream) {
                    // Detener el stream inmediatamente (solo queremos verificar el permiso)
                    stream.getTracks().forEach(track => track.stop());
                    
                    // Mostrar el contenedor AR
                    arContainer.style.display = 'block';
                    arButtonContainer.style.display = 'none';
                    document.body.style.overflow = 'hidden';
                    
                    // Mostrar mensaje de instrucciones
                    console.log('AR activado - Apunta tu cámara a un marcador Hiro');
                })
                .catch(function(error) {
                    console.error('Error al acceder a la cámara:', error);
                    alert('No se pudo acceder a la cámara. Por favor, permite el acceso a la cámara en la configuración de tu navegador.\n\nError: ' + error.message);
                });
        } else {
            alert('Tu navegador no soporta acceso a la cámara. Por favor, usa un navegador moderno como Chrome, Firefox o Safari.');
        }
    }
}

// Función para cerrar la Realidad Aumentada
function cerrarAR() {
    const arContainer = document.getElementById('ar-container');
    const arButtonContainer = document.getElementById('ar-button-container');
    
    if (arContainer && arButtonContainer) {
        arContainer.style.display = 'none';
        arButtonContainer.style.display = 'block';
        document.body.style.overflow = 'auto';
        
        // Detener todos los streams de video
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function(stream) {
                    stream.getTracks().forEach(track => track.stop());
                })
                .catch(function(error) {
                    console.log('No hay streams activos para detener');
                });
        }
    }
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

// Efecto parallax para el banner
function parallaxEffect() {
    window.addEventListener('scroll', () => {
        const banner = document.querySelector('.banner');
        if (banner) {
            const scrolled = window.pageYOffset;
            banner.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
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

// Inicializar todas las funciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    parallaxEffect();
    createParticles();
    
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
