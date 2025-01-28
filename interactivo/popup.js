// obtener el modal

var modal = document.getElementById("myModal");


// boton que abre el modal

var btn = document.getElementById("myBtn");


// el <span> cierra el modal

var span = document.getElementsByClassName("close")[0];

// click en el boton para abrir el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// dar click en la x para cerrarlo
span.onclick = function() {
  modal.style.display = "none";
}

// dar click afuera del modal para salir 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}