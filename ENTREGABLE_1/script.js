
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

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("saludo").textContent = mensaje;

  const btnEducacion = document.getElementById("btnEducacion");
  const educacion = document.getElementById("educacion");

  btnEducacion.addEventListener("click", () => {
    if (educacion.style.display === "none") {
      educacion.style.display = "block";
      btnEducacion.textContent = "Ocultar educación";
    } else {
      educacion.style.display = "none";
      btnEducacion.textContent = "Mostrar educación";
    }
  });
});

  const btnContacto = document.getElementById("btnContacto");
  const contacto = document.getElementById("contacto");

  btnContacto.addEventListener("click", () => {
    if (contacto.style.display === "none") {
      contacto.style.display = "block";
      btnContacto.textContent = "Ocultar Información de Contacto";
    } else {
      contacto.style.display = "none";
      btnContacto.textContent = "Mostrar Información de Contacto";
    }
  });



