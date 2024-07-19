// break y continue en js

// break
// Sirve para salir de un bucle, ya sea for, while o do-while
// En un bucle anidado, solo se sale del bucle más cercano

// continue
// Sirve para saltar a la siguiente iteración del bucle
// En un bucle anidado, solo se salta a la siguiente iteración del bucle más cercano

// break

let longitud = 6;
for (let i = 0; i < longitud; i++) {
    if (i === 5) {
        break; // sale del bucle
    }
    console.log(i);
}

// continue

for (let i = 0; i < longitud; i++) {
    if (i === 5) {
        continue; // salta a la siguiente iteración
    }
    console.log(i);
}

// break en bucle anidado

for (let i = 0; i < longitud; i++) {
    for (let j = 0; j < longitud; j++) {
        console.log(i, j);
        if (j === 5) {
            break; // sale del bucle interno
        }
    }
}

// continue en bucle anidado

for (let i = 0; i < longitud; i++) {
    for (let j = 0; j < longitud; j++) {
        if (j === 5) {
            continue; // salta a la siguiente iteración del bucle interno
        }
        console.log(i, j);
    }
}


