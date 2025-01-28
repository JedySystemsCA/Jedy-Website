
/* --pocicion inicial */
let ubicacionPrincipal = window.pageYOffset;
let $nav = document.querySelector("nav");

/* --evento scroll */
window.addEventListener("scroll", function() {
    
    /* --muestra la ubicacion cada vez que hagas scroll */
     console.log(window.pageYOffset);

    /* --donde nos encontramos actualmente */
     let desplazamientoActual = window.pageYOffset;

    /* --condicon para ocultar o mostrar el menu */
    if(ubicacionPrincipal >= desplazamientoActual) {
        /* --si es mayor o igual se muesta */
        $nav.style.top = "-0px";
         console.log('Ubicacion Principal')
         console.log(ubicacionPrincipal)
         console.log('desplazamiento')
         console.log(desplazamientoActual)
        
        
    } 
    
    else {
        /* --sino lo ocultamos añadiendo un top negativo */
        $nav.style.top = "-100px";
         console.log('Ubicacion Principal')
         console.log(ubicacionPrincipal)
         console.log('desplazamiento')
         console.log(desplazamientoActual)
    }
    if(ubicacionPrincipal> 550 ){
        $nav.classList.add('solid');
        
    }else{
        $nav.classList.remove('solid');
    }

    /* --actualizamos la ubicacion principal */
     ubicacionPrincipal = desplazamientoActual;
     
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
  