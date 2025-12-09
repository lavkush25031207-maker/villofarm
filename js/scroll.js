const parent = document.querySelector(".feed-parent");
const btnLeft = document.querySelector(".scroll-left");
const btnRight = document.querySelector(".scroll-right");

// Kitna scroll karna hai (card width ke barabar)
let scrollAmount = 400; // You can adjust

btnRight.addEventListener("click", function () {
    parent.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

btnLeft.addEventListener("click", function () {
    parent.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});
