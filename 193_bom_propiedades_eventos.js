// Propiedades y eventos del BOM (Browser Object Model) - Parte 1 con javascript

 
// Propiedades del BOM
console.log(window.innerHeight); // 768 altura de la ventana

console.log(window.innerWidth); // 1366 anchura de la ventana

console.log(window.outerHeight); // 768 altura de la ventana incluyendo la barra de navegación

console.log(window.outerWidth); // 1366 anchura de la ventana incluyendo la barra de navegación


// Eventos del BOM - Eventos de la ventana

let altura = document.querySelectorAll('.height');
let anchura = document.querySelectorAll('.width');

let setSizes = function(){
    altura[0].textContent = window.innerHeight;
    anchura[0].textContent = window.innerWidth;

    altura[1].textContent = window.outerHeight;
    anchura[1].textContent = window.outerWidth;
};

setSizes();
window.addEventListener('resize', setSizes);


// Evento scroll del BOM

let scrollY = document.getElementById('scroll-y');
let scrollX = document.getElementById('scroll-x');
let setScroll = function(){
    scrollY.textContent = window.scrollY.toFixed(2);
    scrollX.textContent = window.scrollX.toFixed(2);
};

window.addEventListener('scroll', setScroll);

// Evento load del BOM

window.addEventListener('load', function(e){
    console.log('La página ha cargado completamente');
});

// Evento DomContentLoaded del BOM

window.addEventListener('DOMContentLoaded', function(e){
    console.log('El DOM ha cargado completamente');
});
