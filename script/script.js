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
		for (let prop of tasks) {
			section.innerHTML += `<div>
			eae</div>`
		}
	}

}
//obtive valores do html, configurei o modal, criei uma lista que recebera objetos, e instanciei uma funçao que verificas e existem valores nos inputs, crie uma objeto, o adiciona na lista, logo apos, tentei iterar com for of sobre os indices e as chaves dos abjetos, entretanto obtive um erro justamente por conta do iterador, o elemnto esta sendo adicionado com base no indice da array.

//lista sera o database do projeto, ela recebera uma sequencia de objetos contendo as tasks que serao exibidos no DOM.
