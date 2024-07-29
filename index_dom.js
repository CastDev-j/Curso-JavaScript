import hamburgerMenu  from "./dom/menu_hamburguesa.js";
import relojAlarma from "./dom/reloj_alarma.js";
import bolita from "./dom/canvas_bolita.js";
import comandosPersonalizados from "./dom/comandos_personalizados.js";
import tiempoRestante from "./dom/tiempo_restante.js";
import scrollTopButton from "./dom/scroll_top.js";
import darkLightMode from "./dom/dark_light_mode.js";
import responsiveDesign from "./dom/responsive_design.js";
import responsiveForm from "./dom/responsive_form.js";

let d = document;
d.addEventListener("DOMContentLoaded", function (e) {
    hamburgerMenu('#deployer', '#hamburguer-menu', '#menu li a');
    relojAlarma('#clock', '#start-clock', '#stop-clock', '#start-alarm', '#stop-alarm', 'assets/alarm.mp3');
    bolita('#canvas', 20, 'blue',  'up', 'down', 'left', 'right');
    comandosPersonalizados();
    tiempoRestante('time-left');
    scrollTopButton('.scroll-top-btn');
    responsiveDesign('#section-4 section');
    responsiveForm('form');
});

darkLightMode('.label-dark-light', localStorage.getItem('darkMode'));
