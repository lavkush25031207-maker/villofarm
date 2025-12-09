// Select Elements
const manu = document.querySelector(".menu");
const closer = document.querySelector(".closer");
const nav = document.querySelector(".primary");

// Open Menu
manu.onclick = () => {
    nav.classList.remove("hide");
    nav.classList.add("show");
};

// Close Menu
closer.onclick = () => {
    nav.classList.remove("show");
    nav.classList.add("hide");
};

// KNOW MORE Toggle (if used somewhere else)
const know_more = document.querySelector(".know-more");
const words = document.querySelector(".more-word");

if (know_more && words) {
    know_more.onclick = () => {
        words.classList.toggle("show");
        words.classList.toggle("hide");
    };
}
