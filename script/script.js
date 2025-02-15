const buttonOpenModal = document.querySelector(".button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close"); const buttonSubmit = document.querySelector(".button-modal");

buttonOpenModal.addEventListener("click", () => {
	modal.style.display = "flex";
})

closeModal.addEventListener("click", () => {
	modal.style.display = "none";
})
buttonSubmit.addEventListener("click",
	function addTask() {


		const inputTask = document.querySelector(".inputTask").value;
		const inputHour = document.querySelector(".inputHour").value;
		const section =document.querySelector("section")


		if (inputTask && inputHour) {
			const task = {
				taskName: inputTask,
				taskHour: inputHour
			}
			section.innerHTML += `
			  <div class="task">
			<div class="check">
			  <img src="assets/rec.png" alt="">
			</div>
			<div class="task-name">${task.taskName}</div>
			<div class="hour-task">${task.taskHour}</div>
			<div class="trash"><img src="assets/trash.png" alt=""></div>
		  </div>`
		}
	}
)