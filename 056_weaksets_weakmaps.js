// los weakSets y weakMaps en javascript

// son estructuras de datos que nos permiten almacenar colecciones de datos de manera débil
// es decir, que no impiden que los elementos almacenados sean eliminados por el recolector de basura
// si no hay ninguna otra referencia a ellos.


// WeakSet

// un WeakSet es una colección de objetos debilmente mantenidos
// los objetos almacenados en un WeakSet pueden ser eliminados por el recolector de basura
// si no hay ninguna otra referencia a ellos.

// ejemplo de uso de WeakSet

let ws = new WeakSet(); //solo recibe los valores de tipo objeto con el metodo add

let valor1 = {valor1: 1};
let valor2 = {valor2: 'hola'};
let valor3 = {valor3: 10};

ws.add(valor1);
ws.add(valor2);
ws.add(valor3);

// los valores almacenados en un WeakSet no son accesibles
// setInterval(() => console.log(ws), 500);

// setTimeout(() => {
//     valor1 = null
//     valor2 = null
//     valor3 = null
// }, 2100);



// WeakMap
// un WeakMap es una colección de pares clave/valor en la que las claves son objetos

// ejemplo de uso de WeakMap

let wm = new WeakMap();

let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 'hola');
wm.set(llave3, 10);
 
// los valores almacenados en un WeakMap no son accesibles

setInterval(() => console.log(wm), 500);

setTimeout(() => {
    llave1 = null
    llave2 = null
}, 2100);



