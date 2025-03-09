const Button = document.querySelector(".button");
const Modal = document.querySelector(".modal");
const CloseModal = document.querySelector(".close");
let InputTask = document.querySelector(".inputTask");
let InputHour = document.querySelector(".inputHour");

Button.addEventListener("click", () => {
	Modal.style.display = "flex";
});

CloseModal.addEventListener("click", () => {
	Modal.style.display = "none";
});


