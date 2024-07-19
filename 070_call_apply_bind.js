// call, apply, bind en JavaScript

// call, apply y bind son métodos de la función en JavaScript
// que se utilizan para establecer el valor de this en una función 
// y para pasar argumentos a una función.


// call y apply son muy similares, la única diferencia es que
// - call() toma una lista de argumentos separados por comas
// - apply() toma una lista de argumentos en un array
// - bind() devuelve una nueva función, donde el valor de this se fija

// Ejemplo de uso de call() y apply()

console.log(this);
this.lugar = "Global";

function saludar(saludo = '', quien = '') {
    console.log(`${saludo} ${quien} desde ${this.lugar}`);
}

saludar(); // Hola Global

// Ahora, si queremos cambiar el valor de this, podemos usar call() o apply()

const obj = {
    lugar: "Objeto"
};

saludar.call(obj); // Hola Objeto
// al llamar a la función saludar con call(obj), el valor de this se establece en el objeto obj

saludar.apply(obj); // Hola Objeto
// al llamar a la función saludar con apply(obj), el valor de this se establece en el objeto obj

// parametros adicionales
 
saludar.call(obj, 'Hola', 'Mundo'); // Hola Mundo desde Objeto, los argumentos se pasan separados por coma

saludar.apply(obj, ['Hola', 'Mundo']); // Hola Mundo desde Objeto, los argumentos se pasan en un array

saludar.apply(this, ['Hola', 'Mundo']); // Hola Mundo desde Global, los argumentos se pasan en un array

console.log(''.padEnd(50, '-'));

// Ejemplo de uso de bind()

this.nombre = 'Window';

const persona = {
    nombre: 'John',
    saludar: function() {
        console.log(`Hola ${this.nombre}`);
    }
};

persona.saludar(); // Hola John

const saludarPersona = {
    saludar: persona.saludar.bind(persona)
}

saludarPersona.saludar(); // Hola undefined

