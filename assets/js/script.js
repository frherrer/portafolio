
  document.getElementById("form-contacto").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    let errores = [];

    if (nombre === "") errores.push("Debes ingresar tu nombre.");
    if (correo === "") {
      errores.push("Debes ingresar tu correo.");
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo)) {
      errores.push("El correo no es válido.");
    }
    if (mensaje === "") errores.push("Debes ingresar un mensaje.");

    if (errores.length > 0) {
      Swal.fire({
        icon: "warning",
        title: "Revisa el formulario",
        html: errores.join("<br>"),
        confirmButtonText: "Entendido"
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarme. Te responderé pronto.",
        confirmButtonText: "OK"
      });
      this.reset();
    }
  });
