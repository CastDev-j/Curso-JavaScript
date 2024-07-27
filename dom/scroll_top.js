let d = document;

export default function scrollTopButton(btn) {
    btn = d.querySelector(btn);

    d.addEventListener("scroll", (e) => {
        let scrollTop = d.documentElement.scrollTop;
        if (scrollTop > 300) {
            btn.classList.remove("hidden");
        } else {
            btn.classList.add("hidden");
        }
    });

    d.addEventListener("click", (e) => {
        if (e.target === btn) window.scrollTo(top,0);
        
    });
}