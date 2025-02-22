const Button = document.querySelector(".button");
const Modal = document.querySelector(".modal");
const CloseModal = document.querySelector(".close"); const inputTask = document.querySelector(".inputTask");const inputHour = document.querySelector(".inputHour");

Button.addEventListener("click", () => {
	Modal.style.display = "flex";
})

CloseModal.addEventListener("click", () => {
	Modal.style.display = "none";
})
const tasks= [1,2,3,4,5]

console.log(tasks)




//lista sera o database do projeto, ela recebera uma sequencia de objetos contendo as tasks que serao exibidos no DOM.
