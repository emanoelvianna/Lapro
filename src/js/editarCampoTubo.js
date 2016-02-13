function retornaClazzClicada() {
  return tubo.getClazzClicado();
}

function retornaItemClicado() {
  return tubo.getClazzClicado().textContent;
}

function retornaInput(argument) {
  return document.getElementById(argument);
}

function retornaListaDeItens(argument) {
  return document.getElementsByClassName(argument);
}

function cacheInput(argument) {
  return retornaInput(argument.id).value = retornaItemClicado();
}

//TODO:melhorar este código aqui, ainda precisa realizar o teste também!
var botao = document.getElementById('salvar');
botao.addEventListener("click", function() {
  var codigo = retornaInput("inputCodigo");
  setCodigoAtualNoInput(codigo);
  tubo.setCodigo = codigo.value;
});

function setCodigoAtualNoInput(codigo) {
  var classe = tubo.getClazzClicado();
  classe.textContent = codigo.value;
}
