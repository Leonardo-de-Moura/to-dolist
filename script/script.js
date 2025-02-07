const modal = document.querySelector(".modal");
const fecharmodal = document.querySelector(".fecharmodal");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  modal.style.display = "flex";
});

fecharmodal.addEventListener("click", () => {
  modal.style.display = "none";
});

function addtask() {
  let input = document.querySelector("#input").value;
  let time = document.querySelector(".hour").value;
  if (input && time) {
    const objeto = { task: input, hour: time };
    console.log(JSON.stringify(objeto));
    let task = (document.querySelector(
      ".container"
    ).innerHTML += `<div class="tasks">
        <img src="assets/rec.png" alt="" />
        <p>${objeto.task}</p>
        <span>${objeto.hour}</span>
      </div>`);
      
  }
  
}
