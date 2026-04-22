/**
 * menu-scroll.js
 * Funcionalidad para ocultar/mostrar el menú al hacer scroll
 * Comportamiento: se oculta al desplazarse hacia abajo, aparece al desplazarse hacia arriba
 * 
 * @version 1.0.0
 * @author Jedy Health Team
 */

(function() {
    'use strict';

    // Variables
    const header = document.getElementById('mainHeader');
    let lastScrollY = window.scrollY;
    let ticking = false;
    let headerHeight = 80; // Altura inicial por defecto
    
    // Actualizar altura del header dinámicamente
    function updateHeaderHeight() {
        if (header) {
            headerHeight = header.offsetHeight;
        }
    }
    
    // Función para ocultar el menú
    function hideMenu() {
        if (header && !header.classList.contains('header-hidden')) {
            header.classList.add('header-hidden');
            // Añadir atributo para debugging
            header.setAttribute('data-menu-state', 'hidden');
        }
    }
    
    // Función para mostrar el menú
    function showMenu() {
        if (header && header.classList.contains('header-hidden')) {
            header.classList.remove('header-hidden');
            header.setAttribute('data-menu-state', 'visible');
        }
    }
    
    // Función principal que maneja el scroll
    function handleScroll() {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
        
        // Scroll hacia ABAJO y pasamos la altura del header + umbral -> ocultar
        if (scrollDirection === 'down' && currentScrollY > headerHeight + 50) {
            hideMenu();
        } 
        // Scroll hacia ARRIBA o estamos cerca del top -> mostrar
        else if (scrollDirection === 'up' || currentScrollY <= 50) {
            showMenu();
        }
        
        // Actualizar última posición
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    // Configurar el event listener con requestAnimationFrame para optimización
    if (header) {
        // Actualizar altura al inicio
        updateHeaderHeight();
        
        // Evento de scroll optimizado
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        // Actualizar altura del header cuando cambie el tamaño de la ventana
        window.addEventListener('resize', () => {
            updateHeaderHeight();
            // Si el header estaba oculto y la ventana cambia de tamaño, mostrarlo para evitar problemas de layout
            if (window.scrollY <= 50) {
                showMenu();
            }
        });
        
        // Asegurar que el menú sea visible al cargar la página si está en el top
        if (window.scrollY === 0) {
            showMenu();
        }
        
        // Mejora de UX: mostrar el menú al hacer hover cerca del borde superior
        let hoverTimeout;
        window.addEventListener('mousemove', (e) => {
            if (e.clientY <= 50 && header.classList.contains('header-hidden')) {
                clearTimeout(hoverTimeout);
                hoverTimeout = setTimeout(() => {
                    showMenu();
                }, 50);
            }
        });
        
        // También mostrar al hacer scroll al top
        window.addEventListener('scroll', () => {
            if (window.scrollY <= 10) {
                showMenu();
            }
        });
        
        // Opcional: mostrar el menú cuando el usuario intenta hacer scroll hacia arriba rápidamente
        let wheelTimeout;
        window.addEventListener('wheel', (e) => {
            if (e.deltaY < 0 && header.classList.contains('header-hidden')) {
                clearTimeout(wheelTimeout);
                wheelTimeout = setTimeout(() => {
                    showMenu();
                }, 100);
            }
        });
        
        console.log('✅ Menu scroll handler initialized');
    } else {
        console.warn('⚠️ Header element with id "mainHeader" not found');
    }
})();