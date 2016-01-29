var editar = function(item) {
  tubo.setclazzClicada(item);
};

function retornaItemClicado() {
  return tubo.getclazzClicada();
};

function retornaInput(argument) {
  return document.getElementById(argument);
};

function retornaListaDeItens(argument) {
  return document.getElementsByClassName(argument);
};

function cacheInput() {
  var item = retornaItemClicado();
  var input = retornaInput("inputCodigo");
  input.value = item;
  return input;
};

var botao = document.getElementById('salvar');
botao.addEventListener("click", function() {
  var listaDeItens = retornaListaDeItens("item");
  var codigo = retornaInput("inputCodigo");

  for (var i = 1; i <= listaDeItens.length; i++) {
    var itemAtual = "item" + i;
    var itemClicado = tubo.getclazzClicada();
    if (itemAtual == itemClicado) {
      var elemento = document.getElementsByClassName("item" + i)[0];
      elemento.textContent = codigo.value;
    }
  }
});
