
var hola // Tiene un alcance global

// Ejemplo de alcance global
if(true){
    hola = "hola mundo";
    console.log(hola);
}

// Ejemplo de alcance local/bloque
if(true){
    let hello = "hola mundo"; // Tiene un alcance local/bloque
    console.log(hello);
}

try{
    console.log(hello); // Error: hello no esta definido en el ambito global
}  catch(e){
    console.error(e);
}


{
    var hello = "hola mundo"; // Tiene un alcance global
    console.log(hello);
}

console.log(hello); // Imprime "hola mundo" porque var tiene un alcance global

// El uso de var es desaconsejado, se recomienda usar let y const

 