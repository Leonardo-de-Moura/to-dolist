const Button = document.querySelector(".button");
const Modal = document.querySelector(".modal");
const CloseModal = document.querySelector(".close");
let InputTask = document.querySelector(".inputTask");
let InputHour = document.querySelector(".inputHour");

Button.addEventListener("click", () => {
	Modal.style.display = "flex";
})

CloseModal.addEventListener("click", () => {
	Modal.style.display = "none";
})
const tasks = []


function AddTask() {
	if (InputTask.value.trim() !== "" && InputHour.value.trim() !== "") {
		let object = {
			task: InputTask.value,
			hour: InputHour.value
		}
		tasks.push(object)
		
	}
	InputHour.value = ""
	InputTask.value = ""
	//esta funcao adiciona um objeto na array tasks, e limpa os campos de input.
}
function ShowTask(){
	for (let obj of tasks) {
			document.querySelector(section) = `<div class="task">
			<div class="check"><img src="assets/rec.png" alt=""></div>
			<div class="task-name">${obj.InputTask}</div>
			<div class="hour-task">${obj.InputHour}</div>
			<div class="trash"><img src="assets/trash.png" alt=""></div>
		  </div>`
	
	}
}
