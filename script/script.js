"use strict";

const modal = document.querySelector(".modal");
console.log(modal);
const fecharmodal = document.querySelector(".fecharmodal");
console.log(fecharmodal);
const button = document.querySelector(".button");
console.log(button);

button.addEventListener("click", () => {
  modal.style.display = "flex";
});

fecharmodal.addEventListener("click", () => {
  modal.style.display = "none";
});

function addtask() {
  let input = document.querySelector("#input").value;
  
}
