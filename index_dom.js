import hamburgerMenu  from "./dom/menu_hamburguesa.js";
import relojAlarma from "./dom/reloj_alarma.js";

let d = document;
d.addEventListener("DOMContentLoaded", function () {
    hamburgerMenu('#deployer', '#hamburguer-menu', '#menu li a');
    relojAlarma('#clock', '#start-clock', '#stop-clock', '#start-alarm', '#stop-alarm', 'assets/alarm.mp3');
});