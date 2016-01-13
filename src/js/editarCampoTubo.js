var classItemClicado;

var editar = function(item) {
  this.classItemClicado = item;
}

var cacheInput = function() {
  var input = document.getElementById("inputCodigo");
  var item = document.getElementsByClassName(this.classItemClicado.replace('"', ""))[0];
  input.value = item.textContent;
  return input;
}

var salvarInformacao = function() {
  var listaDeItens = document.getElementsByClassName("item");
  var codigo = document.getElementById("inputCodigo");

  for(var i = 1; i <= listaDeItens.length; i++) {
    var itemAtual = "item"+i;
    var itemClicado = this.classItemClicado;
    if(itemAtual == itemClicado) {
      var elemento = document.getElementsByClassName("item"+i)[0];
      elemento.textContent = codigo.value;
    }
  }
}
