
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

// MODIFICACION DE ESTILOS CON JS ----------------------------------------------------------
// ----------------- PRACTICO NUMERO 3 CLASE 3 ---------------------------------------------
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

// document.getElementById('div-contenedor4').innerHTML = '<h2>Nuevo Titulo</h2> <br> <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>';

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
nuevoElemento.classList.add('parrafo'); // le agregamos la clase parrafo con los estilos que trae
document.getElementById('div-contenedor4').appendChild(nuevoElemento); // lo agregamos al contenedor con appendChild. añadir un nuevo elemento.

// EVENTOS CON JS ----------------------------------------------------------
// ----------------- PRACTICO NUMERO 3 CLASE 3 ---------------------------------------------
// Ejercicios: 

// 1 - Crea un botón que muestre un mensaje en consola al hacer clic.

const btnClickeame = document.getElementById("btnClickeame");

btnClickeame.addEventListener("click", () => {
  console.log("¡Botón clickeado!");
});

// 2 - Haz que un campo de texto cambie su color de fondo al escribir en él.

const input = document.getElementById("mensaje");

input.addEventListener("input", () => {
  input.style.backgroundColor = "#057e07";
});

// 3 - Implementa un contador que aumente cada vez que se haga clic en un botón.

const btnClick = document.getElementById("btnClickeame");
let contador = 0;

btnClick.addEventListener("click", () => {
  contador++;
  console.log(`Boton cleckeado ${contador} veces`);
});

// 4 - Muestra un mensaje de error si un campo de texto está vacío al enviar un formulario.

const form = document.getElementById("formulario");
const inputsForm = document.querySelectorAll("#formulario input");

form.addEventListener("submit", (e) => {
  let camposVacios = [];

  inputsForm.forEach((input) => {
    if (input.value.trim() === "") {
      camposVacios.push(input.name);
      input.style.border = "2px solid red";
    } else {
      input.style.border = "2px solid green";
    }
  });

  if (camposVacios.length > 0) {
    e.preventDefault();
    alert("Hay campos vacios: "+ camposVacios.join(' - '));
  }
});

// 5 - Cambia la posición de un elemento cuando se pase el ratón sobre él.

const btn = document.getElementById('btnClickeame');

btn.addEventListener('mouseover', () => {
  btn.style.position = 'absolute';
  btn.style.top = `${Math.random() * 500}px`;
  btn.style.left = `${Math.random() * 500}px`;
});

// 6 - Detecta y muestra en la consola la tecla presionada por el usuario.

const telcaPresionada = document.getElementById('nombre');

telcaPresionada.addEventListener('keyup', (input) => {
  console.log('tecla: '+input.key);
});

// 7 - Implementa un botón que oculte o muestre un elemento al hacer clic (toggle).
const btnToggle = document.getElementById('btn');
const formulario = document.getElementById('formulario');

let toggle = false;

btnToggle.addEventListener('click', () => {
  if (toggle === true) {
    formulario.style.display = 'none';
    toggle = false; // 🔥 actualizar estado
  } else {
    formulario.style.display = 'block';
    toggle = true; // 🔥 actualizar estado
  }
});

// 8 - Crea un campo de selección (dropdown) que actualice un párrafo con la opción seleccionada.

const select = document.getElementById('select');
const parrafo = document.getElementById('parrafo');
select.addEventListener('change', () => {
  parrafo.textContent = `Opción seleccionada: ${select.value}`;
});

// 9 - Implementa un formulario con validación para correos electrónicos.

const formEmail = document.getElementById('formulario');
formEmail.addEventListener('submit', (e) => {
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // formas de validar un email, con regex, expresion regular.

  if (!emailRegex.test(emailValue)) {
    e.preventDefault();
    alert('Por favor, introduce un correo electrónico válido.');
  }
});

// 10 - Haz un evento que cambie el texto de un botón al hacer clic en él.

const btnCambiarTexto = document.getElementById('resetBtn');
btnCambiarTexto.addEventListener('click', () => {
  btnCambiarTexto.textContent = '¡No funciona el reset, vuelva pronto!';
});

