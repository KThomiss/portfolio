const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerBtn = document.querySelector(".hamburger-btn");

hamburgerBtn.onclick = function() {
    hamburgerMenu.classList.toggle("show");
}
