
function contarCarcteres(cadena) {
    if(typeof cadena !== "string") 
    return "No es una cadena";

    return cadena.length;
}
function recortarCadena(cadena, longitud) {
    if(typeof cadena !== "string" || typeof longitud !== "number"|| longitud < 0) 
        return "Entrada no valida";

    return cadena.substring(0, longitud);   
}

function separarPalabras(cadena, token) {
    if(typeof cadena !== "string" || typeof token !== "string") 
        return "Entrada no valida";
    return cadena.split(token);
}

function repetirTexto(cadena, repeticiones) {
    if(typeof cadena !== "string" || typeof repeticiones !== "number" || repeticiones < 0) 
        return "Entrada no valida";
    return cadena.repeat(repeticiones);
}
console.log("Ejercicio 1: Contar caracteres");
console.log(contarCarcteres("Hola Mundo"));
console.log("Ejercicio 2: Recortar cadena");
console.log(recortarCadena("Hola Mundo", 4));
console.log("Ejercicio 3: Separar palabras");
console.log(separarPalabras("Hola Mundo", " "));
console.log("Ejercicio 4: Repetir texto")
console.log(repetirTexto("Hola Mundo", 3));
