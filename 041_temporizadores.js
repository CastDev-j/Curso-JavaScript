//temporizadores en JS

// los temporizadores son funciones que se ejecutan despues de un tiempo determinad

// setTimeout(funcion, tiempo) ejecuta una funcion despues de un tiempo determinado
// setInterval(funcion, tiempo) ejecuta una funcion cada cierto tiempo

// setTimeout ejemplo:

function saludar(){
    console.log('Hola');
}
setTimeout(saludar, 1000);

setTimeout(() => {
    console.log(`Hola usuario`);
}, 500);

// setInterval ejemplo:

let contador = 0;
let intervalo = setInterval(() => {
    console.log(contador);
    contador++;
    if(contador === 5){
        clearInterval(intervalo);
    }
}, 1000);

// cancelar un temporizador

// clear timeout

let temporizador = setTimeout(() => {
    console.log('Hola');
}, 500);

clearTimeout(temporizador); // cancela el temporizador, no permite que se ejecute la funcion

// clear interval

let contador2 = 0;
let intervalo2 = setInterval(() => {
    console.log(contador2);
    contador2++;
    if(contador2 === 10){
        clearInterval(intervalo2);
    }
},200);

