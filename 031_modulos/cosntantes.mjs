export const PI = 3.1416;

export const usuario = 'Juan';
export const password = '1234';

export function saludar() {
    console.log('Hola módulos +ES6');
}

export class Saludar {
    constructor() {
        console.log('Hola Clases +ES6');
    }

    saludar() {
        console.log('Hola Clases +ES6');
    }
}

export const persona = {
    nombre: 'Juan',
    edad: 30,
    saludar() {
        console.log('Hola objeto +ES6');
    }
}