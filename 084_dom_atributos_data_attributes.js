// Atributos data-Attribbutes en JavaScript
//
// Los atributos data-attributes nos permiten almacenar información adicional en nuestros elementos HTML.
// 
// Para acceder a estos atributos en JavaScript se hace de la siguiente manera:
//



console.log(document.documentElement.lang);

// Acceder a los atributos de la etiqueta html

let link = document.querySelector('.link-dom');

console.log(link.href);
console.log(link.getAttribute('href'));

// Establecer un nuevo valor

document.documentElement.lang = 'es';
document.documentElement.setAttribute('lang', 'es-MX');

// guardar en una variable 

const $linkDOM = document.querySelector('.link-dom');

$linkDOM.setAttribute('target', '_blank');
$linkDOM.setAttribute('rel', 'noopener');
$linkDOM.setAttribute('href', 'https://google.com');

// Verificar si un elemento tiene cierto atributo

console.log($linkDOM.hasAttribute('rel'));
// Eliminar un atributo
$linkDOM.removeAttribute('rel');
// Verificar si aun existe el atributo
console.log($linkDOM.hasAttribute('rel'));


// Data-Attributes

// Acceder a los data-attributes
console.log($linkDOM.getAttribute('data-description'));

// Agregar un nuevo data-attribute
$linkDOM.setAttribute('data-id', '1')

$linkDOM.setAttribute('data-date', '2024')

// Alterar el valor de un data-attribute

$linkDOM.setAttribute('data-id', '2')

// Acceder a los data-attributes
console.log($linkDOM.dataset);

