//implementar a logica de inserçao, capturando os valores do input do modal.

let button = document.querySelector(".button");
let input = document.querySelector("#input");
button.addEventListener("click", ()=>{
	if (input.value==""){
		console.log(1)
}
	else{
		console.log(2)
		input.value="";
	}
}
)
