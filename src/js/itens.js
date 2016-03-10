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
    var currentDiv = document.getElementById("body");
    document.body.insertBefore(ele, currentDiv);
    contador++;
  }
});

/*
var output = document.getElementById('items');

var botao = document.getElementById('criar');
botao.addEventListener("click", function() {
  var quantidade = retornaInput("inputAmount").value;
  console.log(quantidade);

  var contador = 0;
  while (contador < quantidade) {
    var ele = document.createElement("div");
    ele.setAttribute("id", "item" + contador);
    ele.setAttribute("class", "item");
    ele.innerHTML = "tubo " + contador;
    output.appendChild(ele);
  }
});
*/
