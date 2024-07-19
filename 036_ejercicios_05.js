function numbersBaseConverter(value, base) {
    return `${value.toString(base)} en base ${base}`;
}

function addDiscount(mount, discount) {
    return mount - (mount * discount / 100);
}

function calcYears(fecha) {
    let fechaActual = new Date().getTime();
    let fechaComparar = fecha.getTime();

    return Math.floor((fechaActual - fechaComparar) / (1000 * 60 * 60 * 24 * 365.25)) + ' años';
}

console.log('Ejericio 16: Convertir a binario');
console.log(`2 en decimal es: ${numbersBaseConverter(2, 2)}`);
console.log(`Ejericio 17: Descuento`);
console.log(`El precio con descuento es: ${addDiscount(100, 15)}, con un 15% de descuento, el precio original es 100`);
console.log(`Ejericio 18: Calcular años`);
console.log(`Han pasado ${calcYears(new Date(1984, 0, 1))} desde 1990`);
