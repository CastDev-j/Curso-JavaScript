//Dom traversing en JS

// el DOM es un arbol de nodos, y cada nodo es un objeto
// hay varios metodos para navegar por el DOM

// Nodos del DOM principales

// 1. Elementos HTML
// 2. Atributos
// 3. Texto dentro de los elementos
// 4. Comentarios
// 5. Documento


const $cards = document.querySelector(".cards");

// mostrar las cards
console.log($cards);

// mostrar los hijos de las cards osea cada card
console.log($cards.children);

// mostrar el primer hijo de las cards
console.log($cards.firstElementChild.outerHTML);

// mostrar el ultimo hijo de las cards
console.log($cards.lastElementChild.outerHTML);

// mostrar el elemento anterior al elemento cards
console.log($cards.previousElementSibling);

// mostrar el elemento siguiente al elemento cards
console.log($cards.nextElementSibling);

// mostrar el padre mas cercano al elemento cards
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
