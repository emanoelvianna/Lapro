// como eu passo objeto para javascript? é assim: function my(Tubo tubo){} ?!


// Tarefa: 1.2 - clicar no item x e abrir open dialog

function my(item){
    var t = document.getElementsByClassName("item");
    
    for(var i = 1; i <= t.length; i++) {
        var itemAtual = "item"+i;
        if(itemAtual == item) {
            var elemento = document.getElementsByClassName("item"+i)[0];
            elemento.textContent = "Hello World";
        }
    }
}

// Dúvidas: Por que eu preciso adicionar [0] ao final quando dou um getElements.. ?!
// Dúvidas: É errado separar os js para cada funcionalidade?!