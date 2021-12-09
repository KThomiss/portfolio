const changes = document.querySelectorAll(".changes");
const reveal = document.querySelectorAll(".reveal");

for (let i = 0; i < changes.length; i++) {
    changes[i].addEventListener("mouseover", function() {
        reveal.forEach(function(revealItem) {
            revealItem.style.display = "block";
        })
    })
    changes[i].addEventListener("mouseout", function() {
        reveal.forEach(function(revealItem) {
            revealItem.style.display = "none";
        })
    })
}
