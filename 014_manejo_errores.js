//manejo de errores en js

//try-catch

//Permite manejar errores en el código, evitando que se detenga la ejecución del programa

try {
    //codigo a ejecutar

    console.log('En el try se agrega el código a evaluar');
    throw new Error('Error forzado');
    console.log('Este código no se ejecutará si hay un error antes');

} catch (error) {
    //error es el objeto que contiene la información del error
    //codigo a ejecutar si hay un error

    console.log('En el catch se captura cualquier error ocurrido en el try');
    console.log(error.message);
} finally {
    //codigo que se ejecuta siempre, haya error o no

    //es util para cerrar conexiones a bases de datos, cerrar archivos, etc

    //pero si se usa return dentro del try, finally no se ejecuta

    console.log('El bloque finally se ejecutará siempre al final de un bloque try-catch');
}

//throw

//Permite lanzar errores personalizados

try {
    let numero = 12;
    if (isNaN(numero)) 
        throw new Error('El caracter introducido no es un número');

    console.log(numero ** 2);
}catch (error) {
    console.log(error.message);
}



