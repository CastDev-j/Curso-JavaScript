// Dom: stopPropagation, preventDefault con JS

// stopPropagation: Detiene la propagación de eventos en el DOM.

// preventDefault: Previene el comportamiento por defecto de un evento.


let $divsEventos = document.querySelectorAll(".eventos-flujo div");

console.log($divsEventos);

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    e.stopPropagation();
}

$divsEventos.forEach((div) => {
    div.addEventListener("click", flujoEventos, false);
});

let $enlace = document.querySelector(".eventos-flujo a");

$enlace.addEventListener('click', (e) => {
    console.log("Hola te saluda el enlace");
    e.preventDefault();
});