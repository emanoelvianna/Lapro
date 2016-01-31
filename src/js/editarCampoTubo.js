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
  var classClicada = tubo.getClazzClicado();
  classClicada.textContent = codigo.value;
  tubo.setCodigo = codigo.value;
});

function setValue() {

}
