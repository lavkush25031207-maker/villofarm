var readbtns = document.querySelectorAll(".read-more");
var readtxts = document.querySelectorAll(".read-data");

readbtns.forEach((btn, index) => {
    btn.onclick = function () {
        readtxts[index].classList.toggle("hide");
        readtxts[index].classList.toggle("show");
    };
});
