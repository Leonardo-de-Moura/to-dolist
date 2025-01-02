"use strict"
function iniciar() {
    const button = document.querySelector(".button")
    button.addEventListener("click", () => {
        window.location.href = "page.html"
    })
}
