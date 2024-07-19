// Expresiones regulares en JavaScript

// Las expresiones regulares (regex) 
//son patrones utilizados para encontrar una determinada combinación 
//de caracteres dentro de una cadena de texto.

// Las expresiones regulares se crean mediante la clase RegExp.


// Sintaxis de las expresiones regulares
// -Las expresiones regulares se crean mediante la clase RegExp.
// -Se pueden crear de dos formas:
// 1. Mediante un literal: /patron/
// 2. Mediante el constructor: new RegExp("patron")

// Ejemplo de expresión regular
let cadena = "Hola mundo";
let patron = /hola/;
let resultado = patron.test(cadena);
console.log(resultado); // false

// mostrar elementos encontrados

let cadena2 = "Hola mundo";
let patron2 = /mundo/;
let resultado2 = cadena2.match(patron2);
console.log(resultado2); // [ 'mundo', index: 5, input: 'Hola mundo', groups: undefined ]

// Expresion regular para correo electronico : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

// Ejemplo de expresión regular para validar un correo electrónico
let correo = "andres2005_cj@itcelaya.edu.mx";
let patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
let resultadoCorreo = patronCorreo.test(correo);

console.log(resultadoCorreo); // true

// Ejemplo de macheo de todos los elementos encontrados con la siguiente forma, [mun,mundo,do, a m]

let cadena3 = "Hola mundo, mundo";
let patron3 = /(mun|mundo|do|a m)/ig;

let resultado3 = cadena3.match(patron3);// busca todas las coincidencias y las devuelve en un arreglo

let resultado4 = cadena3.split(patron3); // divide la cadena en un arreglo

let resultado5 = cadena3.replace(patron3, "****"); // reemplaza las coincidencias por el texto indicado

let resultado6 = cadena3.search(patron3); // busca la primera coincidencia y devuelve la posición

let resultado7 = patron3.exec(cadena3);

console.log(resultado3); // [ 'mun', 'mundo', 'do', 'a m' ]
console.log(resultado4); // false
console.log(resultado5); // Hola ****, ****
console.log(resultado6); // 5
console.log(resultado7); // [ 'mun', index: 5, input: 'Hola mundo, mundo', groups: undefined ]