// como eu passo objeto para javascript? é assim: function my(Tubo tubo){} ?!


// Tarefa: 1.2 - clicar no item x e abrir open dialog


function getCodigo() {
    var codigo = document.getElementById("inputCodigo");
    return codigo.value;
}

function my(item){
    var t = document.getElementsByClassName("item");
    
    for(var i = 1; i <= t.length; i++) {
        var itemAtual = "item"+i;
        if(itemAtual == item) {
            var elemento = document.getElementsByClassName("item"+i)[0];
            elemento.textContent = getCodigo();
            console.log(elemento);
        }
    }
}
