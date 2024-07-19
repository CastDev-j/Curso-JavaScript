//ciclos en js

// while(condición){}

let contador = 0;
let limite = 3;
while (contador < limite) {
    console.log(contador);
    contador++;
}

// do while

let contador2 = 0;

do {
    console.log(contador2);
    contador2++;
} while (contador2 < limite);

// for

for (let i = 0; i < limite; i++) {
    console.log(i);
}

// for of (itera sobre arreglos)

let edades = [15, 18];

for (let edad of edades) {
    console.log(edad);
}

// for in (itera sobre objetos)

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
}
// se puede acceder a las propiedades del objeto
for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

// forEach (itera sobre arreglos)// no se puede acceder a la posición del arreglo

edades.forEach(edad => {
    console.log(edad);
});

// break y continue

for (let i = 0; i < limite; i++) {
    if (i === limite - 2) {
        break; // termina el ciclo
    }
    console.log(i);
}

for (let i = 0; i < limite; i++) {
    if (i === limite - 2) {
        continue; // salta la iteración actual
    }
    console.log(i);
}

// Ejemplo array de objetos persona (10 personas) 

const PERSONAS = [{
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
},
{
    nombre: 'Maria',
    apellido: 'Gomez',
    edad: 25
},
{
    nombre: 'Carlos',
    apellido: 'Lopez',
    edad: 40
},
{
    nombre: 'Ana',
    apellido: 'Gonzalez',
    edad: 35
},
{
    nombre: 'Pedro',
    apellido: 'Rodriguez',
    edad: 28
},
{
    nombre: 'Laura',
    apellido: 'Martinez',
    edad: 32
},
{
    nombre: 'Diego',
    apellido: 'Hernandez',
    edad: 45
},
{
    nombre: 'Sofia',
    apellido: 'Lopez',
    edad: 22
},
{
    nombre: 'Luis',
    apellido: 'Torres',
    edad: 37
},
{
    nombre: 'Mariana',
    apellido: 'Sanchez',
    edad: 29
}
];

let contenido = '';

PERSONAS.forEach((persona, i) => {
    contenido += `<h2>Persona ${i + 1}</h2>`;
    for (const propiedad in persona) {
        contenido += `${propiedad}: ${persona[propiedad]}<br>`;
    }
});

// hacer los objetos arreglos estructua [[],[],[]]

const PERSONAS_ARRAY = [];

//ordenados por edad
PERSONAS_ARRAY.push(
    PERSONAS
        .sort((a, b) => a.edad - b.edad)
        .map(persona => Object.values(persona)))

PERSONAS_ARRAY.forEach((persona) => {
    contenido += '<h2>Lista de personas ordenadas por edad</h2>';
    for (const indice in persona) {
        contenido += `${indice}: ${persona[indice]}<br>`;
    }
})

document.write(contenido);