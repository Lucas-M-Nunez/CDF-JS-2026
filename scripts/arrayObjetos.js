// const objeto = {
//   nombre: "Lucas",
//   edad: 27,
//   direccion: "Calle sin nombre 543",
//   Nacionalidad: "Argentina",
//   saludar: function () {
//     return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años, vivo en ${this.direccion} y soy de nacionalidad ${this.Nacionalidad}`;
//   },
// };

// console.log(objeto.saludar());

// const btn = document.getElementById("btnClick");

// btn.addEventListener("click", () => {
//   alert("Boton clickeado");
// });

//Push() y Pop();

// const arrayFrutas = ["Manzana", "Banana", "Naranja"];
// console.log(arrayFrutas);
// Agregamos un objeto al final del array
// arrayFrutas.push("Pera");
// console.log(arrayFrutas);
// Eliminamos el último elemento del array
// arrayFrutas.pop();
//imprimimos
// console.log(arrayFrutas);

//Shift() y Unshift();

// const Numeros = [1, 2, 3, 4];
// console.log(Numeros);
// Agregamos un número al inicio del array
// Numeros.unshift(40);
// console.log(Numeros);
// Eliminamos el primer elemento del array
// Numeros.shift();
//imprimimos
// console.log(Numeros);

//forEach()

// const Colores = ["Rojo", "Verde", "Azul"];

// Colores.forEach((color) => {
//   console.log(color);
// });

//map()
// const Numeros= [1, 2, 3, 4];
// Numeros.map((numero) => {
//   console.log(numero * 2);
// });


//filter()
// const edades = [18, 10, 15, 15, 22];
// const edadesMayores = edades.filter((edad) => edad >= 18);
// console.log(edadesMayores);


//Reduce()
// const numeros = [1, 2, 3, 4];
// const suma = numeros.reduce((total, numero) => total + numero, 0);
// console.log(suma);

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
console.log(agregarProducto('USB Pendrive', 300, 5));
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