// como eu passo objeto para javascript? é assim: function my(Tubo tubo){} ?!


/* Continuação da Tarefa1:

Ao clicar no modal ele deve trazer a informacao que esta atualmente no item.

*/ 

var item;
var codigo;

function setItem(item) {
    this.item = item;
}

function getItem() {
    return this.item;   
}

function editarItem() {
    var listaDeItens = document.getElementsByClassName("item");
    
    this.codigo = document.getElementById("inputCodigo");
    
    for(var i = 1; i <= listaDeItens.length; i++) {
        var itemAtual = "item"+i;
        if(itemAtual == this.item) {
            var elemento = document.getElementsByClassName("item"+i)[0];
            elemento.textContent = codigo.value;
        }
    }
}

function cacheInput() {
    var codigo = document.getElementById("inputCodigo");
    codigo.textContent = item;
}