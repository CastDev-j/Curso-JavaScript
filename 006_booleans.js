// Booleans en JavaScript

let a = true;

let b = false;

//Forma de declarar un booleano con el constructor

let c = new Boolean(true);

console.log(a);


//Operaciones con booleanos

let d = true;

let e = false;

//AND

console.log(d && e);

//OR

console.log(d || e);

//NOT

console.log(!d);

//Operaciones con booleanos y numeros

let f = 2;

let g = 3;

//AND, solo se cumple si ambos son verdadeross, pero en este caso son numeros, 
//por lo que se toman como verdaderos

console.log(f && g);

// imrpime el ultimo valor verdadero, en este caso g

//OR

console.log(f || g);

//imprime el primer valor verdadero, en este caso f

//NOT

console.log(!f);

//imprime false, ya que el valor de f es verdadero

//Operaciones con booleanos y strings

let h = "hola";

let i = "mundo";

//AND

console.log(h && i);

//imprime el ultimo valor verdadero, en este caso i

//OR

console.log(h || i);

//imprime el primer valor verdadero, en este caso h

//NOT

console.log(!h);

//imprime false, ya que el valor de h es verdadero


//valores que tienden a false y true

console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("")); // false
console.log(Boolean(false)); // false
console.log(Boolean({})); // true, ya que es un objeto
console.log(Boolean([])); // true, ya que es un objeto
console.log(Boolean(1)); // true
console.log(Boolean("hola")); // true
console.log(Boolean(true)); // true
console.log(Boolean(function(){})); // true, ya que es una funcion
console.log(Boolean(Symbol())); // true, ya que es un simbolo

