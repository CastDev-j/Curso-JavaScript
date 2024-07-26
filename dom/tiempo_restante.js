let d = document;

export default function tiempoRestante(id) {
    id = d.getElementById(id);
    let year = new Date('2025-01-01').getTime();

    let refreshTime = () => {
        let date = new Date().getTime();
        let countdown = year - date;

        let days = Math.floor(countdown / (1000 * 60 * 60 * 24));
        let hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((countdown % (1000 * 60)) / 1000);

        
        id.innerHTML = `<span class="text">${days} días, </span> <span class="text">${hours} horas, </span><span class="text">${minutes} minutos y </span> <span class="text">${seconds} segundos</span>`;
    }

    setInterval(refreshTime, 1000);

}
