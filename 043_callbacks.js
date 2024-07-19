//callbacks en JS

// un callback es una funcion que se pasa como argumento a otra funcion
// y se ejecuta despues de un tiempo determinado o despues de que se cumpla una condicion

// ejemplo de callback

function operar(callback, num1, num2){
    return callback(num1, num2);
}

let suma = (a,b)=> a+b;
let resta = (a,b)=> a-b;
let multiplicacion = (a,b)=> a*b;
let division = (a,b)=> a/b;

console.log(operar(suma, 10, 20));
console.log(operar(resta, 10, 20));
console.log(operar(multiplicacion, 10, 20));
console.log(operar(division, 10, 20));

// otro ejemplo de callback, con el caso de callback hell, lo cual no es recomendable

function cuadradoCallback(valor, callback) {
    setTimeout(() => {
        callback(valor, valor * valor);
    }, 0|Math.random() * 1000);
}

cuadradoCallback(0, (valor, resultado) => {
    console.log('Inicio callback');
    console.log(`Callback: ${valor}, ${resultado}`);
    
    cuadradoCallback(1, (valor, resultado) => {
        console.log(`Callback: ${valor}, ${resultado}`);
        
        cuadradoCallback(2, (valor, resultado) => {
            console.log(`Callback: ${valor}, ${resultado}`);
            
    
        });
    });
});