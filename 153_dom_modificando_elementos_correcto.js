// Modificar elementos del DOM forma actualizada

const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $cards = document.querySelector(".cards");

$figure.classList.add("card");

const query = [
    { img: "https://via.placeholder.com/200x200", title: "Animals" },
    { img: "https://via.placeholder.com/200x200", title: "Tech" },
    { img: "https://via.placeholder.com/200x200", title: "People" },
    { img: "https://via.placeholder.com/200x200", title: "Nature" },
    { img: "https://via.placeholder.com/200x200", title: "Food" },
    { img: "https://via.placeholder.com/200x200", title: "Sports" },
    { img: "https://via.placeholder.com/200x200", title: "Travel" },
    { img: "https://via.placeholder.com/200x200", title: "Music" },
    { img: "https://via.placeholder.com/200x200", title: "Fashion" },
    { img: "https://via.placeholder.com/200x200", title: "Art" },
    { img: "https://via.placeholder.com/200x200", title: "Books" },
    { img: "https://via.placeholder.com/200x200", title: "Movies" },
    { img: "https://via.placeholder.com/200x200", title: "Nature" }

];

const $fragment = document.createDocumentFragment();

query.forEach(el =>{
    $img.setAttribute("src", el.img);
    $img.setAttribute("alt", el.title);

    $figcaption.textContent = el.title;

    $figure.insertAdjacentElement("afterbegin", $img);
    $figure.insertAdjacentElement("beforeend", $figcaption);

    $fragment.appendChild($figure.cloneNode(true));
})

console.log($fragment);

$cards.appendChild($fragment);  