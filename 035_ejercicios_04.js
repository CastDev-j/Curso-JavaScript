
function isPrime(number) {
    if(typeof number !== "number" || number < 0) return "Entrada no valida";
    let isPrime = true;
    for (let index = 2; index**2 < number; index++) {
        if(isPrime = number % index !== 0) break;
    }
    return isPrime;
}

function isOdd(number) {
    return number % 2 !== 0;
}
function celciusToFahrenheit(value, type) {
    let result = 0;
    
    let typeUpper = type.toUpperCase();
    if(typeof value !== "number" || typeUpper !== "F" && typeUpper !== "C" ) return "Entrada no valida";

    result = (typeUpper === "C") ? (value * 9/5 + 32).toFixed(2) + ' F': ((value - 32) * 5/9).toFixed(2) + ' C';

    return result;
}

console.log('Ejericio 13: Primo');
console.log(`7 es primo: ${isPrime(7)}`);
console.log('Ejericio 14: Impar');
console.log(`7 es: ${isOdd(7) ? 'Impar': 'Par'}`);
console.log('Ejericio 15: Celcius a Fahrenheit');
console.log(`100.00 C =  ${celciusToFahrenheit(100, "c")}`);
