// Delegacion de eventos con javascript


document.addEventListener("click", (e) => {
    if (e.target.matches(".eventos-flujo a")) {
        console.log(`Click en a ${e.target.className}`);
        e.preventDefault();
    }

    if (e.target.matches(".eventos-flujo div")) {
        console.log(`Click en div ${e.target.className}`);
    }
})


