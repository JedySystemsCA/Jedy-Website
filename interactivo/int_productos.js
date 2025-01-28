
const mostrarMenu = document.querySelector('#menu')
const contenidoMenu = document.querySelector('#options')


mostrarMenu.addEventListener('click', () => {
    mostrarMenu.classList.toggle('animacionMenu')
    contenidoMenu.classList.toggle('activeMenu')
});

function Productos(evt, product) {
    // Se declaran todas las variables
    var i, tabcontent, tablinks;
  
    // Obtener todos los elementos con class="tabcontent" y ocultarlos
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Obtenga todos los elementos con class="tablinks" y elimine la clase "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Muestre la pestaña actual y agregue una clase "activa" al enlace que abrió la pestaña
    document.getElementById(product).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();

