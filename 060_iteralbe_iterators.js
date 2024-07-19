// Iterable y Iterators en JavaScript

// los iterables son objetos que implementan el protocolo de iteración, 
// es decir, que tienen un método que devuelve un iterador.

// Un iterador es un objeto que tiene un método next() 
// que devuelve un objeto con dos propiedades: value y done.

// value es el valor del elemento actual y done es un booleano que indica si
// se ha llegado al final de la iteración.

// Ejemplo de un iterable y un iterador:

// elemento Iterable
const iterable = [1,2,3,4,5];

// construir un iterador del iterable
const iterator = iterable[Symbol.iterator]();

// iterar sobre el iterador
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Ejemplo de un iterable y un iterador con ciclo;

const iterable2 = [1,2,3,4,5];
const iterator2 = iterable2[Symbol.iterator]();


let isDone = false;
do {
    let {value, done} = iterator2.next();

    console.log(value);
    isDone = done;
} while (!isDone);

