// TODO: uma ideia de como fazer: http://stackoverflow.com/questions/19494339/creating-dynamic-div-using-javascript

var botao = document.getElementById('criar');
botao.addEventListener("click", function() {
  var quantidade = retornaInput("inputAmount");

  window.onload=function(){
    var output = document.getElementById('item');
    var i=1;
    var val="";
    while(i<=quantidade)
    {

        if(!document.getElementById('timedrpact'+i))
        {
            var ele = document.createElement("div");
            ele.setAttribute("id","timedrpact"+i);
            ele.setAttribute("class","inner");
            ele.innerHTML="hi "+i;
            output.appendChild(ele);

        }
        i++;


    }
};

};
