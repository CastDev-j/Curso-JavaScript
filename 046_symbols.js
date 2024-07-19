// symbols en js 

// Symbol es un tipo de dato primitivo introducido en ES6.

// Un Symbol es un valor único e inmutable que puede ser 
// utilizado como clave de una propiedad de un objeto.

// Un Symbol no puede ser convertido a string, ni a ningún otro tipo de dato.
// Un Symbol no puede ser instanciado con el operador new.
// Un Symbol puede ser utilizado como clave de una propiedad de un objeto.


// console.log(Symbol('foo'));

let id  = 'hola';
let id2 = 'hola';

// console.log(id === id2); // trued

let id3 = Symbol('id3');
let id4 = Symbol('id4');

// console.log(id3 === id4); // false
// console.log(id3, id4); // Symbol(id3) Symbol(id4)
// console.log(typeof id3); // symbol, es un tipo de dato primitivo

// como agregar un symbol a un objeto

// Crear un Symbol
const ID = Symbol('id');
const SALUDAR = Symbol('saludar');

// Agregar un Symbol a un objeto
const user = {
    name: 'John',
    age: 30,
    [ID]: '12345',
    [SALUDAR]: () => {
        console.log('Hola');
    }
};

console.log(user); // { name: 'John', age: 30, [Symbol(id)]: '12345' }

user[SALUDAR](); // Hola
console.log(user[ID]); // 12345

for (const key in user) {
    console.log(`${key}: ${user[key]}`); // name, age. No se muestran los Symbol
}


// mostrar solo los symbols

console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(id) ]