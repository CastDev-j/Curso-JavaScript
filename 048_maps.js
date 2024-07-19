//maps en javascript el origen del

//"if you can't do it, use hashmap"

let mapa = new Map();

mapa.set('nombre', 'Juan');
mapa.set('apellido', 'Perez');

console.log(mapa);

mapa.has('correo'); // false
mapa.has('nombre'); // true

mapa.delete('apellido');
console.log(mapa);

mapa.set('edad', 33);
console.log(mapa);

// eliminar duplicados con map

let mapaNumerico = new Map();
let arreglo = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9, 10, 11];
arreglo.forEach(valor => {
    if (!mapaNumerico.has(valor)) {
        mapaNumerico.set(valor, valor);
    }
});

console.log([...mapaNumerico.values()]);

// comprobar si dos arreglos tienen los mismos elementos

const a = [1, 2, 3, 5];
const b = [1, 3, 2, 5, 6];

let mapaComparador = new Map();

a.forEach((valor) => {
    if (mapaComparador.has(valor)) {
        let cantidad = mapaComparador.get(valor);
        mapaComparador.set(valor, cantidad + 1);
    } else {
        mapaComparador.set(valor, 1);
    }
});

b.forEach((valor) => {
    if (mapaComparador.has(valor)) {
        let cantidad = mapaComparador.get(valor);
        mapaComparador.set(valor, cantidad - 1);
    } else {
        mapaComparador.set(valor, 1);
    }
});

let bandera = true;

mapaComparador.forEach((valor) => {
    if (valor !== 0) {
        bandera = false;
    }
});
console.log(mapaComparador);
console.log(bandera); // true

// map predefinido

const mapaPredefinido = new Map([
    ['nombre', 'Juan'],
    ['apellido', 'Perez'],
    ['edad', 33]
]);

// el map es un objeto iterable, por lo que podemos recorrerlo con un forEach,
// cuando creamos un map con el constructor, podemos pasarle un array de arrays
// la estructura de cada array es [key, value], el Map recibe un iterable (array)

//ejemplo de sintaixs de map
// const mapa = new Map([  *se llama al constructor de map*, *se abre un array [*
//     ['nombre', 'Juan'], *se crean los arrays con dos elementos [key, value]*
//     ['apellido', 'Perez'], 
//     ['edad', 33]
// ]); *se cierra el array* ]); *se cierra el constructor*



//test de memoria

const ARREGLO_CADENAS = ['cadena1', 'cadena2', 'cadena3'];

const ARREGLO_CADENAS_MODIFICADA = ARREGLO_CADENAS
                                        .map(cadena => cadena.toUpperCase())
                                        .join(' - ');
console.log(ARREGLO_CADENAS_MODIFICADA);