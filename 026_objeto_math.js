// Objeto math en JavaScript

// El objeto Math en JavaScript permite realizar tareas matemáticas en números.

// Sintaxis
// Math.methodName()

// Métodos

// Math.abs() // Valor absoluto
// Math.ceil() // Redondea hacia arriba, apartir de 0.5
// Math.floor() // Redondea hacia abajo
// Math.max() // Valor máximo
// Math.min() // Valor mínimo
// Math.pow() // Potencia
// Math.random() // Número aleatorio
// Math.round() // Redondea al número entero más cercano
// Math.sqrt() // Raíz cuadrada
// Math.trunc() // Elimina los decimales
// Math.sin() // Seno
// Math.cos() // Coseno
// Math.tan() // Tangente
// Math.asin() // Arco seno
// Math.acos() // Arco coseno
// Math.atan() // Arco tangente
// Math.atan2() // Arco tangente de dos números
// Math.log() // Logaritmo natural
// Math.log10() // Logaritmo base 10
// Math.log2() // Logaritmo base 2
// Math.exp() // Exponencial, retorna e^x, donde x es el argumento
// Math.sign() // Signo, retorna el signo de un número, -1, 0, 1
// Math.cbrt() // Raíz cúbica
// Math.hypot() // Raíz cuadrada de la suma de los cuadrados de los argumentos
// Math.sinh() // Seno hiperbólico
// Math.cosh() // Coseno hiperbólico
// Math.tanh() // Tangente hiperbólica
// Math.asinh() // Arco seno hiperbólico
// Math.acosh() // Arco coseno hiperbólico
// Math.atanh() // Arco tangente hiperbólico
// Math.expm1() // Exponencial menos 1, retorna e^x - 1
// Math.log1p() // Logaritmo natural más 1, retorna log(1 + x)
// Math.coshm1() // Coseno hiperbólico menos 1
// Math.sinhm1() // Seno hiperbólico menos 1
// Math.tanhm1() // Tangente hiperbólica menos 1
// Math.log1p() // Logaritmo natural más 1



Math.exp()
// Ejemplo

// Valor absoluto
let numero = -10;
console.log(Math.abs(numero)); // 10

// Redondea hacia arriba
let numero2 = 5.5;
console.log(Math.ceil(numero2)); // 6

// Redondea hacia abajo
let numero3 = 5.5;
console.log(Math.floor(numero3)); // 5

// Valor máximo
let numero4 = 10;
let numero5 = 20;
console.log(Math.max(numero4, numero5)); // 20

// Valor mínimo
let numero6 = 10;
let numero7 = 20;
console.log(Math.min(numero6, numero7)); // 10

// Potencia
let numero8 = 2;
let numero9 = 3;
console.log(Math.pow(numero8, numero9)); // 8

// Número aleatorio
console.log(Math.random()); // Número aleatorio entre 0 y 1

// Redondea al número entero más cercano
let numero10 = 5.5;
console.log(Math.round(numero10)); // 6

// Raíz cuadrada
let numero11 = 9;
console.log(Math.sqrt(numero11)); // 3

// Elimina los decimales
let numero12 = 5.5;
console.log(Math.trunc(numero12)); // 5


// Ejercicio

// Calcular el área de un círculo con un radio de 5.

let radio = 5;

let area = Math.PI * radio ** 2;

console.log(area); // 78.53981633974483

// Calcular el área de un triángulo con una base de 10 y una altura de 5.

let base = 10;
let altura = 5;

let area2 = base * altura / 2;

console.log(area2); // 25

// Calcular el área de un rectángulo con una base de 10 y una altura de 5.

let base2 = 10;
let altura2 = 5;

let area3 = base2 * altura2;

console.log(area3); // 50

// Calcular el área de un cuadrado con un lado de 5.

let lado = 5;

let area4 = lado ** 2;

console.log(area4); // 25

// Calcular el área de un trapecio con una base mayor de 10, una base menor de 5 y una altura de 5.

let baseMayor = 10;
let baseMenor = 5;
let altura3 = 5;

let area5 = (baseMayor + baseMenor) * altura3 / 2;

console.log(area5); // 37.5

