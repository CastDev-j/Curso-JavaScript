// Modificando elementos de la forma antigua JS

const $cards = document.querySelector(".cards");

const $newCard = document.createElement("figure");
$newCard.classList.add("card")
$newCard.innerHTML = `
    <img src="https://via.placeholder.com/200x200" alt="Tecnología">
    <figcaption>Tecnología</figcaption>
`;

// $cards.replaceChild($newCard, $cards.children[2]); // Reemplaza el tercer elemento 
// $cards.insertBefore($newCard, $cards.firstElementChild); // Inserta el nuevo elemento antes del primer elemento
// $cards.removeChild($cards.lastElementChild); // Elimina el último elemento
$cards.appendChild($newCard); // Agrega el nuevo elemento al final

const cloneCards = $cards.cloneNode(true);
document.body.appendChild(cloneCards); // Agrega el clon de la tarjeta al final del body