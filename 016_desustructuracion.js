// Destruccturación de objetos

// La destructuración de objetos es una característica 
//de ES6 que permite extraer datos de un objeto y 
//signarlos a variables de forma más sencilla.

// Ejemplo de destructuración de objetos


let persona = {
    names: 'Juan',
    lastname: 'Perez',
    old: 25
};

let {names, lastname, old} = persona;

console.log(names); // Juan
console.log(lastname); // Perez
console.log(old); // 25


// En el ejemplo anterior, se extraen las propiedades
// nombre, apellido y edad del objeto persona y se
// asignan a las variables del mismo nombre.

// También es posible asignar un alias a las variables

let {names: n, lastname: a, old: e} = persona;

console.log(n); // Juan
console.log(a); // Perez
console.log(e); // 25

// En este caso, se asignan las propiedades del objeto
// persona a las variables n, a y e, respectivamente.

// La destructuración de objetos también se puede
// utilizar en funciones

function mostrarInfo({names, lastname, old}) {
    console.log(names, lastname, old);
}

// Se pasa el objeto que cumpla con la firma de la función
// y se extraen las propiedades nombre, apellido y edad
// para mostrarlas en consola
mostrarInfo(persona); // Juan Perez 25

// En este caso, se pasa el objeto persona a la función
// mostrarInfo y se extraen las propiedades nombre, apellido
// y edad para mostrarlas en consola.

console.log('----------------------------------');

// Ejemplo de destructuración de objetos anidados

const PERSONA = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    direccion: {
        calle: 'Av. 123',
        ciudad: 'Buenos Aires'
    }
};

let {nombre, apellido, edad, direccion: {calle, ciudad}} = persona2;

console.log(nombre); // Juan
console.log(apellido); // Perez
console.log(edad); // 25
console.log(calle); // Av. 123
console.log(ciudad); // Buenos Aires

// En este caso, se extraen las propiedades nombre, apellido
// y edad del objeto persona2 y las propiedades calle y ciudad
// del objeto direccion.

