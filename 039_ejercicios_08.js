function orderNumbers(numbers) {
    let ascNumbers = [...numbers].sort((a, b) => a - b);
    let descNumbers = [...numbers].sort((a, b) => b - a);

    return {asc: ascNumbers, desc: descNumbers};
}

function filterDuplicates(elements) {
    return [...new Set(elements)];
}

function average(numbers) {
    return numbers.reduce((acc, number) => acc + number, 0) / numbers.length;
}

console.log('Ejericio 25: Ordenar números');
for (const key in orderNumbers([5, 3, 8, 1, 9, 2, 4, 7, 6])) {
    console.log(key, orderNumbers([5, 3, 8, 1, 9, 2, 4, 7, 6])[key]);
}
console.log('Ejericio 26: Filtrar duplicados');
console.log(filterDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));

console.log('Ejericio 27: Promedio');
console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));