// como eu passo objeto para javascript? é assim: function my(Tubo tubo){} ?!

// Passo a passo 
// 1. Clicar no item.
// 2. Editar campo de tubo.
// 3. Salvar o texto no item

var item;

function setItem(item) {
    console.log(item);
    this.item = item;
    console.log("retorno do item é: " +getItem());
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