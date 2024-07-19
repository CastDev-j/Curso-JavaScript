// proxies en javascript

// Un proxy es un objeto que envuelve a otro objeto 
// y puede interceptar y modificar operaciones como la lectura de propiedades, 
// la escritura de propiedades, la invocación de funciones y otras operaciones.

// Un proxy se crea con el constructor Proxy, que toma dos argumentos:
// 1. El objeto que se va a envolver
// 2. Un objeto
//    - handler, que contiene métodos que definen el comportamiento del proxy
//    - handler es un objeto que contiene métodos que definen el comportamiento del proxy.
//    - Los métodos que se pueden definir en el objeto handler incluyen:
//      - get: se llama cuando se lee una propiedad del proxy
//      - set: se llama cuando se escribe una propiedad en el proxy
//      - apply: se llama cuando se invoca una función en el proxy
//      - construct: se llama cuando se utiliza el proxy como constructor
//      - y muchos otros

// Ejemplo de un proxy que intercepta la lectura de propiedades:

const persona = {
    nombre: '',
    apellido: '',
    edad: 0
};

const handler = {
    set(obj, properties, values){

        // Si la propiedad no existe en el objeto persona 
        // se muestra un mensaje de error y no se modifica el objeto
        if(Object.keys(obj).indexOf(properties) === -1)
           return console.error(`La propiedad ${properties} no existe en el objeto persona`);

        // Si la propiedad edad no es un número o es menor o igual a 0
        // se muestra un mensaje de error y no se modifica el objeto
        if(properties === 'edad' && (typeof values !== 'number' || values <= 0))
            return console.error(`La propiedad edad debe ser un número mayor a 0`);

        // Si la propiedad nombre o apellido no contiene solo letras 
        // y espacios en blanco se muestra un mensaje de error y no se modifica el objeto
        if((properties === 'nombre' || properties === 'apellido') && !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(values)))
            return console.error(`La propiedad ${properties} solo acepta letras y espacios en blanco`);

        
        obj[properties] = values;
    }

}

const jon = new Proxy(persona, handler);
jon.nombre = 'Jon Nieve';
jon.apellido = 'Snow';
jon.edad = 24;
jon.genero = 'Masculino'; // La propiedad genero no existe en el objeto persona

console.log(jon);