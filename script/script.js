function openmodal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";
}
function closemodal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}
function marked() {
  document.querySelector(".tasks").classList.add("marked");
  document.querySelector(".img").src = "assets/check-mark.png";
}
function addtask() {
  let input = document.querySelector("#input").value;
  let time = document.querySelector(".hour").value;
  if (input && time) {
    const objeto = { task: input, hour: time };
    let task = (document.querySelector(
      ".container"
    ).innerHTML += `<div onclick="marked()" class="tasks">
        <img class="img" src="assets/rec.png" alt="" />
        <p>${objeto.task}</p>
        <span>${objeto.hour}</span>
      </div>`);
  }
}
function dates(){
  let nowdate= new Date()
  const date= document.querySelector(".time").innerText=nowdate;
}
dates();
