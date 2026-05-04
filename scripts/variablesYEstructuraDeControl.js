// console.log("Hola desde la consola");

// Declaracion de variables let y Const
let nombre = "Lucas";
const edadMia = 27;

// alert("Mi nombre es "+ nombre + " y Tengo "+edadMia+ " años");
console.log(`Mi nombre es ${nombre} y tengo ${edadMia} años: con Backsticks`);

//Declaracion de Booleanos, True or False
let boolean = true;
console.log(`booleanos: ${boolean}`);


// Declaracion de Arreglos o Arrays;
let arreglo = [0,1,2,3]; // 4 elementos desde el 0 al 3.
console.log("arreglo: "+arreglo);

//Declaracion de Objetos;
let objeto = {
    nombre: "Lucas",
    edad: 27,
    genero: "M"
}

console.log(objeto);

//operaciones Matematicas en JS

let suma = 20 + 20;
let resta = 20 - 20;
let mult = 20 * 20;
let div = 20 / 20;
let modulo = 20 % 2;

console.log(`Suma: ${suma}, Resta: ${resta}, Multiplicacion: ${mult}, Div: ${div}, Modulo: ${modulo}`);


//Öperadores De comparación == , != , === , <, >, <=, >=

//Operadores Logicos:  &&, !, ||

let verdadero = true && true;
console.log(verdadero);


// Ejercicio 7:
let num = 2;
let tipoDeDato = typeof(num);
console.log( `el tipo de dato es: ${tipoDeDato}`);


// SINTAXIS Y DECLARACION DE VARIABLES CON JS ----------------------------------------------------------
// ----------------- PRACTICO NUMERO 2 CLASE 2 ---------------------------------------------
// Ejercicios:

// ejercicio 1: Crea una variable nombre con tu nombre y úsala para imprimir un mensaje.

let nombre = "lucas";
console.log("Hola " + nombre);

// ejercicio 2: Declara y suma dos números, muestra el resultado en consola.

let num1 = 10;
let num2 = 20;
console.log(num1 + num2);

// ejercicio 3: Usa operadores lógicos para evaluar si 10 > 5 y 5 < 2.

let num3 = 10;
let num4 = 5;

console.log( num3 > num4 && num4 < 2);

// ejercicio 4: Declara variables con let y const y nota las diferencias al intentar cambiarlas.

let edad = 20;
const apellido = 'Gonzalez';

console.log(edad);
console.log(apellido);

edad = 25;
apellido = "Ramirez";

console.log(edad);
console.log(apellido);

// ejercicio 5: Escribe un comentario que explique qué hace tu código.

// Declaramos las variables y asignamos sus valores
let primerNum = 10;
let segNum = 20;
// Sumamos las variables
let suma = primerNum + segNum;
// Imprimimos el resultado
console.log(suma);

// ejercicio 6: Declara una variable de tipo boolean y úsala en una operación lógica.

// logico
let bolean1 = true;
let bolean2 = false;

let res = bolean1 || bolean2
console.log(res);

// comparativo
let edadPersona = 15;

if ( edadPersona >= 18 ) {
    console.log( "es mayor de edad");
} else {
    console.log("es menor de edad");
}

// ejercicio 7: Imprime el tipo de dato de una variable usando typeof.

let DNI = 43234534;
console.log('Tipo de dato: '+typeof DNI);

// ejercicio 8: Declara un array y muestra uno de sus elementos en la consola.

let frutas = ['manzana','banana','pera'];
console.log(frutas[2]);


// ejercicio 9: Usa una operación con % para encontrar el resto de 17 ÷ 3.

let num1 = 17;
let num2 = 3;

console.log(num1 % num2);

// ejercicio 10: Declara una variable sin valor e imprime su valor inicial.

let nombre;
console.log(nombre); // undefined

// ESTRUCTURAS DE CONTROL CON JS ----------------------------------------------------------
// ----------------- PRACTICO NUMERO 2 ---------------------------------------------

// ESTRUCTURAS DE COONTROL

// Condicionales: if y else

//     let edad = 10;
//     if (edad >= 18) {
//         console.log("Es mayor de edad");
//     } else {
//         console.log("Es menor de edad");
//     }

// Switch : multiples casos
// let dia = 'lunes';
// switch (dia) {
//     case 'lunes':
//         console.log("dia: " + dia);
//         break;
//     case 2:
//         console.log("martes");
//         break;
//     case 3:
//         console.log("miercoles");
//         break;
//     case 4:
//         console.log("jueves");
//         break;
//     case 5:
//         console.log("viernes");
//         break;
//     case 6:
//         console.log("sabado");
//         break;
//     case 7:
//         console.log("domingo");
//         break;

//     default:
//         break;
// }


// for, recorremos arrays con esto.

// const frutas = ['Manzana','pera','banana','uva']

// for (let i = 0; i < frutas.length; i++) {
//     const element = frutas[i];
//     console.log("En la posicion "+ i + " , esta el elemento: "+element);
// }


// conteo decreciente de 2 a -10
// for (let i = 2; i >= -10; i--) {
//     console.log(i);
// }


// Funciones: 

// let nombre = 'lucas';

// function saludar(nombre) {
//     return 'hola '+ nombre
// }
// let saludo = saludar(nombre);
// console.log(saludo);

// EJERCICIOS ESTRUCTURA DE CONTROL: -----------------------------------------------

// 1. Escribe un programa que verifique si un número es positivo o negativo.
let numero = -5;
if (numero > 0) { 
    console.log("El numero es positivo");
} else if (numero < 0) {
    console.log("El numero es negativo");
};

// 2. Usa switch para imprimir el día de la semana según un número del 1 al 7. 

let num = 1;

switch (num) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("numero no valido");
        
        break;
}
// 3. Haz un bucle for que imprima los números del 1 al 10. 

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// 4. Crea un programa que calcule el factorial de un número usando while. 
let num = 3;
console.log(num+"!: ");

while (num >= 1) {
    console.log(num);
    num = num - 1;
};
// 5. Escribe un condicional que determine si una persona puede votar según su edad.

let edad = 17;
if (edad >= 18) {
    console.log("Puede votar");
} else {
    console.log("No puede votar");
};

// 6. Imprime los números pares entre 1 y 20 con un bucle for. 
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 7. Usa switch para imprimir un mensaje dependiendo de la calificación (A, B, C, D, F). 
let calificacion = 'A';

switch (calificacion) { 
    case 'A':
        console.log("Excelente");
        break;
    case 'B':
        console.log("Bueno");
        break;
    case 'C':
        console.log("Regular");
        break;
    case 'D':
        console.log("Malo");
        break;
    case 'F':
        console.log("Reprobado");
        break;
    default:
        console.log("Calificacion no valida");
        break;
};

// 8. Haz un programa que pida dos números y los sume si ambos son positivos.
let num1 = 5;
let num2 = 10;
if (num1 > 0 && num2 > 0) {
    console.log("La suma es: " + (num1 + num2));
} else {
    console.log("Ambos numeros deben ser positivos");
}

// 9. Escribe un bucle while que cuente de 10 a 1 en orden descendente. 
let contador = 10;
while (contador >= 1) {
    console.log(contador);
    contador--;
}
// 10. Crea una calculadora básica que permita sumar o restar según el operador ingresado.
let numero1 = 10;
let numero2 = 5;
let operador = '+';
switch (operador) {
    case '+':
        console.log("La suma es: " + (numero1 + numero2));
        break;
    case '-':
        console.log("La resta es: " + (numero1 - numero2));
        break;
    default:
        console.log("Operador no valido");
        break;
}