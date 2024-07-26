export default function hamburgerMenu(panelBtn, panel, menuItems) {
    let d = document;
    let time = new Date();
    console.log(time);
    panelBtn = d.querySelector(panelBtn);
    panel = d.querySelector(panel);

    
    let deployMenu = function () {
        panel.classList.toggle('deployed');
        panelBtn.classList.toggle('deployed');
    };
    
    
    d.addEventListener("click", function (e) {
        if (e.target === panelBtn || e.target.matches(menuItems)) deployMenu();
    });
}

