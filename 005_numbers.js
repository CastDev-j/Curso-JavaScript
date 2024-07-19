// Numeros en JavaScript

let a = 2.236;

//esta declaracion es igual a la anterior, pero se recomienda la anterior

//hacer el bigInt con el constructor

let b = new Number(2.236);

console.log(a.toFixed(2));

let c = "AB12"

let d = parseInt(c, 16);

//imprimir binario de d

console.log(d.toString(25));

// numero grandes

let bigInt = BigInt(223372036854775807);

console.log(bigInt);

//operaciones

let e = 2.236;

let f = 3.236;

//suma
console.log(e + f);

//resta
console.log(e - f);

//multiplicacion
console.log(e * f);

//division
console.log(e / f);

//modulo
console.log(e % f);

//potencia
console.log(e ** f);

console.log(Math.pow(e, f));


//operaciones con bigInt

let bigInt1 = BigInt(223372036854775807);

let bigInt2 = BigInt(223372036854775807);

//suma
console.log(bigInt1 + bigInt2);

//resta
console.log(bigInt1 - bigInt2);

//multiplicacion
console.log(bigInt1 * bigInt2);

//division
console.log(bigInt1 / bigInt2);

//modulo
console.log(bigInt1 % bigInt2);

//potencia (no se puede hacer con bigInt), debido al tamaño de los numeros
//console.log(bigInt1 ** bigInt2);

//operaciones con bigInt y numeros

let bigInt3 = BigInt(223372036854775807);

let g = 2236;

//suma, se tiene que hacer la conversion
console.log(bigInt3 + BigInt(g));

//resta
console.log(bigInt3 - BigInt(g));

//multiplicacion
console.log(bigInt3 * BigInt(g));

//division
console.log(bigInt3 / BigInt(g));

//modulo
console.log(bigInt3 % BigInt(g));

//potencia
console.log(bigInt3 ** BigInt(g));

// bigInt con numeros decimales

let bigInt4 = BigInt(223372036854775807);







