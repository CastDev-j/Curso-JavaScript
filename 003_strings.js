//cadenas de texto o strings

//``

let cadena = 'Hola Mundo';

console.log(cadena.length);

//concatenar

let nombre = 'Juan';
let apellido = 'Perez';

let nombreCompleto =`${nombre} ${apellido}`

console.log(nombreCompleto);

//Metodos de los strings

let texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos"

console.log(texto.includes('dolor')); 

texto.split(' ').forEach(palabra => {
    console.log(palabra);
});

//substring

console.log(texto.substring(0, 10));

//replace

console.log(texto.replace('dolor', 'placer'));

//toUpperCase

console.log(texto.toUpperCase());

//toLowerCase

console.log(texto.toLowerCase());

//trim

let texto2 = "    Hola Mundo    ";

console.log(texto2.trim());

//startsWith

console.log(texto.startsWith('Lorem'));

//endsWith

console.log(texto.endsWith('quos'));

//indexOf

console.log(texto.indexOf('sit'));

//lastIndexOf

console.log(texto.lastIndexOf('sit'));

//repeat

console.log(texto.repeat(2));

//slice

console.log(texto.slice(0, 15));

//padStart

console.log(texto.padStart(80, ' '));

//padEnd

console.log(texto.padEnd(80, ' '));

//charAt

console.log(texto.charAt(0));

//charCodeAt

console.log(texto.charCodeAt(0));

//fromCharCode

console.log(String.fromCharCode(65));

