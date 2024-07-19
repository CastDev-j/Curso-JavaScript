
function reverseString(string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) 
        reversedString += string.charAt(i);
    
    return reversedString;
}

function contarRepeticiones(string, token) {
    let stringSusbtrings = string.replaceAll(token, "");
    return (string.length - stringSusbtrings.length) / token.length;
}

function isPalidrom(string) {
    let isPalidnrom = true;

    let punteroUno = string.length - 1;
    let punteroDos = 0;

    while (punteroDos < punteroUno) {
        isPalidnrom = string.charAt(punteroUno) === string.charAt(punteroDos);

        if (!isPalidnrom) break;


        punteroUno--;
        punteroDos++;
    }


    return isPalidnrom;
}

function removeTokens(string, token) {
    return string.replaceAll(token, "");
}



console.log("Ejercicio 5: Invertir cadena");
console.log(reverseString("Hola Mundo"));
console.log("Ejercicio 6: Contar repeticiones");
console.log(contarRepeticiones("Hola Mundo, Hola Mundo", "Hola"));
console.log("Ejercicio 7: Palindromo");
console.log(isPalidrom("olo"));
console.log("Ejercicio 8: Remover tokens");
console.log(removeTokens("Hola Mundo, Hola Mundo", "Hola"));