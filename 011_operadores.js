//Tipos de operadores en js

//Operadores aritméticos

//-, +, *, /, %, **, ().

let a = 5;
let b = 2;

//Suma
let suma = a + b;

//Resta
let resta = a - b;

//Multiplicación
let multiplicacion = a * b;

//División
let division = a / b;

//Módulo
let modulo = a % b;

//Potencia
let potencia = a ** b;

//Imprimir en pantalla

document.write(`<h2>Operadores aritméticos</h2>`);
document.write(`<ul class="lista">`);
document.write(`<li>a: ${a}</li>`);
document.write(`<li>b: ${b}</li>`);
document.write(`<br>`);
document.write(`<li>Suma: ${suma}</li>`);
document.write(`<li>Resta: ${resta}</li>`);
document.write(`<li>Multiplicación: ${multiplicacion}</li>`);
document.write(`<li>División: ${division}</li>`);
document.write(`<li>Módulo: ${modulo}</li>`);
document.write(`<li>Potencia: ${potencia}</li>`);
document.write(`</ul>`);









//Operadores relacionales

//==, ===, !=, !==, >, <, >=, <=.

let c = 5;
let d = 5;

//Igualdad
let igualdad = c == d;

//Igualdad estricta (compara valor y tipo de dato)
let igualdadEstricta = c === d;

//Desigualdad
let desigualdad = c != d;

//Desigualdad estricta (compara valor y tipo de dato)
let desigualdadEstricta = c !== d;

//Mayor que
let mayorQue = c > d;

//Menor que
let menorQue = c < d;

//Mayor o igual que
let mayorOI = c >= d;

//Menor o igual que
let menorOI = c <= d;

//Imprimir en pantalla

document.write(`<h2>Operadores relacionales</h2>`);
document.write(`<ul class="lista">`);
document.write(`<li>c: ${c}</li>`);
document.write(`<li>d: ${d}</li>`);
document.write(`<br>`);
document.write(`<li>Igualdad: ${igualdad}</li>`);
document.write(`<li>Igualdad estricta: ${igualdadEstricta}</li>`);
document.write(`<li>Desigualdad: ${desigualdad}</li>`);
document.write(`<li>Desigualdad estricta: ${desigualdadEstricta}</li>`);
document.write(`<li>Mayor que: ${mayorQue}</li>`);
document.write(`<li>Menor que: ${menorQue}</li>`);
document.write(`<li>Mayor o igual que: ${mayorOI}</li>`);
document.write(`<li>Menor o igual que: ${menorOI}</li>`);
document.write(`</ul>`);









//Operadores lógicos

//&&, ||, !.

let e = true;
let f = false;

//AND
let and = e && f;

//OR
let or = e || f;

//NOT
let not = !e;

//Imprimir en pantalla

document.write(`<h2>Operadores lógicos</h2>`);
document.write(`<ul class="lista">`);
document.write(`<li>e: ${e}</li>`);
document.write(`<li>f: ${f}</li>`);
document.write(`<br>`);
document.write(`<li>AND: ${and}</li>`);
document.write(`<li>OR: ${or}</li>`);
document.write(`<li>NOT: ${not}</li>`);
document.write(`</ul>`);









//Operadores de asignación

// =, +=, -=, *=, /=, %=.

let g = 5;
let h = 2;

//Asignación
let asignacion = g;

//Suma y asignación
let sumaAsignacion = g += h;

//Resta y asignación
let restaAsignacion = g -= h;

//Multiplicación y asignación
let multiplicacionAsignacion = g *= h;

//División y asignación
let divisionAsignacion = g /= h;

//Módulo y asignación
let moduloAsignacion = g %= h;

//Imprimir en pantalla

document.write(`<h2>Operadores de asignación</h2>`);
document.write(`<ul class="lista">`);
document.write(`<li>g: ${g}</li>`);
document.write(`<li>h: ${h}</li>`);
document.write(`<br>`);
document.write(`<li>Asignación: ${asignacion}</li>`);
document.write(`<li>Suma y asignación: ${sumaAsignacion}</li>`);
document.write(`<li>Resta y asignación: ${restaAsignacion}</li>`);
document.write(`<li>Multiplicación y asignación: ${multiplicacionAsignacion}</li>`);
document.write(`<li>División y asignación: ${divisionAsignacion}</li>`);
document.write(`<li>Módulo y asignación: ${moduloAsignacion}</li>`);
document.write(`</ul>`);









//Operadores de incremento y decremento

//++, --. (Se pueden usar antes o después de la variable)

let i = 5;

//Incremento
let incremento = i++;

//Decremento
let decremento = i--;

//Imprimir en pantalla

document.write(`<h2>Operadores de incremento y decremento</h2>`);
document.write(`<ul class="lista">`);
document.write(`<li>i: ${i}</li>`);
document.write(`<br>`);
document.write(`<li>Incremento: ${incremento}</li>`);
document.write(`<li>Decremento: ${decremento}</li>`);
document.write(`</ul>`);









//Operadores de concatenación

//+, +=.

let j = "Hola";
let k = "Mundo";

//Concatenación
let concatenacion = j + " " + k;

//Concatenación y asignación
let concatenacionAsignacion = j += " " + k;

//Imprimir en pantalla

document.write(`<h2>Operadores de concatenación</h2>`);
document.write(`<ul class="lista">`);
document.write(`<li>j: ${j}</li>`);
document.write(`<li>k: ${k}</li>`);
document.write(`<br>`);
document.write(`<li>Concatenación: ${concatenacion}</li>`);
document.write(`<li>Concatenación y asignación: ${concatenacionAsignacion}</li>`);
document.write(`</ul>`);









//Operador ternario

//?.

let l = 5;
let m = 2;

//Ternario
let ternario = l > m ? "Verdadero" : "Falso";

//Imprimir en pantalla

document.write(`<h2>Operador ternario</h2>`);
document.write(`<ul class="lista">`);
document.write(`<li>l: ${l}</li>`);
document.write(`<li>m: ${m}</li>`);
document.write(`<br>`);
document.write(`<li>Ternario: ${ternario}</li>`);
document.write(`</ul>`);









// ?? (Nullish coalescing operator)

let n = null;
let o = 2;

//Nullish coalescing operator 
//(si el valor de la izquierda es null o undefined, se devuelve el valor de la derecha)

let nullish = n ?? o;

//Imprimir en pantalla

document.write(`<h2>Nullish coalescing operator</h2>`);
document.write(`<ul class="lista">`);
document.write(`<li>n: ${n}</li>`);
document.write(`<li>o: ${o}</li>`);
document.write(`<br>`);
document.write(`<li>Nullish coalescing operator: ${nullish}</li>`);
document.write(`</ul>`);









//Operadores de tipo

//typeof, instanceof.

let p = 5;
let q = "Hola";

//typeof (devuelve el tipo de dato de una variable)
let tipoP = typeof p;
let tipoQ = typeof q;

//instanceof (comprueba si un objeto es una instancia de otro objeto)
let instP = p instanceof Number;
let instQ = q instanceof String;

//Imprimir en pantalla

document.write(`<h2>Operadores de tipo</h2>`);
document.write(`<ul class="lista">`);
document.write(`<li>p: ${p}</li>`);
document.write(`<li>q: ${q}</li>`);
document.write(`<br>`);
document.write(`<li>typeof p: ${tipoP}</li>`);
document.write(`<li>typeof q: ${tipoQ}</li>`);
document.write(`<li>instanceof Number: ${instP}</li>`);
document.write(`<li>instanceof String: ${instQ}</li>`);
document.write(`</ul>`);


