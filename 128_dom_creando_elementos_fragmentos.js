// Creando elementos y fragmentos con JavaScript

// creando elementos con JavaScript

let $figure = document.createElement('figure');
$figure.classList.add('card'); 

let $img = document.createElement('img');
$img.setAttribute('src', 'https://via.placeholder.com/200x200');
$img.setAttribute('alt', 'Pets');

let $figcaption = document.createElement('figcaption'); 
$figcaption.textContent = 'Pets';

const $cards = document.querySelector('.cards');

$figure.appendChild($img);
$figure.appendChild($figcaption);



// Creando elementos con fragmentos

let pets = ['dog', 'cat', 'fish', 'rabbit', 'turtle'];

let $ul = document.createElement('ul');

let $h2 = document.createElement('h2');
$h2.textContent = 'Pets';

$ul.appendChild($h2);
pets.forEach(el => {
    let $li = document.createElement('li');
    $li.textContent = el;
    $ul.appendChild($li);
});

// Otro ejemplo
let continentes = ['Africa', 'America', 'Asia', 'Europa', 'Oceania'];

let $ul2 = document.createElement('ul');
$ul2.innerHTML = `<h2>Continentes</h2>`;
continentes.forEach(el =>{
    $ul2.innerHTML += `<li>${el}</li>`;
})

console.log($ul2);

// insersiones
$cards.appendChild($figure);
//document.querySelector('#menu').outerHTML = $ul.outerHTML; // reemplaza el contenido del menu por la lista de pets
document.querySelector('#menu').innerHTML = $ul2.outerHTML; // reemplaza el contenido del menu por la lista de pets

// Insertar con fragmentos

let nums = Array.from({ length: 1000 }, (_, i) => i + 1);

let $ul3 = document.createElement('ul');
$ul3.classList.add('list');

let $h3 = document.createElement('h3');
$h3.classList.add('title');
$h3.textContent = `Números del ${nums[0]} al ${nums[nums.length - 1]}`;

let $fragment = document.createDocumentFragment();

nums.forEach(el => {
    let $li = document.createElement('li');
    $li.textContent = el;

    $li.addEventListener('click', () => {
        console.log(`Este es el número: ${el}`);
    });

    $fragment.appendChild($li);
});

$ul3.appendChild($h3);
$ul3.appendChild($fragment);

document.body.appendChild($ul3);