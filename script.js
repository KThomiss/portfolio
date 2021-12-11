const changes = document.querySelectorAll("h5");
const reveal = document.querySelectorAll("#mouseOverOut");

for (let i = 0; i < changes.length; i++) {
    changes[i].addEventListener("mouseover", revealChanges);
}

function revealChanges() {
    for (let i = 0; i < reveal.length; i++) {
        reveal[i].style.display = "block";
    }
}

for (let i = 0; i < changes.length; i++) {
    changes[i].addEventListener("mouseover", function () {
        reveal.forEach(function (revealItem) {
            revealItem.style.display = "block";
        })
    })
    changes[i].addEventListener("mouseout", function () {
        reveal.forEach(function (revealItem) {
            revealItem.style.display = "none";
        })
    })
}



//event.stopPropagation();
