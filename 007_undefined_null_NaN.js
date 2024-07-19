// null, undefined, NaN, que son?

// undefined: es un valor que se le asigna a una variable que no ha sido inicializada

// null: es un valor especial que representa la ausencia intencional de algun valor

// NaN: es un valor especial que representa un error de calculo, por ejemplo, si se intenta dividir por cero, el resultado es NaN


let indefinido = undefined; // let indefinido

let nulo = null;

let noEsUnNumero = NaN;

console.log(indefinido);
console.log(nulo); 
console.log(noEsUnNumero);

// ejemplos de valores que tienden a undefined, null o NaN

//NaN
let numero = 10 / "hola";
console.log(numero); // NaN

//null
let objeto = {
    dato: variable,
}
console.log(objeto); // null

//undefined

let variable;
console.log(variable); // undefined

