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


const tasks = [];


function addtask() {
  let input = document.querySelector("#input").value;
  let time= document.querySelector(".hour").value;
  if (input && time){
    const objeto= {task:String(input), hour: time};

    tasks.push(objeto);

    console.log(JSON.stringify(tasks, null, 2));
  }
}
