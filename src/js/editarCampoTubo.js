function retornaClazzClicada() {
  return tubo.getClazzClicado();
}

function retornaItemClicado() {
  return tubo.getClazzClicado().textContent;;
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
  var itemClicado = tubo.getClazzClicado();
  itemClicado.textContent = codigo.value;
});
