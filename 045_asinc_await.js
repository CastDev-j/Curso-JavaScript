// asinc await en funciones JS

// las funciones asincronas se pueden definir con la palabra reservada async
// sirven para que la funcion se ejecute de manera asincrona

// funcion que devuelve una promesa
function suma(valor1, valor2) {
    if (isNaN(valor1) || isNaN(valor2)) {
        throw new Error('Los valores no son numericos');
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(valor1 + valor2);
        }, 1000);
    });
}

// funcion asincrona declarada autoejecutable anonima

(async  () => {
try {
    let resultado = await suma(2, 2); // el await se usa para esperar a que la funcion asincrona termine
    console.log('El resultado de la suma es: ' + resultado);

    resultado = suma(3, 3); // aqui no se espera a que termine la funcion asincrona, y el resultado es una promesa
    console.log('El resultado de la suma es: ' + resultado);

    resultado = await suma(4, 4); // el await se usa para esperar a que la funcion asincrona termine
    console.log('El resultado de la suma es: ' + resultado);

    resultado = await suma(5, 6); // de esta manera se puede esperar a que termine la funcion asincrona
    console.log('El resultado de la suma es: ' + resultado);

} catch (error) {
    console.log(error);
}
})();



// las funciones asincronas se pueden declarar de manera anonima o expresadas

// funcion asincrona expresada

const testDos = async (valor1, valor2) => {
    try {
        let resultado = await suma(2, 2); // el await se usa para esperar a que la funcion asincrona termine
        console.log('El resultado de la suma es: ' + resultado);
    
        resultado = await suma(3, 3); // espera a que termine la funcion asincrona
        console.log('El resultado de la suma es: ' + resultado);
    
        resultado = await suma(4, 4); // el await se usa para esperar a que la funcion asincrona termine
        console.log('El resultado de la suma es: ' + resultado);
    
        resultado = await suma(5, 6); // de esta manera se puede esperar a que termine la funcion asincrona
        console.log('El resultado de la suma es: ' + resultado);
    
        console.log('Fin de la ejecucion');
    } catch (error) {
        console.log(error);
    }
}

// testDos();

