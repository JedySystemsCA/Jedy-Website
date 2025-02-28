// Añadir el evento de click al botón de enviar
const botonEnviarCorreo = document.getElementById('submitEmailCorreo');

console.log(botonEnviarCorreo)

botonEnviarCorreo.addEventListener('click', async (event) => {
  event.preventDefault(); // Evita que el formulario recargue la página

  // Recopilar los datos del formulario
  var correo = document.getElementById('emailCorreo').value;
  var empresa = document.getElementById('empresaCorreo').value;
  var producto = document.getElementById('productoCorreo').value;
  var mensaje = document.getElementById('mensajeCorreo').value;
  var asunto = "Contacto JedyWebsite - Formulario";

  // Validar los datos
  var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexCorreo.test(correo)) {
    alert('El correo necesita tener @');
    return;
  }

  if (empresa.length < 3 || empresa.length > 50) {
    alert('La longitud del nombre de la empresa debe de estar entre 3 y 50 caracteres.');
    return;
  }

  botonEnviar.disabled = true;
  botonEnviar.textContent = 'Enviando...';

  // Crear objeto JSON
  var data = {
    Email: correo,
    Empresa: empresa,
    Producto: producto,
    Mensaje: mensaje,
    Asunto: asunto
  };

  console.log(data)
  //Try catch para la petición a la api
  try {
    console.log(data)

    const response = await fetch('https://cmo.jedyhealth.com/api/correo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Formulario enviado con éxito.');
    } else {
      const errorData = await response.json();
      const errorMessage = errorData.error;
      alert(`Error al enviar el formulario: ${errorMessage}`);
    }
  } catch (error) {
    alert('Error en el servidor: El servidor no ha respondido');
  } finally {
    botonEnviar.disabled = false;
    botonEnviar.textContent = 'Enviar';
  }
});
