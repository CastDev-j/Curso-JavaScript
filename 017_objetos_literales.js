// objetos literales en js


// objeto literal
const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador web',
    edad: 500,
    gritar: function(){
        console.log('AHHHHHHHHHHHHHHH');
    }
}

// acceder a los valores del objeto

persona.gritar();

let nombre = 'alfonso', profesion = 'Programador Web',edad = 30;


// objeto literal

const persona2 = {
    nombre,
    profesion,
    edad,
    gritar(){
        console.log('AHHHHHHHHHHHHHHH');
    }

    
}

console.log(persona2);
persona2.gritar();