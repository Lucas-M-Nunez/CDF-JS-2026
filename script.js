console.log("Hola desde la consola");

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
