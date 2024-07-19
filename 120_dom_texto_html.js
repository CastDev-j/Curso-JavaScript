// Texto y HTML en el DOM con JavaScript

const $queEs = document.getElementById("que-es");

let text = `
    <p>
        El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
        Este proporciona una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>`;

// innerText: muestra solo el texto, 
// provoca que las etiquetas HTML se muestren como texto plano.
$queEs.innerText = text;

// textContent: muestra solo el texto,
// permite que las etiquetas HTML se muestren como texto plano.
// ignora los saltos de línea y espacios en blanco.

$queEs.textContent = text;

// innerHTML: muestra el texto y el HTML,
// permite que las etiquetas HTML se muestren como HTML.

$queEs.innerHTML = text;

// outerHTML: muestra el texto y el HTML,
// permite que las etiquetas HTML se muestren como HTML.
// muestra el elemento que contiene el texto y el HTML.

$queEs.outerHTML = text; // reenplaza el contenido del elemento por el texto y el HTML. 

// Nota: innerText y textContent son más seguros que innerHTML y outerHTML,