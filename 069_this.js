// this en JavaScript

// En JavaScript, la palabra clave this se refiere al objeto actual en el que se está ejecutando el código.
//
// La palabra clave this se puede utilizar en diferentes contextos:
// - En un método de un objeto, this se refiere al objeto que contiene el método.
// - En una función, this se refiere al objeto global (window en un navegador).
// - En un evento, this se refiere al elemento que desencadenó el evento.
// - En un constructor, this se refiere a la instancia del objeto que se está creando.
// - En una función de flecha, this se refiere al objeto que contiene la función de flecha.
//

// Ejemplo de uso de this en un método de un objeto:

const persona = {
    nombre: 'Juan',
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`); // el valor de this es el objeto persona
    }
};

persona.saludar(); // Hola, mi nombre es Juan

// Ejemplo de uso de this en una función:

globalThis.nombres = 'pedro';
console.log(globalThis.nombres);

function saludar() {
    console.log(`Hola, mi nombre es ${globalThis.nombres}`); // el valor de this es el objeto global
}

saludar(); // Hola, mi nombre es undefined

// Ejemplo de uso de this en un evento:

    // const boton = document.querySelector('button');

    // boton.addEventListener('click', function() {
    //     console.log(this); // el valor de this es el elemento button
    // });

// Ejemplo de uso de this en un constructor:

class Persona {

    #nombre;
    
    constructor(nombre) {
        this.#nombre = nombre;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.#nombre}`);
    }
}

const juan = new Persona('Juan');
juan.saludar(); // Hola, mi nombre es Juan

// Ejemplo de uso de this en una función de flecha:

const persona2 = {
    nombre: 'Juan',
    saludar: () => {
        console.log(`Hola, mi nombre es ${this.nombre}`); // el valor de this es el objeto global
        //para que funcione se debe hacer de la siguiente manera
        console.log(`Hola, mi nombre es ${persona2.nombre}`); // sustituir this por el nombre del objeto
        // o de la siguiente manera
    }

    // saludar: function() {
    //     console.log(`Hola, mi nombre es ${this.nombre}`); // el valor de this es el objeto global
    // }

    // manteniendo el scope de la función en el objeto
};

persona2.saludar(); // Hola, mi nombre es undefined

// otro ejemplo de uso:

function Personas(nombres) {
    this.nombres = nombres;
    
    // esto no genera el scope de la función en el objeto global
    return ()=>console.log(this.nombres);
    
    // esto genera el scope de la función en el objeto global
    // return function(){
    //     console.log(this.nombres);
    // }
}

let juana = new Personas('Juana'); // Juan
juana();


// conclusión:

// En un método de un objeto, this se refiere al objeto que contiene el método.
// En una función, this se refiere al objeto global (window en un navegador).
// En un evento, this se refiere al elemento que desencadenó el evento.
// En un constructor, this se refiere a la instancia del objeto que se está creando.
// En una función de flecha, this se refiere al objeto que contiene la función de flecha.

// En general, se recomienda evitar el uso de this en funciones de flecha y utilizar en su lugar funciones regulares.
