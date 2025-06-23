//implementar a logica de inserçao, capturando os valores do input do modal.

const button = document.querySelector(".button");
const input = document.querySelector("#input");
let main = document.querySelector(".cont-tasks");
function add() {
	if (input.value == "") {
		console.log(1)
	}
	else {//caminho de decisao que vai implementar a logica
		console.log(2)
		main.innerHTML += `<div class="task-container">
			<img src="assets/circle-outline.png" alt="">
			<p>${input.value}</p>
		</div>`
	}
	input.value = "";
const imagens = document.querySelectorAll('img');

imagens.forEach((img) => {
  img.addEventListener('click', () => {
    img.src = 'assets/check-circle-outline.png';
  });
});
}

