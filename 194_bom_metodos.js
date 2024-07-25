// Metodos del BOM(Browser Object Model) - Parte 2 con javascript


// Ejemplo de método alert
// console.log(alert('Hola Mundo')); // muestra un mensaje en una ventana emergente

// Ejemplo de método confirm
// console.log(confirm('¿Estás seguro de querer salir de esta página?')); // devuelve true o false

// Ejemplo de método prompt
// console.log(prompt('¿Cuál es tu nombre?')); // devuelve el valor introducido por el usuario

// Ejemplo de método print
// print(); // se utiliza en el navegador para imprimir la página

// Ejemplo de método open
// open('https://www.google.com'); // abre una nueva ventana con la url indicada


// Ejemplo de los metodos

const $btnAbrir = document.getElementById('abrir');
const $btnCerrar = document.getElementById('cerrar');
const $btnImprimir = document.getElementById('imprimir');


const $btnBox = document.getElementById('bom-box');

let ventana;
$btnBox.addEventListener('click', (e) => {
    if (e.target === $btnAbrir) {
        ventana = open('https://www.google.com'); // puede ser bloqueado por el navegador si se abre sin una interacción previa
    }
    if (e.target === $btnCerrar) {
        ventana.close(); // cierra la ventana abierta, puede ser bloqueado por el navegador
    }
    if (e.target === $btnImprimir) {
        print();
    }
});
