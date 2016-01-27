var classItemClicado;

var editar = function(item) {
  this.classItemClicado = item;
}

function retornaItemClicado(argument) {
  return document.getElementsByClassName(this.classItemClicado.replace('"', ""))[0];
}

function retornaInput(argument) {
  return document.getElementById(argument);
}

function retornaListaDeItens(argument) {
  return document.getElementsByClassName(argument);
}

var cacheInput = function() {
  var item = retornaItemClicado();
  var input = retornaInput("inputCodigo");
  input.value = item.textContent;
}

var botao = document.getElementById('salvar');
botao.addEventListener("click", function() {
  var listaDeItens = retornaListaDeItens("item");
  var codigo = retornaInput("inputCodigo");

  for(var i = 1; i <= listaDeItens.length; i++) {
    var itemAtual = "item"+i;
    var itemClicado = classItemClicado;
    if(itemAtual == itemClicado) {
      var elemento = document.getElementsByClassName("item"+i)[0];
      elemento.textContent = codigo.value;
    }
  }
});
