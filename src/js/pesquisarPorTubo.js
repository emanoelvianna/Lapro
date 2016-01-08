// Tarefa2: buscar por tubo ao informar código no input e clicar no botão buscar.

function buscar() {
    var elementoBuscado = document.getElementById("inputBusca").value;
    var listaDeItens = document.getElementsByClassName("item");

    for(var i = 1; i <= listaDeItens.length; i++) {
        var itemAtual = document.getElementsByClassName("item"+i)[0];

        if(itemAtual.textContent == elementoBuscado) {
            alert("Elemento encontrado!");
        }
    }
}
