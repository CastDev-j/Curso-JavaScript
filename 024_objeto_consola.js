// Objeto consola en JavaScript

// La consola es un objeto que proporciona acceso a la consola del navegador.
// Puede ser utilizado para depurar JavaScript.

// Métodos de la consola

// console.log()
// Muestra un mensaje en la consola del navegador.

console.log('Hola Mundo!');




// console.info()
// Muestra un mensaje de información en la consola del navegador.

console.info('Mensaje de información');




// console.warn()
// Muestra un mensaje de advertencia en la consola del navegador.

console.warn('Mensaje de advertencia');




// console.error()
// Muestra un mensaje de error en la consola del navegador.

console.error('Mensaje de error');




// console.table()
// Muestra una tabla en la consola del navegador.

console.table(['Manzana', 'Banana', 'Naranja']);




// console.time()
// Inicia un temporizador en la consola del navegador.

console.time('Tiempo');




// console.timeEnd()
// Detiene un temporizador en la consola del navegador.

console.timeEnd('Tiempo');




// console.clear()
// Limpia la consola del navegador.

console.clear();




// console.group()
// Crea un grupo de mensajes en la consola del navegador.

console.group('Frutas');
console.log('Manzana');
console.log('Banana');
console.log('Naranja');
console.groupEnd();




// console.count()
// Registra el número de veces que se llama a count().
console.count('Manzana');
console.count('Banana');
console.count('Manzana');
console.count('Banana');
console.count('Manzana');
console.count('Banana');

console.clear();




// console.assert()
// Escribe un mensaje de error en la consola del navegador si la afirmación es falsa.

console.assert(5 > 10, '5 no es mayor que 10');




// console.dir()
// Muestra una lista interactiva de las propiedades de un objeto JavaScript.

const frutas = ['Manzana', 'Banana', 'Naranja'];
console.dir(frutas);




// console.dirxml()
// Muestra una representación XML de un objeto JavaScript.

console.dirxml(document);




// console.trace()
// Muestra una traza de pila en la consola del navegador.

function funcion1() {
    funcion2();
}

function funcion2() {
    console.trace();
}

funcion1();

console.clear();




// console.profile()
// Inicia la grabación de un perfil de rendimiento en la consola del navegador.

console.profile('Perfil');





// console.profileEnd()
// Detiene la grabación de un perfil de rendimiento en la consola del navegador.

console.profileEnd('Perfil');





// console.timeStamp()
// Agrega un registro de marca de tiempo en la consola del navegador.

console.timeStamp('Marca de tiempo');





// console.memory
// Devuelve un objeto que contiene información sobre el uso de la memoria.

console.log(console.memory);




// console.memory.jsHeapSizeLimit
// Devuelve el tamaño máximo de la pila de JavaScript.

console.log(console.memory.jsHeapSizeLimit);




// console.memory.totalJSHeapSize
// Devuelve el tamaño total de la pila de JavaScript.

console.log(console.memory.totalJSHeapSize);




// console.memory.usedJSHeapSize
// Devuelve el tamaño de la pila de JavaScript utilizada.

console.log(console.memory.usedJSHeapSize);

console.clear();





// console.log() con comodines
// Puedes usar comodines en el método console.log() para mostrar mensajes dinámicos.

const nombre = 'Juan';
const edad = 30;

console.log('Hola, soy %s y tengo %d años.', nombre, edad);




// %s - String
// %d - Número
// %f - Número decimal
// %o - Objeto
// %c - Estilo CSS
// %i - Entero



// formatear texto con console.log()

// %c - Estilo CSS
console.log('%cTexto en blanco', 'color: white; font-weight: bold; font-size: 20px; background-color: gray; padding: 10px; border: 1px solid black; border-radius: 5px;');

// %i - Entero
console.log('%i', 100);

// %f - Número decimal
console.log('%f', 100.50);

// %o - Objeto
console.log('%o', { nombre: 'Juan', edad: 30 });

// %s - String
console.log('%s', 'Hola Mundo!');

// %d - Número
console.log('%d', 100);

// %s - String
console.log('%s', 'Hola Mundo!');





// tabla de del object console con css en JavaScript

console.table(Object.entries(console).map(([key, value]) => ({ key, value })));
