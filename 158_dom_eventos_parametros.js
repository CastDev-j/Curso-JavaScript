//Parametros de los eventos en el DOM y remover eventos





//Se puede remover un evento creado si se necesita
let $botonMultiple = document.getElementById('boton-multiple');
let $campoSaludo = document.getElementById('saludo');

let formatValue = (nombre) => `Hola ${nombre}`;

let removeText = (el) => el.textContent = ''; 

let writeEffect = (el, content) => content.split('')
                                .forEach((char, index) => {
                                    setTimeout(() => {
                                        el.textContent += char;
                                    }, index * 50 + 100);
                                });

let replaceText = (el, value = 'Desconocid@!') => {
    removeText(el);
    writeEffect(el, formatValue(value));
}

$botonMultiple.addEventListener('click', () => replaceText($campoSaludo, 'Juanma'));



// evento que solo se ejecuta una vez

let $joke = document.getElementById('joke');

let tellJoke = (e) => {
    alert('¿Qué le dice un jardinero a otro jardinero? ¡Eres un rastrero!');
    $joke.removeEventListener(e.type, tellJoke);
    $joke.setAttribute('disabled', true);
};

$joke.addEventListener('click', tellJoke);