function  randomNumber(min,max) {
    return Math.floor(Math.random()*(max))+min;
}

function isCapicua(number) {
    let isCapicua = true;
    let numberString = number.toString();

    let punteroUno = numberString.length - 1;
    let punteroDos = 0;

    while (punteroDos < punteroUno) {
        isCapicua = numberString.charAt(punteroUno) === numberString.charAt(punteroDos);
        if (!isCapicua) break;
        punteroUno--;
        punteroDos++;
    }
    return isCapicua;
}

function factorial(longitud) {
    if(typeof longitud !== "number" || longitud < 0) return "Entrada no valida";
    if(longitud === 0) return 0;
    if(longitud === 1) return 1;
    return longitud * factorial(longitud - 1);
}

function fibonacci(longitud) {
    if(typeof longitud !== "number" || longitud < 0) return "Entrada no valida";
    if(longitud === 0) return 0;
    if(longitud === 1) return 1;
    return fibonacci(longitud - 1) + fibonacci(longitud - 2);
}

console.log('Ejericio 9: Numero aleatorio');
console.log(randomNumber(1,10));
console.log('Ejericio 10: Capicua');
console.log(`12321 es capicua: ${isCapicua(12321)}`);
console.log('Ejericio 11: Factorial');
console.log(factorial(5));
console.log('Ejericio 12: Fibonacci');
console.log(fibonacci(5));