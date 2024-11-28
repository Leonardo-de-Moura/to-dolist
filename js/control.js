let contador = 0;
let input = document.getElementById('input');
let btn = document.getElementById('btn-add');
main = document.getElementById('area-list');
function addt() {
    //pegar o valor do input//
    let valorinput = input.value;
    if ((valorinput !== "") && (valorinput !== null) && (valorinput !== undefined)) {
        ++contador;
        let novoitem = `<div id=${contador} class="item">
            <div onclick="marcar(${contador})" class="item-icon">
                <img  id="icone_${contador}" class="img" style="margin-left: 15px;"
                src="./assets/circle-outline.png" alt="">
            </div>
            <div onclick="marcar(${contador})" class="item-name">
                ${valorinput}
            </div>
            <div class="item-button">
                <button onclick="deletar(${contador})" class="delete">
                    <img class="img" src="./assets/delete.png" alt="">
                </button>
            </div>
        </div>`;
        //adicionar novo item
        main.innerHTML += novoitem;
        //zerar o campo input
        input.value = "";
        input.focus();
    }
}
input.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        btn.click();
    }
});
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
function marcar(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);
    if (classe == "item") {
        item.classList.add('clicado');
        var icone = document.getElementById('icone_' + id);
        icone.removeAttribute('src');
        icone.setAttribute('src', './assets/check-circle.png')
        item.parentNode.appendChild(item);
    }
    else {
        item.classList.remove('clicado');
        var icone = document.getElementById('icone_' + id);
        icone.removeAttribute('src');
        icone.setAttribute('src', './assets/circle-outline.png')
    }
}