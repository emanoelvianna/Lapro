// TODO: uma ideia de como fazer: http://stackoverflow.com/questions/19494339/creating-dynamic-div-using-javascript

function retornaInput(argument) {
  return document.getElementById(argument);
}

var button = document.getElementById('criar');
button.addEventListener("click", function functionName() {
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
});
