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

const inputsForm = document.querySelectorAll("div input");
const form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {
    inputsForm.forEach((input) => {
        e.preventDefault();
    if (input.value.trim() === "") {
        console.log(input.value);
        alert(`Falta completar el campo '${input.name}'`);
    } else {
        alert('Formulario Enviado');
    }
  });
});

// form.addEventListener("submit", (e) => {
//   let hayError = false;

//   inputsForm.forEach((input) => {
//     if (input.value.trim() === "") {
//       hayError = true;
//     }
//   });

//   if (hayError) {
//     e.preventDefault(); // ❗ evita el envío
//     alert("Hay campos vacíos");
//   } else {
//     alert("Formulario enviado correctamente");
//   }
// });

// 5 - Cambia la posición de un elemento cuando se pase el ratón sobre él.
// 6 - Detecta y muestra en la consola la tecla presionada por el usuario.
// 7 - Implementa un botón que oculte o muestre un elemento al hacer clic (toggle).
// 8 - Crea un campo de selección (dropdown) que actualice un párrafo con la opción seleccionada.
// 9 - Implementa un formulario con validación para correos electrónicos.
// 10 - Haz un evento que cambie el texto de un botón al hacer clic en él.
