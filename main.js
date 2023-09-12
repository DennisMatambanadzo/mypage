const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navBar = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navBar.classList.toggle("active");
})