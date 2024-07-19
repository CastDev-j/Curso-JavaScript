//tipo de dato primitivo 'set' en js

// Un Set es una colección de valores únicos, 
// lo que significa que no se pueden repetir valores en un Set.

// Un Set es un objeto que permite almacenar valores únicos de cualquier tipo,
// ya sean valores primitivos o referencias a objetos.

// Un Set no tiene índices, lo que significa que no podemos acceder a un valor
// en un Set utilizando un índice.

// Un Set no tiene propiedades ni métodos para acceder a sus elementos,
// por lo que no podemos acceder a un valor en un Set utilizando la notación de puntos.

//ejemplo de set

const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11]);

console.log(set); // Set { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 }

//set a array 1ra forma
let arregloSinDuplicados = [...set];
console.log(arregloSinDuplicados); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]s

//set a array 2da forma
console.log(Array.from(arregloSinDuplicados)); // 

// ejemploo simplificado

console.log([...new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11,11])]);

// las posibilidad de set son infinitas
// podemos agregar cualquier tipo de dato
// podemos filtrar valores duplicados
// podemos hacer operaciones de conjuntos

//ejemplo de operaciones de conjuntos

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);

//union

const union = new Set([...set1, ...set2]);

console.log([...union]); // Set { 1, 2, 3, 4, 5, 6, 7, 8 }