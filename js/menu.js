
var acc = document.getElementsByClassName("pizzasection");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var pizzalistitemall = this.nextElementSibling;
        if (pizzalistitemall.style.display === "block") {
            pizzalistitemall.style.display = "none";
        } else {
            pizzalistitemall.style.display = "block"
        }
    });
}


