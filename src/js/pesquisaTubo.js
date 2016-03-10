
// TODO: A busca hoje realizada pelo id da div deve ser modificada?
// TODO: também é necessario criar uma mensagem de tubo não encontrado!

function elementoBuscado() {
  return document.getElementById("inputBusca").value;
}

function retornaListaDeItens(argument) {
  return document.getElementsByClassName(argument);
};

var botao = document.getElementById('buscar');
botao.addEventListener("click", function() {
  var elemento = elementoBuscado();
  var listaDeItens = retornaListaDeItens("item");

  for (var i = 1; i <= listaDeItens.length; i++) {
    var itemAtual = document.getElementById("item" + i);

    if (itemAtual.textContent == elemento) {
      return destacaElemento(elemento);
    }
  }
  console.log("Item não encontrado!");
});

function destacaElemento(elemento) {
  var listaDeItens = retornaListaDeItens("item");

  for (var i = 1; i <= listaDeItens.length; i++) {
    var itemAtual = document.getElementById("item" + i);

    if (itemAtual.textContent != elemento) {
      itemAtual.style.display = "none";
    }

  }
}
