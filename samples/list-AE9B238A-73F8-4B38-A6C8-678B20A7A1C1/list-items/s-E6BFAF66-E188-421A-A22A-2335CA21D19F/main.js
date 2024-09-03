const res1 = document.querySelector("#res1");
const ctall = document.querySelector(".ctall");
window.addEventListener("resize", () => {
    res1.innerHTML = window.getComputedStyle(ctall).width;
}, false);
res1.innerHTML = window.getComputedStyle(ctall).width;

