// Tarefa2: buscar por tubo ao informar código no input e clicar no botão buscar.

function buscar(itemProcurado) {
    var listaDeItens = document.getElementsByClassName("item");
    
    for(var i = 1; i <= listaDeItens.length; i++) {
        var itemAtual = "item"+i;
        if(itemProcurado == itemAtual) {
            console.log("verdade");
        }
    }
}