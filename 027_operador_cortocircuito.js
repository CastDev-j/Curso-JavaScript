// Operador cortocircuito (short-circuit) en JavaScript


// El operador cortocircuito (short-circuit) 
//es un operador lógico que devuelve el valor del operando derecho si el operando izquierdo es falso. 
//Si el operando izquierdo es verdadero, devuelve el valor del operando izquierdo.

// El operador cortocircuito se utiliza para simplificar las sentencias condicionales.

// Ejemplo de operador cortocircuito en JavaScript

// Ejemplo 1: Operador cortocircuito AND (&&)

// Devuelve el valor del operando derecho si el operando izquierdo es verdadero.

// Sintaxis
// expr1 && expr2

// Ejemplo
let a = 10;
let b = 20;

let result = (a > 5) && (b > 10);
console.log(result); // true

// Ejemplo 2: Operador cortocircuito OR (||)

// Devuelve el valor del operando derecho si el operando izquierdo es falso.

// Sintaxis
// expr1 || expr2

// Ejemplo
let x = 10;
let y = 20;

let output = (x > 5) || (y > 10);
console.log(output); // true

//ejemplo
// Ejemplo 3: Operador cortocircuito en JavaScript
console.log(false || 10); // 10


