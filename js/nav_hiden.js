let ubicacionPrincipal = window.pageYOffset;
let $nav = document.querySelector("nav");
let navbarCollapse = document.getElementById("navbarNav");

/* --evento scroll */
window.addEventListener("scroll", function() {
    
    /* --muestra la ubicacion cada vez que hagas scroll */
    console.log(window.pageYOffset);

    /* --donde nos encontramos actualmente */
    let desplazamientoActual = window.pageYOffset;

    /* --condicion para ocultar o mostrar el menu */
    if (ubicacionPrincipal >= desplazamientoActual) {
        /* --si es mayor o igual se muestra */
        $nav.style.top = "0px";
        $nav.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; // Fondo blanco opaco cuando se muestra
        document.querySelectorAll('.nav-link').forEach(function(link) {
            link.style.color = "grey"; // Color de las letras a gris cuando se muestra
        });
        console.log('Ubicacion Principal');
        console.log(ubicacionPrincipal);
        console.log('desplazamiento');
        console.log(desplazamientoActual);

    } else {
        /* --sino lo ocultamos añadiendo un top negativo */
        $nav.style.top = "-100px";
        console.log('Ubicacion Principal');
        console.log(ubicacionPrincipal);
        console.log('desplazamiento');
        console.log(desplazamientoActual);
    }
    
    if (desplazamientoActual === 0) {
        $nav.style.backgroundColor = "transparent"; // Fondo transparente en la posición principal
        document.querySelectorAll('.nav-link').forEach(function(link) {
            link.style.color = "white"; // Color de las letras a blanco en la posición principal
        });
    }

    if (desplazamientoActual > 550) {
        $nav.classList.add('solid');
    } else {
        $nav.classList.remove('solid');
    }

    /* --actualizamos la ubicacion principal */
    ubicacionPrincipal = desplazamientoActual;
});

/* --evento para detectar el colapso del navbar en pantallas pequeñas */
navbarCollapse.addEventListener('show.bs.collapse', function () {
    $nav.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; // Fondo blanco opaco cuando el navbar está colapsado
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.style.color = "grey"; // Color de las letras a gris
    });
});

navbarCollapse.addEventListener('hide.bs.collapse', function () {
    if (window.pageYOffset === 0) {
        $nav.style.backgroundColor = "transparent"; // Fondo transparente cuando el navbar está en la posición principal
        document.querySelectorAll('.nav-link').forEach(function(link) {
            link.style.color = "white"; // Color de las letras a blanco
        });
    }
});

// Definir una función para deshabilitar console.log
function deshabilitarconsolelog() {
    if (!window.console) {
      console = {};
    }
    
    // Sobrescribir console.log con una función vacía
    window.console.log = function() {
      // No hacer nada
    }
}

// Llamar a la función para deshabilitar console.log
deshabilitarconsolelog();

// Ejemplo de console.log que no producirá salida en la consola
console.log("Este mensaje no se mostrará en la consola si deshabilitaste console.log");
