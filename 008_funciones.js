//Funciones en javascript
/*
Declaración de una función, 

sintaixs: 
function nombreFuncion(parametros)
{cuerpo de la función}
*/

function saludar() {
    // console.log("Hola, soy una función");
}

//Invocar la función

saludar();

//Función con parámetros

function saludarPersona(nombre) {
    // console.log("Hola, soy " + nombre);
}

saludarPersona("Juan");

//Función con retorno

function retorno() {
    return true;
}

// console.log(retorno());

//Función con retorno y parámetros

function multiplicar(a, b) {
    return a * b;
}

// console.log(multiplicar(5,3));

//Función con retorno de funcións

function sumar(a, b) {
    return function () {
        return a + b;
    }
}

let suma = sumar(5, 3);

// console.log(suma());

//Funciones anónimas

let sumarAnonima = function (a, b) {
    return a + b;
}

// console.log(sumarAnonima(5, 3));

//Funciones flecha

let sumarFlecha = (a, b) => a + b;

// console.log(sumarFlecha(5,3));

//Funciones flecha con retorno de función

let sumarFlechaRetorno = (a, b) => () => a + b;

let sumaFlecha = sumarFlechaRetorno(5, 3);

// console.log(sumaFlecha());

// version con bloques

//Funciones flecha

let sumarFlechaBloque = (a, b) => {
    return a + b;
}

// console.log(sumarFlechaBloque(5,3));

//Funciones flecha con retorno de función

let sumarFlechaRetornoBloque = (a, b) => () => {
    return a + b;
}

let sumaFlechaBloque = sumarFlechaRetornoBloque(5, 3);

// console.log(sumaFlechaBloque());

//Funciones flecha con un solo parámetro

let cuadrado = a => a * a;

// console.log(cuadrado(5));

//Funciones flecha sin parámetros

let mensaje = () => "Hola mundo";

// console.log(mensaje());

//Funciones flecha con un solo parámetro y retorno de función

let cuadradoRetorno = a => () => a * a;

let cuadradoFlecha = cuadradoRetorno(5);

// console.log(cuadradoFlecha());


/*
Estructura de funciones flecha con un solo parámetro y retorno de función

    () => () => cuerpo de la función
    () => () => a * a

    los () => son los parámetros de la función
    a * a es el cuerpo de la función

    al ser un solo parámetro no es necesario poner los paréntesis en el parámetro
    al ser una sola instrucción no es necesario poner las llaves en el cuerpo de la función
    al ser una sola instrucción no es necesario poner el return en el cuerpo de la función

    si se requiere poner los paréntesis en el parámetro se pone de la siguiente manera

    (a) => a * a
    ó
    (a) => {return a * a}

*/

//Ejemplos de funciones

const CALCULADORA = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b, 
    dividir: (a, b) => a / b
}

console.log(CALCULADORA.sumar(5, 3));
console.log(CALCULADORA.restar(5, 3));
console.log(CALCULADORA.multiplicar(5, 3));
console.log(CALCULADORA.dividir(5, 3));


//Funciones flecha con un solo parámetro y retorno de función

let cuadradoRetorno2 = a => () => a * a;

let cuadradoFlecha2 = cuadradoRetorno2(5);

console.log(cuadradoFlecha2());

//Recursividad de funciones

function factorial(n) {
    if (n == 0) 
        return 1;
    else 
        return n * factorial(n - 1);
}

console.log(BigInt(factorial(30)));

// La recursividad es una técnica de programación que consiste 
//en una función que se llama a sí misma de forma repetida hasta 
//que se cumple una condición de salida.

//La recursividad es muy util para algoritmos que se pueden dividir en subproblemas
//y que se pueden resolver de forma más sencilla.

function fibonacci(n) {
   if(n == 0) return 0;
   if(n == 1) return 1;
   else {
    return fibonacci(n-1) + fibonacci(n-2)
};
   //funciona porque la función se llama a si misma
   //con valores menores a n
   //hasta llegar a 0 o 1
   //y luego se suman los valores

}

console.log(fibonacci(10));