let d = document;
let windowOpen;
let closeButton;

export default function responsiveForm(formSelector) {
    const form = d.querySelector(formSelector);
    closeButton = d.querySelector('.close-window');

    closeButton.disabled = true;

    form.addEventListener('submit', handleFormSubmit);
    d.addEventListener('click', handleDocumentClick);
}

function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formInputs = {};

    formData.forEach((value, key) => {
        formInputs[key] = value;
    });

    const { url, width, height } = formInputs;
    openWindow(url, width, height);
}

function handleDocumentClick(e) {
    if (e.target.matches('.close-window')) closeWindow();
    
}

function enableCloseButton() {
    closeButton.disabled = false;
}

function openWindow(url, width, height) {
    windowOpen = window.open(url, 'windowOpen', `width=${width}, height=${height}`);
    if (windowOpen) {
        enableCloseButton();
    } else {
        console.error('No se pudo abrir la ventana. Verifica que no esté bloqueada.');
    }
}

function closeWindow() {
    if (windowOpen && !windowOpen.closed) {
        windowOpen.close();
        closeButton.disabled = true;
    } else {
        console.error('No se pudo cerrar la ventana. Verifica que esté abierta y no haya sido bloqueada.');
    }
}
