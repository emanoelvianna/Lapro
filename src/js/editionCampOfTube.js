// como eu passo objeto para javascript? é assim: function my(Tubo tubo){} ?!
var item;

function setItem(item) {
    this.item = item;  
}

function getItem() {
    return this.item;   
}

function editarItem() {
    var listaDeItens = document.getElementsByClassName("item");
    var codigo = document.getElementById("inputCodigo");
    
    for(var i = 1; i <= listaDeItens.length; i++) {
        var itemAtual = "item"+i;
        if(itemAtual == this.item) {
            var elemento = document.getElementsByClassName("item"+i)[0];
            elemento.textContent = codigo.value;
        }
    }
}