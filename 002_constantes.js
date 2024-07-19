// constantes en JavaScript, se recomineda usar const para declarar una constante

// se escriben en formato de mayusculas/ UPPER_CASE

const PI = 3.1416;

// PI = 3.14; // Error: no se puede reasignar un valor a una constante


try {
    PI = 3.14;
} catch (error) {
    console.error(error); // Imprime "TypeError: Assignment to constant variable."
}

console.log(PI); // Imprime 3.1416

const objeto = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25
}

console.log(objeto); // Imprime { nombre: 'Juan', apellido: 'Perez', edad: 25 }


// objeto = {}; // Error: no se puede reasignar un valor a una constante

try {
    objeto = {};
} catch (error) {
    console.error(error); // Imprime "TypeError: Assignment to constant variable."
}


// Pero si se puede modificar las propiedades del objeto

objeto.nombre = "Pedro";
console.log(objeto); // Imprime { nombre: 'Pedro', apellido: 'Perez', edad: 25 }


// Se puede asignar un objeto a otra constante

let objeto2 = objeto;

if (objeto === objeto2) {
    console.log("Los objetos son iguales");
}

objeto2 = {}

if (objeto === objeto2) {
    console.log(objeto2)
    console.log(objeto)
    console.log("Los objetos son iguales")
}

// Si se modifica una propiedad de un objeto, 
// se modifica en ambos objetos por que apuntan a la misma referencia
// en memoria


