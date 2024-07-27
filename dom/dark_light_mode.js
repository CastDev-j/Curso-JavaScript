
let d = document;
export default function darkLightMode(btn, darkMode = false) {
    btn = document.querySelector(btn);

    d.addEventListener("click", (e) => {
        if (e.target === btn) {

            if (darkMode) {
                setLightMode();
                darkMode = false;
                btn.innerHTML = "Modo Oscuro";
            } else {
                setDarkMode();
                darkMode = true;
                btn.innerHTML = "Modo Claro";
            }
        }
    })
    


}


let changeRoot = document.documentElement.style

function setLightMode() {
    changeRoot.setProperty('--color-primario', 'rgb(58, 58, 58)');
    changeRoot.setProperty('--color-primario-ultra-claro', 'rgba(0, 0, 0, 0.1)');
    changeRoot.setProperty('--color-secundario', 'rgb(255, 255, 255)');
    changeRoot.setProperty('--color-terciario', 'rgba(184, 184, 184, 0.5)');
    changeRoot.setProperty('--color-terciario-claro', 'rgba(184, 184, 184, 0.2)');
}

function setDarkMode() {
    changeRoot.setProperty('--color-primario', 'rgb(255, 255, 255)');
    changeRoot.setProperty('--color-primario-claro', 'rgba(255, 255, 255, 0.5)');
    changeRoot.setProperty('--color-primario-ultra-claro', 'rgba(255, 255, 255, 0.1)');
    changeRoot.setProperty('--color-secundario', 'rgb(58, 58, 58)');
    changeRoot.setProperty('--color-terciario', 'rgba(100, 100, 100, 0.5)');
    changeRoot.setProperty('--color-terciario-claro', 'rgba(100, 100, 100, 0.2)');
}