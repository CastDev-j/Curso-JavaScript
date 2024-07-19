// Templates HTML con JavaScript

const cardContent = [
    {
        title: 'Tecnología',
        img: 'https://via.placeholder.com/200x200'
    },
    {
        title: 'Animales',
        img: 'https://via.placeholder.com/200x200'
    },
    {
        title: 'Arquitectura',
        img: 'https://via.placeholder.com/200x200'
    },
    {
        title: 'Gente',
        img: 'https://via.placeholder.com/200x200'
    },
    {
        title: 'Naturaleza',
        img: 'https://via.placeholder.com/200x200'
    }];



const $cards = document.querySelector('.cards');

const $template = document.querySelector('#template-card').content;

const $fragment = document.createDocumentFragment();


cardContent.forEach(el => {
    const $img = $template.querySelector('img');
    const $figcaption = $template.querySelector('figcaption');

    $img.src = el.img;
    $img.alt = el.title;

    $figcaption.textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);