/*
  TODO: o retornaClazzClicada deve retonrar a classe clicada
  isso também deve corrigir o bug do cache que tras a classe e não o value no input
  TODO: é preciso ver se é uma boa usar o this e se ele ira nos ajudar de fato!

*/


function retornaClazzClicada() {
  return tubo.getClazzClicado();
}

function retornaItemClicado() {
  var aux = tubo.getClazzClicado()
  return aux.value;
}

function retornaInput(argument) {
  return document.getElementById(argument);
}

function retornaListaDeItens(argument) {
  return document.getElementsByClassName(argument);
}

function cacheInput() {
  var item = retornaItemClicado();
  var input = retornaInput("inputCodigo");
  input.value = item;
}

var botao = document.getElementById('salvar');
botao.addEventListener("click", function() {
  var listaDeItens = retornaListaDeItens("item");
  var codigo = retornaInput("inputCodigo");

  for (var i = 1; i <= listaDeItens.length; i++) {
    var itemAtual = "item" + i;
    var itemClicado = tubo.getClazzClicado();
    if (itemAtual == itemClicado) {
      var elemento = document.getElementsByClassName("item" + i)[0];
      elemento.textContent = codigo.value;
    }
  }
});
