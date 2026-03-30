// 1. Declara una función que calcule el área de un triángulo.

// function areaTriangulo(base, altura) {
//     return (base * altura) / 2;
// }

// console.log(areaTriangulo(10, 5));


// 2. Crea una función anónima que determine si un número es par o impar.

// const esPar = function(num) {
//     if (num % 2 === 0) {
//          return "Par";
//     } else {
//         return "Impar";
//     }
// };

// console.log(esPar(3));

// 3. Usa una función de flecha para multiplicar dos números.

// const multiplicar = (a, b) => {
//     return a * b 
// };

// console.log(multiplicar(3, 4));

// 4. Escribe una función que convierta una palabra a mayúsculas.


// function aMayusculas(palabra) {
//     return palabra.toUpperCase();
// }

// console.log(aMayusculas("taller de js"));

// 5. Haz una función que reciba dos números y retorne el mayor de ellos.

// function mayor(a, b) {

//     if (a > b) {
//         return "el mayor es: "+a;
//     } else {
//         return "El mayor es : " + b;
//     }
// }

// console.log(mayor(20, 30)); 

// 6. Crea una función que invierta una cadena.

// function invertirCadena(texto) {

//     // split
//     console.log(texto.split("").reverse().join("")); //Convierte el string en un array (arreglo) separando cada letra, 
//                                                       //  reverse(), Da vuelta el array: y 
//                                                        // join("") vuelve a unir los elementos del array y lo devuelve en una cadena de texto (String)
// };

// console.log(invertirCadena("hola"));

// 7. Declara una función que convierta grados Celsius a Fahrenheit.
// (°C x 9/5) + 32 =°F


// function temperatura(celsius) {
//     return (celsius * 9/5) + 32;
// }

// console.log(temperatura(25));

// 8. Escribe una función que verifique si una palabra es un palíndromo. 
// Un palíndromo es una palabra, frase, número o secuencia que se lee igual de izquierda a derecha que de derecha a izquierda (

// function esPalindromo(palabra) {
//     const invertida = palabra.split("").reverse().join("");

//     if (palabra === invertida) {
//         return "La palabra "+ invertida + ", es un Palindromo.";
//     } else {
//         return "La palabra ingresada: " + invertida +", No es Palindromo.";
//     }
// }

// console.log(esPalindromo("oso")); 

// 9. Haz una función que calcule la suma de los números de un arreglo.

// function sumaArreglo(arr) {
//     let suma = 0;
//     for (let i = 0; i < arr.length; i++) {
//         suma += arr[i];
//     }
//     return suma;
// }

// console.log(sumaArreglo([1, 2, 3, 4]));


// 10. Usa funciones para simular una calculadora básica

let num1 = parseInt(prompt("Ingrese el Primer Numero: ",)); 
let num2 = parseInt(prompt("Ingrese el Segundo Numero: ", ));
let resultado = 0;
let operador = prompt(` Seleccione: 
    +  Sumar
    -  Restar
    *  Multiplicar
    /  dividir

    Ingrese un operador: `,);

console.log("Primer numero: "+num1);
console.log("Segundo numero: "+num2);

const Suma = (num1, num2) => {
    return num1 + num2;
}

const Resta = (num1, num2) => {
    return num1 - num2;
}

const Mult = (num1, num2) => {
    return num1 * num2;
}

const Div = (num1, num2) => {
    return num1 / num2;
}

console.log("Operador: "+operador);


switch (operador) {
    case '+':
        resultado = Suma(num1,num2);
        console.log(`Resultado de la Suma: ${resultado}`);
        break;
    case '-':
        resultado = Resta(num1,num2);
        console.log(`Resultado de la Resta: ${resultado}`);
        break;
    case '*':
        resultado = Mult(num1,num2);
        console.log(`Resultado de la Multiplicacion: ${resultado}`);
        break;
    case '/':
        resultado = Div(num1,num2);
        console.log(`Resultado de la Division: ${resultado}`);
        break;
    default:
        console.log("operador no valido");
        break;
}