function openmodal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";
}
function closemodal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function addtask() {
  let input = document.querySelector("#input").value;
  let time = document.querySelector(".hour").value;

  if (input && time) {
    const objeto = { task: input, hour: time };
    let task = (document.querySelector(
      ".container"
    ).innerHTML += `  <div class="tasks" onclick="marked(this)">
        <img class="img" src="assets/rec.png" />
        <p>${input}</p>
        <span>${time}</span>
        <button onclick="this.parentElement.remove()">
          <img src="assets/trash.png" />
        </button>
      </div>`);

  }
}
function marked(task) {
  let img = task.querySelector(".img");
  task.classList.toggle("marked");
  img.src = task.classList.contains("marked") ? "assets/check-mark.png" : "assets/rec.png";
}
function dates() {
  let nowdate = new Date();
  const date = (document.querySelector(".time").innerText = nowdate);
}
dates();
