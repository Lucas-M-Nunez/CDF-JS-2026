const objeto = {
  nombre: "Lucas",
  edad: 27,
  direccion: "Calle sin nombre 543",
  Nacionalidad: "Argentina",
  saludar: function () {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años, vivo en ${this.direccion} y soy de nacionalidad ${this.Nacionalidad}`;
  },
};

console.log(objeto.saludar());

const btn = document.getElementById("btnClick");
btn.addEventListener("click", () => {
  alert("Boton clickeado");
});

//Push() y Pop();
const arrayFrutas = ["Manzana", "Banana", "Naranja"];
console.log(arrayFrutas);
// Agregamos un objeto al final del array
arrayFrutas.push("Pera");
console.log(arrayFrutas);
// Eliminamos el último elemento del array
arrayFrutas.pop();
//imprimimos
console.log(arrayFrutas);

//Shift() y Unshift();
const Numeros = [1, 2, 3, 4];
console.log(Numeros);
// Agregamos un número al inicio del array
Numeros.unshift(40);
console.log(Numeros);
// Eliminamos el primer elemento del array
Numeros.shift();
// imprimimos
console.log(Numeros);

//forEach()
const Colores = ["Rojo", "Verde", "Azul"];
Colores.forEach((color) => {
  console.log(color);
});

//map()
console.log('Mapeo:');
const mapeoDeNumeros = [1, 2, 3, 4];
mapeoDeNumeros.map((numero) => {
  console.log(numero * 2);
});


//filter()
const edades = [18, 10, 15, 15, 22];
const edadesMayores = edades.filter((edad) => edad >= 18);
console.log(edadesMayores);


//Reduce()
const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((total, numero) => total + numero, 0);
console.log(suma);

// Crear un arreglo de objetos donde cada objeto represente un producto con propiedades como nombre, precio, y cantidad. Implementar funciones para:
// Agregar productos.
// Calcular el costo total.
// Filtrar productos por precio.

const productos = [
  { nombre: "Laptop", precio: 1000, cantidad: 2 },
  { nombre: "Smartphone", precio: 500, cantidad: 3 },
  { nombre: "Tablet", precio: 300, cantidad: 1 },
  { nombre: "Auriculares", precio: 100, cantidad: 4 },
  { nombre: "Monitor", precio: 200, cantidad: 2 },
  { nombre: "Teclado", precio: 50, cantidad: 5 },
  { nombre: "Mouse", precio: 30, cantidad: 6 },
  { nombre: "Microfono", precio: 150, cantidad: 1 },
  { nombre: "Webcam", precio: 800, cantidad: 10 },
  { nombre: "Impresora", precio: 400, cantidad: 15 },
];
console.log(productos);

// Función para agregar productos
function agregarProducto(nombre, precio, cantidad) {
  productos.push({ nombre, precio, cantidad });
};
agregarProducto('USB Pendrive', 300, 5);
let ultimoElemento = productos[ productos.length - 1];
console.log("Ultimo elemento agregado: ", ultimoElemento.nombre);
console.log(productos);

// Función para calcular el costo total
function calcularCostoTotal() {
    const costoTotal = productos.reduce( (total, producto) => {
        return total + (producto.precio * producto.cantidad);
    }, 0);
    return costoTotal;
}
let precioTotal = calcularCostoTotal();
console.log("El costo total de los productos es: $" + precioTotal);



// Función para filtrar productos por precio
function filtrarProductosPorPrecio(precio) {
    return productos.filter((producto) => producto.precio === precio);
}
console.log("Elemento filtrado: ", filtrarProductosPorPrecio(1000));


// Ejercicios:
console.log("Ejercicios:");
 
// 1. Crea un arreglo con 5 números y muestra el tercero en consola. 
const arrayDeNumeros = [10,5,12,0,14];
console.log(`El tercer numero es: ${arrayDeNumeros[2]}`);

// 2. Agrega un nuevo elemento a un arreglo usando push. 
// const numeros = [10,5,2,0,4];
arrayDeNumeros.push(6);
console.log(arrayDeNumeros);
// 3. Elimina el último elemento de un arreglo y muéstralo en consola. 
// const numeros = [10,5,2,0,4];
numeros.pop();
console.log(arrayDeNumeros);

// 4. Usa map para multiplicar por 2 cada número de un arreglo.
// const numeros = [10,5,2,0,4];
const multiplicarPorDos = arrayDeNumeros.map( (numero) => numero * 2);
console.log(multiplicarPorDos);

// 5. Filtra un arreglo para obtener solo los números mayores a 10. 
const numerosFiltrados = arrayDeNumeros.filter( (numero) => numero > 10);
console.log(numerosFiltrados);
// 6. Declara un objeto con las propiedades nombre, edad, y profesión.
const persona = {
  nombre: "Lucas",
  edad: 27,
  profesion: "BARISTA",
};
console.log(persona);

// 7. Accede y muestra el valor de una propiedad de un objeto.
console.log(` Nombre: ${persona.nombre}, edad: ${persona.edad}`);

// 8. Agrega un método a un objeto que devuelva un saludo personalizado.
persona.saludar = function saludar(nombre) {
  return `¡Hola, ${nombre}!, ¿Cómo estas?.`;
}

console.log(persona.saludar("Lucas"));
// 9. Usa reduce para sumar todos los números de un arreglo. 

const sumaDeLosNumeros = arrayDeNumeros.reduce( (total, numero) => total + numero, 0);
console.log(sumaDeLosNumeros);
// 10. Combina arreglos y objetos: Crea un arreglo de objetos y recórrelo para mostrar el nombre de cada elemento.
const arrayDeObjetos = [
  { nombre: "Notebook", precio: 1000, marca: 'Asus' },
  { nombre: "Smartphone", precio: 500, marca: 'Samsung' },
  { nombre: "Tablet", precio: 300, marca: 'Apple' },
];

arrayDeObjetos.forEach( (objeto) => {
  console.log(`Elemento: ${objeto.nombre}`);
});