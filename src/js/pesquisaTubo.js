function buscar() {
  return elementoBuscado = document.getElementById("inputBusca").value;
}

function retornaListaDeItens(argument) {
  return document.getElementsByClassName(argument);
};

var botao = document.getElementById('buscar');
botao.addEventListener("click", function() {
  var elemento = buscar();
  var listaDeItens = retornaListaDeItens("item");

  for (var i = 1; i <= listaDeItens.length; i++) {
    var itemAtual = document.getElementsByClassName("item" + i)[0];

    if (itemAtual.textContent == elementoBuscado) {
      destacaElemento(elementoBuscado);
    }
  }
});

function destacaElemento(elementoBuscado) {
  var listaDeItens = retornaListaDeItens("item");

  for (var i = 1; i <= listaDeItens.length; i++) {
    var itemAtual = document.getElementsByClassName("item" + i)[0];

    if (itemAtual.textContent != elementoBuscado) {
      itemAtual.style.display = "none";
    }
  }
}
