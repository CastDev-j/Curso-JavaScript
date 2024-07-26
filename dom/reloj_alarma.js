export default function relojAlarma(clockContainer, clockStarButton, clockStopButton, alarmStarButton, alarmStopButton) {
    let d = document;
    let clock;
    clockContainer = d.querySelector(clockContainer);

    let getTime = () => {
        let time = new Date();
        clockContainer.innerHTML = time.toLocaleTimeString();
    }


    clockStarButton = d.querySelector(clockStarButton);
    clockStopButton = d.querySelector(clockStopButton);
    alarmStarButton = d.querySelector(alarmStarButton);
    alarmStopButton = d.querySelector(alarmStopButton);



    d.addEventListener('click', (e) => {
        if (e.target === clockStarButton) {
            clockContainer.classList.add('active');
            clockStarButton.disabled = true;
            
            getTime();
            clock = setInterval(getTime, 1000);
        }

        if (e.target === clockStopButton) {
            clockContainer.classList.remove('active');
            clockStarButton.disabled = false;
            clearInterval(clock);
        }

        if (e.target === alarmStarButton) {
            let alarm = new Audio('assets/alarm.mp3');
            alarm.play();
            alarmStarButton.disabled = true;
        }

        if (e.target === alarmStopButton) {
            alarmStarButton.disabled = false;
        }
    });




}