// Añadir el evento de click al botón de enviar
const botonEnviar = document.getElementById('submitSuscripcion');

botonEnviar.addEventListener('click', async (event) => {
  event.preventDefault(); // Evita que el formulario recargue la página

  // Recopilar los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const cedula = document.getElementById('cedula').value;
  const login = document.getElementById('login').value;
  const telefono = document.getElementById('telefono').value;
  const correo = document.getElementById('correo').value;
  const rol = document.getElementById('rol').value;
  const contrasena = document.getElementById('contrasena').value;
  const confirmarContrasena = document.getElementById('confirmarContrasena').value;

  // Validar los datos
  const regexContrasena = /^(?=.*[A-Z])(?=.*[!@#$&+-_/\.*]).{8,12}$/;
  const soloNumeros = /^[0-9]+$/;
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (login.length < 3 || login.length > 10) {
    alert('La longitud del login debe de estar entre 3 y 10 caracteres.');
    return;
  }

  if (nombre.length < 3 || nombre.length > 15) {
    alert('La longitud del nombre debe de estar entre 3 y 15 caracteres.');
    return;
  }

  if (apellido.length < 3 || apellido.length > 15) {
    alert('La longitud del apellido debe de estar entre 3 y 15 caracteres.');
    return;
  }


  if (telefono.length < 3 || telefono.length > 13) {
    alert('La longitud del teléfono debe de estar entre 3 y 13 caracteres.');
    return;
  }

  if (!soloNumeros.test(cedula)) {
    alert('La cédula debe contener solo números.');
    return;
  }

  if (!soloNumeros.test(telefono)) {
    alert('El teléfono debe contener solo números.');
    return;
  }

  if (!regexCorreo.test(correo)) {
    alert('El correo necesita tener @');
    return;
  }

  if (rol === "Seleccione su rol") {
    alert('Es necesario que selecciones un Rol');
    return;
  }

  if (!regexContrasena.test(contrasena)) {
    alert('La contraseña debe contener una letra Mayúscula, un caracter especial y su longitud debe estar entre 8 y 12 caracteres.');
    return;
  }

  if (contrasena !== confirmarContrasena) {
    alert('Las contraseñas no coinciden. Por favor, verifique.');
    return;

   }
   
   botonEnviar.disabled = true;
   botonEnviar.textContent = 'Enviando...';
   
   // Crear objeto JSON
   const data = {
     Login: login,
     Email: correo,
     Cedula: cedula,
     Telefono: telefono,
     Rol: rol,
     Nombre: nombre,
     Apellido: apellido,
     ConfirmPassword: contrasena, 
     Password: contrasena
   };
   
   //Try catch para la petición a la api
   try {
     if (!alertify.myAlert) {
       alertify
         .alert("", "<div style='text-align: center;'>Los datos se están procesando.</div>", function () {
           alertify.message('OK');
         }).set({
           title: 'Espere un momento.',
           closable: false // Evita que se pueda cerrar la alerta
         });
     }
   
     const response = await fetch('https://cmo.jedyhealth.com/api/User', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(data)
     });
   
     if (response.ok) {
       if (!alertify.myAlert) {
         alertify
           .alert("", "<div style='text-align: center;'>Usuario de Prueba Correcto. Revise su correo!</div>", function () {
             alertify.message('OK');
             botonEnviar.disabled = false;
             botonEnviar.textContent = 'Enviar';
           }).set({
             title: 'Exito!',
           });
       }
     } else {
       const errorData = await response.json();
       const errorMessage = errorData.error;
   
       if (!alertify.myAlert) {
         alertify
           .alert("", `<div style="text-align: center;">${errorMessage}</div>`, function () {
             alertify.message('OK');
             botonEnviar.disabled = false;
             botonEnviar.textContent = 'Enviar';
           }).set({
             title: 'Error al Crear Datos de Prueba!',
             closable: false
           });
       }
     }
   } catch (error) {
     if (!alertify.myAlert) {
       alertify
         .alert("", `<div style="text-align: center;">El servidor no ha respondido</div>`, function () {
           alertify.message('OK');
           botonEnviar.disabled = false;
           botonEnviar.textContent = 'Enviar';
         }).set({
           title: 'Error en el Servidor!',
           closable: false
         });
     }
   }
   
});