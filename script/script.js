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
	() => {


		const inputTask = document.querySelector(".inputTask").value;
		const inputHour = document.querySelector(".inputHour").value;
		const section = document.querySelector("section")


		if (inputTask && inputHour) {
			const task = {
				taskName: inputTask,
				taskHour: inputHour
			}
			section.innerHTML += `
			<div class="task">
			<div class="check">
			<img class="img" src="assets/rec.png" alt="">
			</div>
			<div class="task-name">${task.taskName}</div>
			<div class="hour-task">${task.taskHour}</div>
			<div class="trash"><img class="trash-img" src="assets/trash.png" alt=""></div>
			</div>`;

			document.querySelector(".inputTask").value = "";
			document.querySelector(".inputHour").value = "";
		}
		const check = document.querySelector(".img"); const task_name = document.querySelector(".task-name");
		const task_hour = document.querySelector(".hour-task");
		check.addEventListener("click", () => {
			check.src = "assets/x.png"
			task_name.classList.add("marked");
			task_hour.classList.add("marked");
		})
		const task = document.querySelector(".task")
		const del = document.querySelector(".trash-img")
		del.addEventListener("click", () => {
			task.classList.add("delete");
			const idForDelete= document.querySelector(".delete")
			idForDelete.remove()
		})
	}
)


//editar tarefa