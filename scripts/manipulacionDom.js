//keyup evento
document.getElementById("nombre").addEventListener("keyup", function (e) {
  console.log("Tecla:", e.key);
});

//evento SUBMIT
document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensaje enviado");
});

//Blur Evento
// Cambia fondo al perder foco
const inputBlur = document.querySelectorAll("input");

inputBlur.forEach((input) => {
  input.addEventListener("blur", function () {
    this.style.backgroundColor = "#8370FA";
  });
});

//foco Evento
// cambia el fondo al recibir foco
const inputFocus = document.querySelectorAll("input");

inputFocus.forEach((input) => {
  input.addEventListener("focus", function () {
    this.style.backgroundColor = "#d0f0ff";
  });
});
