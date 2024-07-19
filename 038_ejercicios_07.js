function elevateNumber(numbers, exponent) {
    return numbers.map(n=>n**exponent);
}

function minAndMax(numbers) {
    return [Math.min(...numbers), Math.max(...numbers)];
}

function separateNumbers(numbers) {
    const even = numbers.filter(element => element % 2 === 0);
    const odd = numbers.filter(element => element % 2 !== 0);
    return [even, odd];
}

console.log('Ejericio 22: Elevar al cuadrado');
console.log(elevateNumber([1, 2, 3, 4, 5], 2));
console.log('Ejericio 23: Minimo y maximo');
console.log(minAndMax([1, 2, 3, 4, 5]));
console.log('Ejericio 24: Separar pares e impares');
console.log(separateNumbers([1, 2, 3, 4, 5]).flat());