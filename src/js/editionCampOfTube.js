function editarItem(item) {
  cacheInput(item);
}


function cacheInput(item) {
  var input = document.getElementById("inputCodigo");
  input.value = item;
}
