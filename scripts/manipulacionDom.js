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
    this.style.backgroundColor = "#2a5298";
  });
});

//foco Evento
// cambia el fondo al recibir foco
// const inputFocus = document.querySelectorAll("input");

// inputFocus.forEach((input) => {
//   input.addEventListener("focus", function () {
//     this.style.backgroundColor = "#d0f0ff";
//   });
// });

// Ejercicios: 

// 1 - Selecciona un elemento por su ID y cambia su texto.
document.getElementById("title-formulario").textContent = "Formulario de Contacto";
// 2 - Cambia el color de fondo de un elemento al hacer clic en él.
document.getElementById("formulario").addEventListener('click', function() {
  this.style.backgroundColor = "#C7D6F0";
});
// 3 - Selecciona todos los elementos con una clase específica y cámbiales el texto.

const parrafos = document.querySelectorAll(".parrafo");

parrafos.forEach( (parrafo) => {
  parrafo.textContent = "Texto actualizado de cada Parrafo";
});

// 4 - Agrega una nueva clase a un elemento seleccionado.
document.querySelector('.titulo-contenedor4').classList.add('clase-nueva');

// 5 - Elimina una clase existente de un elemento.

document.querySelector('.titulo-contenedor4').classList.remove('clase-nueva');
// 6 - Cambia el contenido HTML de un div usando innerHTML.

document.getElementById('div-contenedor4').innerHTML = '<h2>Nuevo Titulo</h2> <br> <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>';

// 7 - Muestra en la consola el texto de un párrafo seleccionado.

 const contenidoParrafo = document.querySelector('.parrafo');

 console.log(contenidoParrafo.textContent);

// 8 - Usa querySelectorAll para seleccionar múltiples elementos y recorrerlos con un bucle.

const parrafosGrupo = document.querySelectorAll(".parrafos");

for (let i = 0; i < parrafosGrupo.length; i++) {
  const element = parrafosGrupo[i];
  console.log(element);
}

// 9 - Crea un botón que, al hacer clic, oculte un párrafo.

const btnOcultar = document.getElementById('btnparrafo');

btnOcultar.addEventListener('click', function() {
  const parrafoSeleccionado = document.querySelector('.parrafo4');
  parrafoSeleccionado.style.display = 'none';
});

// 10 - Agrega un nuevo elemento HTML a un contenedor existente.

const nuevoElemento = document.createElement('p'); // Creamos elemento p.
nuevoElemento.textContent = "Este es un nuevo párrafo agregado dinámicamente."; // Le agregamos el contenido con textContent
nuevoElemento.classList.add('parrafo'); // le agregamos la clase parrafo con los estilos que trae
document.getElementById('div-contenedor4').appendChild(nuevoElemento); // lo agregamos al contenedor con appendChild. añadir un nuevo nodo (elemento, texto, etc.) al final de la lista de hijos de un elemento padre específico



