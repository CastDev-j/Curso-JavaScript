//Manejadores de eventos en el DOM

let $boton = document.getElementById('boton');
$boton.onclick = ()=>{
    console.log('click semantico');
}

let correr = ()=>{
    console.log('corriendo');
}

console.log($boton);

// con manejadores de eventos multiples

let $botonMultiple = document.getElementById('boton-multiple');

// Con esto se puede agregar multiples eventos a un solo tipo de evento
$botonMultiple.addEventListener('click', correr);
$botonMultiple.addEventListener('click', ()=>{
    console.log('saltando');
});
//Se puede remover un evento creado si se necesita
$botonMultiple.removeEventListener('click', correr);