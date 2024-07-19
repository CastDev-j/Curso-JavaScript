// Propiedades dinámicas en objetos en JavaScript

// En JavaScript, los objetos son colecciones de propiedades,
// y las propiedades son pares clave-valor.

// Las propiedades de un objeto pueden ser de dos tipos:
// - Propiedades estáticas: son las propiedades que se definen en la declaración del objeto.
// - Propiedades dinámicas: son las propiedades que se agregan al objeto después de su creación.

// Para agregar una propiedad dinámica a un objeto en JavaScript,
// se puede utilizar la notación de corchetes [].

// Ejemplo de propiedades dinámicas en objetos en JavaScript:

const objetoUsuarios = {}

const usuarios = ['usuario1', 'usuario2', 'usuario3'];

usuarios.forEach((usuario, index) => {
    objetoUsuarios[`id_${index}`] = {
        nombre: usuario,
        edad: Math.floor(Math.random() * 50) + 18
    };
});

console.log(objetoUsuarios);

// En el ejemplo anterior, se crea un objeto vacío llamado objetoUsuarios.
// Luego, se recorre el array de usuarios y se agrega una propiedad dinámica al objetoUsuarios
// con el nombre id_ seguido del índice del usuario en el array.

// otro ejemplo con rutas dinámicas:

const rutas = {
    '/': 'Inicio',
    '/acerca-de': 'Acerca de',
    '/contacto': 'Contacto'
};

let slug = ['blog', 'productos', 'servicios'];

slug.forEach((ruta) => {
    rutas[`/${ruta}`] = `${firstLetterUpperCase(ruta)}`;
});

function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(rutas);

// En el ejemplo anterior, se crea un objeto llamado rutas con las rutas de un sitio web

