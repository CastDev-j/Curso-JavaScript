//Condicionales en js

// if else

// if(condición){
//     //Bloque de código
// } else {
//     //Bloque de código
// }

// if(condición)
//     //Bloque de código
// else
//     //Bloque de código

// if(condición)
//     //Bloque de código
// else if(condición)
//     //Bloque de código
// else
//     //Bloque de código


//Ejemplo

let contenido = '';
let edades = [15, 18, 25, 30, 40, 50, 60, 70, 80, 90];

contenido += `<h2>Condicionales</h2>`;

edades.forEach(edad => {
contenido += `<h3>Edad: ${edad}</h3>`;
if(edad >= 18)  
contenido += `eres mayor de edad`;
 else 
contenido += `eres menor de edad`;
contenido += `<br><br>`;
});


//Ejemplo

let hora = 6;

contenido += `<h2>Condicionales anidados</h2>`;
contenido += `<h3>Hora: ${hora}</h3>`;
//6-12 Buenos dias, 12-19 Buenas tardes, 19-23 Buenas noches, 23-6 Dejame dormir

if(hora >= 6 && hora < 12)
contenido += `Buenos dias`;
else if(hora >= 12 && hora < 19)
contenido += `Buenas tardes`;
else if(hora >= 19 && hora < 23)
contenido += `Buenas noches`;
else
contenido += `Dejame dormir`;

// Operador ternario

//condición ? expresión1 : expresión2

//Ejemplo

let edad = 15;
let mensaje = edad >= 18 ? 'eres mayor de edad' : 'eres menor de edad';

contenido += `<h2>Operador ternario</h2>`;
contenido += `<h3>Edad: ${edad}</h3>`;

contenido += mensaje;

//Switch case

let usuarios = ['administrador', 'maestro', 'alumno', 'invitado'];

function permisos(usuario) {
    let permisos = [];
    switch(usuario){
        case 'administrador':
            permisos.push(`Acceso a base de usuarios`);
        case 'maestro':
            permisos.push(`Acceso a calificaciones`);
        case 'alumno':
            permisos.push(`Acceso a cursos`);
            break;
        default:
            permisos.push(`Usuario no identificado`);
    }
    return permisos;
}



contenido += `<h2>Switch case</h2>`;
usuarios.forEach(usuario => {
    contenido += `<h3>Usuario: ${usuario}</h3>`;
    contenido += `<ul class="lista">`;
    permisos(usuario).forEach(permiso => {  
        contenido += `<li>${permiso}</li>`;
    });
    contenido += `</ul>`;
});




document.write(contenido);