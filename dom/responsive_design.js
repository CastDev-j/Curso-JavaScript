const d = document;
let isDesktop = window.innerWidth > 650;
  
const apiResponse = {
    maps: [
        // {
        //     text: 'Apaseo el Alto, Gto.',
        //     mobile: 'https://maps.app.goo.gl/3SwkE8XyG1kMQsyj6',
        //     desktop: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7475.68225442919!2d-100.654882457736!3d20.471717478611122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cb4adae30b457%3A0x2312f64f9865809d!2sApaseo%20el%20Alto%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1722192400960!5m2!1ses-419!2smx'
        // },
        // {
        //     text: 'Catedral de Celaya, Gto.',
        //     mobile: 'https://maps.app.goo.gl/8xG3R5HQJh2s6NfD9',
        //     desktop: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.4581702488377!2d-100.81584988564748!3d20.527800686301687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cbf6a3d4cb7df%3A0x7ff8d0292d838ec8!2sCatedral%20de%20Celaya!5e0!3m2!1ses-419!2smx!4v1622192400960!5m2!1ses-419!2smx'
        // },
        // {
        //     text: 'Parque Xochipilli, Celaya, Gto.',
        //     mobile: 'https://maps.app.goo.gl/Wz2yJ8zB12w6HbFd9',
        //     desktop: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.460314673858!2d-100.80993628564738!3d20.52754518630175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cbf6c1b6b95e7%3A0x1f87f7b2cfae98b3!2sParque%20Xochipilli!5e0!3m2!1ses-419!2smx!4v1622192500960!5m2!1ses-419!2smx'
        // }
    ],
    youtube: [
        // {
        //     text: 'Video de ejemplo',
        //     mobile: 'https://www.youtube.com/watch?v=16geDhp5Xmg&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=90',
        //     desktop: 'https://www.youtube.com/embed/16geDhp5Xmg?si=i6Q8mBCy9iyxbgzs'
        // }
    ]
};


const maps = (mobile, desktop, text) => {
    let a = d.createElement('a');
    a.href = mobile;
    a.textContent = text;

    let iframe = d.createElement('iframe');
    iframe.src = desktop;
    iframe.width = 650;
    iframe.height = 450;
    iframe.style.border = 0;
    iframe.allowfullscreen = '';
    iframe.loading = 'lazy';

    return [a, iframe];
}



const youtube = (mobile, desktop, text) => {
    let a = d.createElement('a');
    a.href = mobile;
    a.textContent = text;

    let iframe = d.createElement('iframe');
    iframe.src = desktop;
    iframe.width = 650;
    iframe.height = 450;
    iframe.style.border = 0;
    iframe.allowfullscreen = '';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    iframe.loading = 'lazy';

    return [a, iframe];
}

const getLinks = () => {
    let links = [];
    for (const format in apiResponse) {
        for (const number in apiResponse[format]) {
            console.log(number, format);
            let {text, mobile, desktop } = apiResponse[format][number];
            links.push(format === 'maps' ? maps(mobile, desktop, text) : youtube(mobile, desktop, text));
        }
    }
    return links;
}

const replaceContent = (container, fragment) => {
    container.innerHTML = '';
    container.appendChild(fragment);
}

const createContent = (e, container) => {
    let flagDesktop = window.innerWidth > 650;

    if (isDesktop != flagDesktop) {
        loadContent(container, flagDesktop);
        isDesktop = flagDesktop;
    }
}

const loadContent = (container, isDesktop) => {
    let fragment = d.createDocumentFragment();
    let contentSelector = isDesktop ? 1 : 0;
    let links = getLinks();

    for (const i of links) {
        fragment.appendChild(i[contentSelector]);
    }

    replaceContent(container, fragment);
}



export default function responsiveDesign(container) {
    container = d.querySelector(container);

    loadContent(container, isDesktop);

    window.addEventListener("resize", (e) => createContent(e, container));
}