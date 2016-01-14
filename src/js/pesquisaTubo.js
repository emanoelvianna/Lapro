function buscar() {
    var elementoBuscado = document.getElementById("inputBusca").value;
    var listaDeItens = document.getElementsByClassName("item");

    for(var i = 1; i <= listaDeItens.length; i++) {
        var itemAtual = document.getElementsByClassName("item"+i)[0];

        if(itemAtual.textContent == elementoBuscado) {
            destacaElemento(elementoBuscado);
        }
    }
}

function destacaElemento(elementoBuscado) {
    var listaDeItens = document.getElementsByClassName("item");

    for(var i = 1; i <= listaDeItens.length; i++) {
      var itemAtual = document.getElementsByClassName("item"+i)[0];

      if(itemAtual.textContent != elementoBuscado) {
          itemAtual.style.display = "none";
      }
    }
}
