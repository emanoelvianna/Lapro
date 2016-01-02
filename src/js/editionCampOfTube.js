function my(){
    var t = document.getElementsByClassName("item");
    
    for(var i = 0; i <= t.length; i++) {
        var elemento = document.getElementsByClassName("item")[i];
        elemento.textContent = "Hello World";
        console.log("olá");
    }
}