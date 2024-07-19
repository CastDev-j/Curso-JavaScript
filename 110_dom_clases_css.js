// Clases CSS en el DOM con JavaScript

let $card = document.querySelector('#que-es');

console.log($card);

$card.classList.add('active');

console.log($card.classList);

setTimeout(() => {
    // $card.classList.toggle('active');
    // $card.classList.toggle('unactive');

    $card.classList.replace('active', 'unactive');

    console.log($card.classList);
}, 1000);

setTimeout(() => {
    // $card.classList.toggle('active');
    // $card.classList.toggle('unactive');

    $card.classList.replace('unactive', 'active');

    console.log($card.classList);
}, 2000);



