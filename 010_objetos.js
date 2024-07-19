//Objetos en javascript

//En js se acostubra a decir la expresion "en js todo es un objeto"s

//Ejemplo de objeto en js

//Objetos literales

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    direccion: {
        calle: 'Calle falsa',
        numero: 123,
        colonia: 'Centro'
    },
    saludo: function name(params) {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
    }
}

persona.saludo();

// Los objetos literales son una forma de crear objetos en js,
// se crean con llaves y se les asignan propiedades y valores

// estas propiedades pueden ser de cualquier tipo de dato, incluso otros objetos o funciones

// Ejemplo de objeto con funciones

const CALCULADORA = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    multiplicacion: (a, b) => a * b,
    division: function (a, b) { return a / b }
}

// Este objeto tiene funciones como propiedades, estas funciones pueden ser llamadas
// como cualquier otra funcion accediendo a ellas a traves de la notacion de punto

console.log(`Operaciones con 2,3:\t${CALCULADORA.suma(2, 3)}, ${CALCULADORA.resta(2, 3)}, ${CALCULADORA.multiplicacion(2, 3)}, ${CALCULADORA.division(2, 3)}`);

// Tambien se pueden acceder a las propiedades de un objeto a traves de la notacion de corchetes

console.log(persona['nombre']);
console.log(persona['direccion']['calle']);

// Si se necesita extraer el valor de una propiedad de un objeto y asignarlo a una variable

const { nombre, apellido, edad } = persona;

console.log(nombre);
console.log(apellido);
console.log(edad);


// Esto se conoce como destructuracion de objetos,
// Es muy util en funciones que reciben objetos como argumentos




