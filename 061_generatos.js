//Generators en JavaScript

// Los generadores son funciones especiales que pueden ser pausadas y reanudadas
// en cualquier momento. Para definir un generador, se utiliza la palabra clave
// function seguida de un asterisco (*). Dentro del cuerpo de la función se
// utiliza la palabra clave yield para devolver un valor.

// Ejemplo de un generador:

function* generador() {
    yield {name: 'juan', lastName: 'alvarez' };
    yield [2, 3, 4];
    yield 'Hola';
    yield 4;
}

// Para ejecutar un generador, se debe llamar a la función y almacenar el
// resultado en una variable. Luego, se puede utilizar el método next() para
// obtener el siguiente valor devuelto por el generador.

const gen = generador();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// En el ejemplo anterior, el generador devuelve los valores 1, 2, 3 y 4. Cuando
// se llama al método next() por última vez, el generador devuelve un objeto con
// la propiedad done establecida en true.


// Ejemplo de un generador que devuelve los números pares entre 0 y 10:

function* pares() {
    for (let i = 0; i <= 10; i++) {
        if (i % 2 === 0) {
            yield i;
        }
    }
}

const genPares = pares();

// for (const iterator of genPares) {
//     console.log(iterator);
// }

//guardar en un arreglo el resultado

const result = [...genPares];

console.log(result);


// En el ejemplo anterior, el generador devuelve los números pares entre 0 y 10.

// Ejemplo de un ejercicio resuelto con generadores:

function cuadrado(valor) {
    return new Promise((resolve, reject) => {
        if (typeof valor !== 'number') reject('Error: el valor debe ser un número');
        
        setTimeout(() => {
            resolve({valor, resultado: valor ** 2});
        }, 0 || Math.random() * 1000);
    });
}

function* generador() {
    console.log('Iniciando generador...');
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log('terminando generador...');
}

const genSquare = generador();

for (const element of genSquare) {
    element.then((data) => console.log(data));
}