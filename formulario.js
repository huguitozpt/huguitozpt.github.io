const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
  // Obtiene los valores de los campos del formulario
  const nombre = formulario.nombre.value;
  const email = formulario.email.value;
  const mensaje = formulario.mensaje.value;
  
  // Aquí iría el código para enviar los datos del formulario por correo electrónico o guardarlos en una base de datos
  // no se como se hace todavia
  // Muestra un mensaje de confirmación al usuario
  //alert(`Gracias por contactarnos, ${nombre}. Te responderemos pronto a ${email}.`);
});