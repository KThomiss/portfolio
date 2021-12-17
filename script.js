const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerBtn = document.querySelector(".hamburger-btn");

hamburgerBtn.onclick = function() {
    hamburgerMenu.classList.toggle("show");
}

const onMouseOver = document.querySelector(".toTop");
const arrowToTop = document.querySelector(".arrowToTop");

onMouseOver.addEventListener("mouseover", function(event) {
    event.target.style.display = "none";
    arrowToTop.style.display = "block";

    setTimeout(function() {
        event.target.style.display = "block";
        arrowToTop.style.display = "none";
    }, 2000);
})
