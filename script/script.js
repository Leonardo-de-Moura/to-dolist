const Button = document.querySelector(".button");
const Modal = document.querySelector(".modal");
const CloseModal = document.querySelector(".close");
let InputTask = document.querySelector(".inputTask");
let InputHour = document.querySelector(".inputHour");
const section = document.querySelector("section")
Button.addEventListener("click", () => {
	Modal.style.display = "flex";
})

CloseModal.addEventListener("click", () => {
	Modal.style.display = "none";
})
const tasks = []


function AddTask() {
	if (InputTask && InputHour) {
		let object = {
			task: InputTask.value,
			hour: InputHour.value
		}
		tasks.push(object)
		console.log(tasks)
	}

}
