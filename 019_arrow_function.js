// Arrow function javascript

// Las arrow function son una forma más corta de escribir funciones en javascript,
// se utilizan para simplificar la sintaxis de las funciones,

// Sintaxis de una arrow function

// let nombre_funcion = 
// (parametros) => 
// { // se define la funcion con la palabra reservada let, el nombre de la funcion, los parametros y la flecha =>
//     // se define el cuerpo de la funcion
//     return resultado; // se retorna el resultado
// }

let saludo = ()=>{
    console.log('Hola mundo');
}

//saludo();

// Ejemplo de arrow function

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const CALCULADORA = { 
    suma: (...c)=> c.reduce((acumulado, actual) => acumulado + actual),
    resta: (...c)=> c.reduce((acumulado, actual) => acumulado - actual),
    multiplicacion: (...c)=> c.reduce((acumulado, actual) => acumulado * actual),
    division: (...c)=> c.reduce((acumulado, actual) => acumulado / actual)
}

console.log(`Valores: ${numeros.reduce((acumulado, actual) => acumulado +' '+ actual)}`);
let cadena = '';
for (const operacion in CALCULADORA) {
    cadena += `La ${operacion} de los numeros es ${CALCULADORA[operacion](...numeros)}\n`;

}

console.log(cadena);

// Ejemplo de arrow function 

let numerosGrandes = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

console.log('Numeros grandes:');
numerosGrandes.forEach(((numero,index ) => {
    console.log(`El numero en la posicion '${index}' es ${numero}`);
}))

// Ejemplo de arrow function

let numerosPares =  numerosGrandes.filter((numero) => numero % 2 === 0);

console.log('Numeros pares:');
console.log(numerosPares);

// Ejemplo de arrow function

let numerosImpares =  numerosGrandes.filter((numero) => numero % 2 !== 0);

console.log('Numeros impares:');
console.log(numerosImpares);