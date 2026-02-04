function modoOscuro() {
document.body.classList.toggle("oscuro");
}


  const hora = new Date().getHours();
  let mensaje = "";

  if (hora >= 6 && hora < 12) {
    mensaje = "¡Buenos días!";
  } else if (hora >= 12 && hora < 18) {
    mensaje = "¡Buenas tardes!";
  } else {
    mensaje = "¡Buenas noches!";
  }

  document.getElementById("saludo").textContent = mensaje;