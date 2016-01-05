// como eu passo objeto para javascript? é assim: function my(Tubo tubo){} ?!


// Tarefa: 1 - clicar no item x e sua label deve ser "Hello World"

function my(){
    var t = document.getElementsByClassName("item");
    
    for(var i = 1; i <= t.length; i++) {
        var elemento = document.getElementsByClassName("item" + i);
        elemento.textContent = "Hello World";
    }
}