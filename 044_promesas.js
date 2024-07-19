//promesas en js

// las promesas son objetos que representan la terminacion 
// o el fracaso de una operacion asincrona

// las promesas tienen 3 estados:
// pendiente
// cumplida
// rechazada


// las promesas tienen 2 parametros:
// resolve: se ejecuta cuando la promesa se cumple
// reject: se ejecuta cuando la promesa se rechaza

//funcion callback
function cuadradoPromise(value) {
    return new Promise((resolve, reject) => {
        if (typeof value !== 'number') reject(new Error(`Error: el valor ${value} no es un numero`));


        setTimeout(() => {
            resolve({
                value,
                result: value * 2
            });
        }, 0 | Math.random() * 1000);
    });
}

// ejemplo de promesa


cuadradoPromise(2)
    .then((obj) => {
        //console.log('Inicio promise');
        //console.log(`Promise: ${obj.value}, ${obj.result}`);
        // se retorna una nueva promesa, por lo que se puede encadenar
        return cuadradoPromise(4);
    }).then(obj => {
        //console.log(`Promise: ${obj.value}, ${obj.result}`);
    
        return cuadradoPromise(1);
    }).then(obj => {

        //console.log(`Promise: ${obj.value}, ${obj.result}`); 
        //console.log('Fin promise ');
    }).catch((error) => console.error(error));


// ejempliod distinto

//let arreglo = [1,2,3,4,4];

//arreglo.forEach((numero, i, array) => console.log(`Posicion ${i+1} : ${numero}, array: ${array}`));

//otro ejemplo de promesa

function solicitarNumeros(cant) {
    return new Promise((resolve, reject) => {
        if (typeof cant !== 'number') return reject(`Error: la longitud ${cant} no es un numero`);

        setTimeout(() => {
        let array = [];
        for (let i = 0; i < cant; i++) {
            let numero = Math.floor(Math.random() * 10);
            if (numero === 0) {
                reject('Error: se genero un error de token de tipo: 0');
            }
            array.push(numero);
        }
        resolve(array);
    }, 0 | Math.random() * 1000);
    });
}

solicitarNumeros(5)
.then(array =>{
    console.log(array);
    return solicitarNumeros(3);
}).then(array =>{
    console.log(array);
    console.log('Fin de la promesa');
}).catch(error => console.error(error));

//ultimo ejemplo de promesa

function cubePromise(value) {

    return new Promise((resolve, reject) => {
        if (typeof value !== 'number') return reject(`Error: el valor "${value}" no es un numero`);

        setTimeout(() => {
            resolve({
                value,
                result: value ** 3
            });
        }, 0 | Math.random() * 1000);
    });
}

cubePromise(10)
.then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cubePromise(11);
}).then(obj => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log('Fin de la promesa');
})
.catch(error => console.error(error));