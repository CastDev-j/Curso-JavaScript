// template strings

let nombre = 'Juan';
let apellido = 'Perez';

//concatenar
let nombreCompleto =`${nombre} ${apellido}`

console.log(nombreCompleto);

let saludo = `Hola mi nombre es ${nombre} y mi apellido es ${apellido}`;

console.log(saludo);


//Caso de uso de template strings

const ESTACIONES = ['Primavera', 'Verano', 'Otoño', 'Invierno'];

let listaEstaciones = ` <ul class="lista-estaciones">
                            ${ESTACIONES.map(estacion => `<li>${estacion}</li>`).join('')}
                        </ul>`;

//document.write(listaEstaciones);




