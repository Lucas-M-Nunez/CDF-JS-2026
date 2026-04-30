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
})
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
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
