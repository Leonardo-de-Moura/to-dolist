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

const tasks = [];
const sections = Array.from(document.querySelectorAll("section"));

function AddTask() {
	if (InputTask.value.trim() !== "" && InputHour.value.trim() !== "") {
		let object = {
			task: InputTask.value,
			hour: InputHour.value
		};


		let duplicate = tasks.some(t => t.task === object.task && t.hour === object.hour);
		if (!duplicate) {
			tasks.push(object);
		}

	}
	InputHour.value = "";
	InputTask.value = "";


}

function Show() {

	if (tasks.length > 0) {
		let section = sections[0];
		section.innerHTML = "";


		for (let obj of tasks) {
			let taskDiv = document.createElement("div");
			taskDiv.classList.add("task");

			taskDiv.innerHTML = `
				<div  class="check"><img src="assets/rec.png" alt=""></div>
				<div class="task-name">${obj.task}</div>
				<div class="hour-task">${obj.hour}</div>
				<div onclick="Delete()" class="trash"><img src="assets/trash.png" alt=""></div>
			`;

			section.appendChild(taskDiv);
		}
	}

}
function Delete() {
	let trash = document.querySelector(".trash");
	let taskDiv = document.quer("div");
	trash.addEventListener("click", () => {
		taskDiv.remove()
	})

}
