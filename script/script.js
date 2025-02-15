const button = document.querySelector(".button")
const modal = document.querySelector(".modal")
const fechar = document.querySelector(".close")
button.addEventListener("click", () => {
	modal.style.display = "flex"
})

fechar.addEventListener("click", () => {
	modal.style.display = "none"
})