// TODO: uma ideia de como fazer: http://stackoverflow.com/questions/19494339/creating-dynamic-div-using-javascript

function retornaInput(argument) {
  return document.getElementById(argument);
}

var criar = document.getElementById('criar');
criar.addEventListener("click", function functionName() {
  //TODO: usar uma lista para gerar os elementos e ao final adicionar!
  var quantidade = document.getElementById('inputAmount').value;

  var novaLista = document.createElement("ul");
  novaLista.setAttribute("class", "itens1 estilo-itens");

  var listItens = document.getElementById("lista");
  listItens.insertBefore(novaLista, listItens.childNodes[0]);

  for (var i = 0; i < quantidade; i++) {
    var elemento = document.createElement("li");
    elemento.setAttribute("class", "item");
    elemento.setAttribute("href", "#myModal");
    elemento.setAttribute("data-toggle", "modal");
    elemento.setAttribute("onclick", "tubo.setClazzClicado(this)");
    var textElemento = document.createTextNode("tubo" + i);
    elemento.appendChild(textElemento);
    var list = document.getElementsByClassName('itens1');
    list[0].insertBefore(elemento, list[0].childNodes[0]);

  }


});

function functionName() {

}

function criarNovoElemento() {

}
