// Nodos, Elementos e Seletores en JavaScript

let log = console.log;
log(document);


// get element by tag name
log(document.getElementsByTagName('li')); 

// get element by class name
log(document.getElementsByClassName('card'));

// get element by name
log(document.getElementsByName('nombre'));

// get element by id
log(document.getElementById('menu'));

// Todos los estos fueron los primeros métodos de selección de elementos en el DOM
// Pero ahora se usan los selectores de CSS

// querySelector (solo devuelve el primer elemento que encuentre)

// un tag
log(document.querySelector('p'));
// un id
log(document.querySelector('#menu'));
// una clase
log(document.querySelector('.card'));
// un atributo
log(document.querySelector('[name="nombre"]'));

// querySelectorAll (devuelve todos los elementos que cumplan con la condición)

// un tag
log(document.querySelectorAll('p'));
// un id
log(document.querySelectorAll('#menu'));
// una clase
log(document.querySelectorAll('.card'));
// un atributo
log(document.querySelectorAll('[name="nombre"]'));

// querySelector y querySelectorAll son los métodos más usados para seleccionar elementos en el DOM

// recordar que querySelector y querySelectorAll devuelven un NodeList, por lo que se puede recorrer con forEach
document.querySelectorAll('.card').forEach(function(element){
    log(element);
});

// Seleccionar los elementos con relación a otros elementos

log(document.querySelector('#menu')); // selecciona el header con id menu
log(document.querySelectorAll('#menu li')[2]); // selecciona el tercer elemento li dentro del header con id menu
log(document.querySelector('#menu li:first-child')); // selecciona el primer elemento li dentro del header con id menu
log(document.querySelector('#menu li:last-child')); // selecciona el último elemento li dentro del header con id menu
