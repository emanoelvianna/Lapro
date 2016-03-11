// TODO: uma ideia de como fazer: http://stackoverflow.com/questions/19494339/creating-dynamic-div-using-javascript

function retornaInput(argument) {
  return document.getElementById(argument);
}

var button = document.getElementById('criar');
button.addEventListener("click", function functionName() {

  //TODO: usar uma lista para gerar os elementos e ao final adicionar!

  var elemento = document.createElement("li");
  elemento.setAttribute("class", "item");
  var textElemento = document.createTextNode("tubo");
  elemento.appendChild(textElemento);

  var list = document.getElementById("itens");
  list.insertBefore(elemento, list.childNodes[0]);


  /**
    var quantidade = retornaInput("inputAmount").value;
    var contador = 0;
    while (contador < quantidade) {
      var ele = document.createElement("div");
      ele.setAttribute("id", "item" + contador);
      ele.setAttribute("class", "item");
      ele.innerHTML = "tubo " + contador;
      var currentDiv = document.getElementsByClassName('itens');
      currentDiv.insertBefore(ele, currentDiv.firstChild);
      contador++;
    }
  **/
});
