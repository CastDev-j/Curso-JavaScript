export default function bolita(canva, radio, color, up, down, left, right) {


    let d = document;

    up = d.getElementById(up);
    down = d.getElementById(down);
    left = d.getElementById(left);
    right = d.getElementById(right);



    canva = d.querySelector(canva);
    let x = radio + 5;
    let y = radio + 5;
    let dx = 10;
    let dy = 10;

    function dibujar() {
        let ctx = canva.getContext('2d');
        ctx.clearRect(0, 0, canva.width, canva.height);
        ctx.beginPath();
        ctx.arc(x, y, radio, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }

    dibujar();


    let moveUp = () => {
        y -= (y < radio + radio/2) ? 0 : dy;
        up.classList.add('active');
    }
    let moveDown = () => {
        y += (y > canva.height - radio - radio/2) ? 0 : dy;
        down.classList.add('active');
    }
    let moveLeft = () => {
        x -= (x < radio + radio/2) ? 0 : dx;
        left.classList.add('active');
    }
    let moveRight = () => {
        x += (x > canva.width - radio - radio/2) ? 0 : dx;
        right.classList.add('active');
    }

    d.addEventListener('keydown', function (e) {
        if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') moveLeft();
        else if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') moveRight();
        else if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') moveUp();
        else if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') moveDown();

        dibujar();
    });

    d.addEventListener('keyup', function (e) {
        up.classList.remove('active');
        down.classList.remove('active');
        left.classList.remove('active');
        right.classList.remove('active');
    })

}