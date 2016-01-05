// como eu passo objeto para javascript? é assim: function my(Tubo tubo){} ?!


// Tarefa: 1 - clicar no item x e sua label deve ser "Hello World"

function my(item){
    var t = document.getElementsByClassName("item");
    
    for(var i = 1; i <= t.length; i++) {
        var atual = "item"+i;
        if(atual == item) {
            var elemento = document.getElementsByClassName("item"+i)[0];
            elemento.textContent = "Hello World";
        }
    }
}