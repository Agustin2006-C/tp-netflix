function toggleRespuesta(respuestaId) {
    const respuesta = document.getElementById(respuestaId);
    respuesta.classList.toggle('mostrar');
  }
  // Función para alternar la visibilidad del menú desplegable
  function toggleDropdown() {
    var opcionesIdioma = document.getElementById("opcionesIdioma");
    opcionesIdioma.style.display = opcionesIdioma.style.display === "none" ? "block" : "none";
  }
  
  // Agregar evento de clic al botón del idioma
  var idiomaBtn = document.getElementById("idiomaBtn");
  idiomaBtn.addEventListener("click", toggleDropdown);
  
  //Funcion para cambiar idioma
  function seleccionarIdioma(idioma){
    document.documentElement.lang = idioma;
  }

  function validateForm(event) {
    // Obtener los valores de los campos
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["pass"].value;
  
    // Realizar validaciones
    if (email === "") {
      alert("Por favor, ingresa un email válido");
      event.preventDefault(); // Evitar el envío del formulario
      return;
    }
  
    if (password === "") {
      alert("Por favor, ingresa una contraseña");
      event.preventDefault(); // Evitar el envío del formulario
      return;
    }
  
    location.href = 'index.html'
  }