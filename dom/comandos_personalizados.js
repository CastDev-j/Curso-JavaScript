let d = document;

export default function comandosPersonalizados(e) {

    // key = tecla presionada
    // keyCode = codigo de la tecla presionada
    // code = codigo de la tecla presionada

    d.addEventListener('keydown', function (e) {
        if (e.key === 'a') {
            console.log('Presionaste la tecla a');
        }

        if (e.key === 'p' && e.altKey) {
            alert('Presionaste la tecla alt + p');
        }
    });

    d.addEventListener('keyup', function (e) {
        if (e.key === 's') {
            console.log('Soltaste la tecla s');
        }
    });

    d.addEventListener('keypress', function (e) {
        if (e.key === 'd') {
            console.log('Presionaste y soltaste la tecla d');
        }
    });





}