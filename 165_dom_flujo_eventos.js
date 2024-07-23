// Flujo de eventos (Burbuja y Captura) con JavaScript

let $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
}
 
// $divsEventos.forEach((div) => div.addEventListener("click", flujoEventos, true));// false es el valor por defecto
//                                                                                   // true invierte el flujo de eventos


$divsEventos.forEach((div) => div.addEventListener("click", flujoEventos, {
    capture: false, // false es el valor por defecto, true invierte el flujo de eventos
    once: true // true es para que el evento se ejecute una sola vez // false es el valor por defecto
}));
