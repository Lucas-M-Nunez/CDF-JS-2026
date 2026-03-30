// Actividad práctica:
// Crear una calculadora que sume, reste, multiplique y divida números ingresados por el usuario.


// let num1 = parseInt(prompt("Ingrese el Primer Numero: ",)); 
// let num2 = parseInt(prompt("Ingrese el Segundo Numero: ", ));
// let resultado = 0;
// let operacion = prompt(` Seleccione: 
//     1. Sumar
//     2. Restar
//     3. Multiplicar
//     4. dividir

//     Ingrese el numero de la operacion: `,);

// console.log("Primer numero: "+num1);
// console.log("Segundo numero: "+num2);

// function Suma(num1, num2) {
//     return num1 + num2; // me los concatena en lugar de sumarlos porque los hacia ingresar por prompt(); esto siempre devuelve un String.
// }

// function Resta(num1, num2) {
//     return num1 - num2;
// }

// function Mult(num1, num2) {
//     return num1 * num2; 
// }

// function Div(num1, num2) {
//     return num1 / num2; 
// }

// console.log("Operacion: "+operacion);


// switch (operacion) {
//     case 'sumar':
//         resultado = Suma(num1,num2);
//         console.log(`Resultado de la Suma: ${resultado}`);
//         break;
//     case 'restar':
//         resultado = Resta(num1,num2);
//         console.log(`Resultado de la Resta: ${resultado}`);
//         break;
//     case 'multiplicar':
//         resultado = Mult(num1,num2);
//         console.log(`Resultado de la Multiplicacion: ${resultado}`);
//         break;
//     case 'dividir':
//         resultado = Div(num1,num2);
//         console.log(`Resultado de la Division: ${resultado}`);
//         break;
//     default:
//         console.log("Operacion no valida");
//         break;
// }

// Escribe un programa que verifique si un número es positivo o negativo.

// let num = -1;

// if (num < 0 ) {
//     console.log("El numero ingresado es NEGATIVO");
// } else if (num > 0){
//     console.log("El numero ingresado es POSITIVO");
// } else {
//     console.log("El numero ingresado es igual a 0");
    
// }

// Usa switch para imprimir el día de la semana según un número del 1 al 7.

// let selector = 9;

// switch (selector) {
//     case 1:
//         console.log("Lunes");
//         break;
//     case 2:
//         console.log("Martes");
//         break;
//     case 3:
//         console.log("Miercoles");
//         break;
//     case 4:
//         console.log("Jueves");
//         break;
//     case 5:
//         console.log("Viernes");
//         break;
//     case 6:
//         console.log("Sábado");
//         break;
//     case 7:
//         console.log("Domingo");
//         break;

//     default:
//         console.log('Numero de dia no válido');
//         break;
// }

// Haz un bucle for que imprima los números del 1 al 10.

// for (let i = 1; i < 11; i++) {
//     console.log(i);   
// }

// Crea un programa que calcule el factorial de un número usando while.

// let num = 3;
// console.log(num+"!: ");

// while (num >= 1) {
//     console.log(num);
//     num = num - 1;
// };

// Escribe un condicional que determine si una persona puede votar según su edad.

// let edad = 19;

// if ( edad >= 18 ) {
//     console.log(`Tu edad es ${edad} años, Puedes votar!`);
// } else {
//     console.log(`Tu edad es ${edad} años, No puedes Votar!`);
    
// }

// Imprime los números pares entre 1 y 20 con un bucle for.

// for (let i = 1; i <= 20; i++) {
//     if ( i % 2 == 0 ) {
//         console.log(i);
//     }
// }

// Usa switch para imprimir un mensaje dependiendo de la calificación (A, B, C, D, F).

// let calificacion = "b";

// calificacion = calificacion.toUpperCase();

// switch (calificacion) {
//     case "A":
//         console.log("La calificacion es " + calificacion);
//         break;
//     case "B":
//         console.log("La calificacion es " + calificacion);
//         break;
//     case 'C':
//         console.log("La calificacion es " + calificacion);
//         break;
//     case 'D':
//         console.log("La calificacion es " + calificacion);
//         break;
//     case 'F':
//         console.log("La calificacion es " + calificacion);
//         break;
//     default:
//         console.log("La calificacion ingresada no es valida");
//         break;
// }

// Haz un programa que pida dos números y los sume si ambos son positivos.

// let num = 2;
// let num2 = 10;

// if ((num > 0) && (num2 > 0)) {
//     let suma = num + num2;
//     console.log("Suma de los dos numeros ingresados es: "+ suma);
// } else {
//     console.log("Algunos de los numeros ingresados no es Positivo.");
    
// }

// Escribe un bucle while que cuente de 10 a 1 en orden descendente.

// let num = 10;

// while ( num >= 1 ) {
//     console.log(num);
//     num = num - 1;
// }

// Crea una calculadora básica que permita sumar o restar según el operador ingresado.

// let num1 = parseInt(prompt("Ingrese el Primer Numero: ",)); 
// let num2 = parseInt(prompt("Ingrese el Segundo Numero: ", ));
// let resultado = 0;
// let operador = prompt(` Seleccione: 
//     +  Sumar
//     -  Restar
//     *  Multiplicar
//     /  dividir

//     Ingrese un operador: `,);

// console.log("Primer numero: "+num1);
// console.log("Segundo numero: "+num2);

// function Suma(num1, num2) {
//     return num1 + num2; // me los concatena en lugar de sumarlos porque los hacia ingresar por prompt(); esto siempre devuelve un String.
// }

// function Resta(num1, num2) {
//     return num1 - num2;
// }

// function Mult(num1, num2) {
//     return num1 * num2; 
// }

// function Div(num1, num2) {
//     return num1 / num2; 
// }

// console.log("Operador: "+operador);


// switch (operador) {
//     case '+':
//         resultado = Suma(num1,num2);
//         console.log(`Resultado de la Suma: ${resultado}`);
//         break;
//     case '-':
//         resultado = Resta(num1,num2);
//         console.log(`Resultado de la Resta: ${resultado}`);
//         break;
//     case '*':
//         resultado = Mult(num1,num2);
//         console.log(`Resultado de la Multiplicacion: ${resultado}`);
//         break;
//     case '/':
//         resultado = Div(num1,num2);
//         console.log(`Resultado de la Division: ${resultado}`);
//         break;
//     default:
//         console.log("operador no valido");
//         break;
// }