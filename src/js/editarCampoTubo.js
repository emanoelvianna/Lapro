var classItemClicado;

var editarItem = function(item) {
  this.classItemClicado = item;
}

function retornaItem() {
  return document.getElementsByClassName(this.classItemClicado.replace('"', ""))[0];
}

function retornaInput() {
  return document.getElementById("inputCodigo");
}

function retornaListaDeItens(argument) {
  return document.getElementsByClassName(argument);
}

var cacheInput = function() {
  var item = retornaItem();
  var input = retornaInput();
  input.value = item.textContent;
}

var salvarInformacao = function() {
  var listaDeItens = retornaListaDeItens("item");
  var codigo = retornaInput();

  for(var i = 1; i <= listaDeItens.length; i++) {
    var itemAtual = "item"+i;
    var itemClicado = this.classItemClicado;
    if(itemAtual == itemClicado) {
      var elemento = document.getElementsByClassName("item"+i)[0];
      elemento.textContent = codigo.value;
      return true;
    }
  }
  return false;
}
