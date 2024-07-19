// Estilos y Variables CSS en JavaScript

let $parrafo = document.getElementById('que-es');
let log = console.log;

log($parrafo);

$parrafo.style.backgroundColor = 'rgb(230 230 230)';
$parrafo.style.padding = '20px';
$parrafo.style.borderRadius = '10px';
$parrafo.style.margin = '20px 0px';
$parrafo.style.fontSize = '14px';
$parrafo.style.color = 'rgba(74, 74, 74, 1)';
$parrafo.style.fontWeight = '600';

$parrafo.style.setProperty('text-transform', 'lowercase');

log(getComputedStyle($parrafo).getPropertyValue('font-size'));

// Variables CSS

const $html = document.documentElement;
const $body = document.body;

let varProperty = ['--color-primario', '--color-secundario', '--color-terciario'];
let paletteOne = ['f00' ,'0f0' ,'00f']
let paletteTwo = ['ff0' ,'f0f' ,'0ff']

varProperty.forEach((el, i) => {
    log('Original: ',getComputedStyle($html).getPropertyValue(el));
    $html.style.setProperty(el, `#${paletteTwo[i]}`);
    log('Modificado: ',getComputedStyle($html).getPropertyValue(el));
});
