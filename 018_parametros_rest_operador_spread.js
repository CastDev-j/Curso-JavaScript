// parametros rest y operador spread 

// parametros rest
function sumar(...c) { // el parametro rest se define con los tres puntos antes del nombre del parametro
    let resultado = 0; // se inicializa la variable resultado
    c.forEach(n => { resultado += n; }); // se recorre el array de parametros y se suman
    return resultado; // se retorna el resultado
}

console.log(sumar(1, 2));

console.log(sumar(1, 2, 3));

console.log(sumar(1, 2, 3, 4)); // se pueden pasar la cantidad de parametros que se deseen

let numeros = [1, 2, 3, 4, 5];

console.log(...numeros); // se pasa el array de numeros como parametros

// ejemplo de parametros rest 

function mensaje(...m) {
    return m.reduce((acumulado, actual) => acumulado + ' _ ' + actual);
}

console.log(mensaje('hola', 'mundo', 'desde', 'javascript'));

// operador spread

numeros = [1, 2, 3, 4, 5, 6];
let numeros2 = [6, 7, 8, 9, 10];


console.log(sumar(...numeros, ...numeros2)); // se pasa el array de numeros como parametros

let cadena = ['hola', 'mundo', 'desde', 'javascript', 'con', 'el', 'operador', 'spread'];

console.log(mensaje(...cadena)); // se pasa el array de cadena como parametros

