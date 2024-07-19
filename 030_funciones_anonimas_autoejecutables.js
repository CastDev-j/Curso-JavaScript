// Funciones anonimas autoejecutables (IIFE) en JavaScript

// Las funciones autoejecutables son funciones que se ejecutan inmediatamente después de ser creadas.
// Se utilizan para encapsular variables y funciones para evitar conflictos con el código global.

// Sintaxis:
// (function() {
//     // Código
// })();
// o
// (function() {
//     // Código
// }());

// Ejemplo:
(function() {
    console.log('Hola mundo');
})();

// Las funciones autoejecutables también pueden recibir parámetros.

// Ejemplo:
// (function(d) {
    // console.log(d);
// })(document);

// Las funciones autoejecutables también pueden devolver valores.

// Ejemplo:
var resultado = (function(a, b) {
    return a + b;
})(3, 5);

console.log(resultado); // 8



// Las funciones autoejecutables también pueden ser anónimas.

// Ejemplo:
(function(n) {
    console.log('Hola mundo '+ n);
})('texto');

//Ejemplo practico:

(function(d,w,c) {
    c.log(d);
    c.log(w);
    c.log(c);
})(document, window, console);

