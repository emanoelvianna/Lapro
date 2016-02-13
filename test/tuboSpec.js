describe("Tubo:", function() {

  it("ao clicar no item sua classe não deve ser null", function() {
    var elemento = document.createElement('div');
    tubo.setClazzClicado(elemento);
    expect(retornaClazzClicada()).toBeTruthy();
  });

  it("ao clicar no item sua classe deve ser setada e o retorno deve ser igual", function functionName() {
    var elemento = document.createElement("div");
    elemento.setAttribute("id", "item1");
    elemento.setAttribute("textContent", "item1");
    elemento.setAttribute("class", "teste");
    tubo.setClazzClicado(elemento);
    expect(elemento).toEqual(tubo.getClazzClicado());
  });

  it("ao setar no atributo _codigo ele não deve ser null", function functionName() {
    var codigo = "12345";
    tubo.setCodigo(codigo);
    expect(tubo.getCodigo()).toBeTruthy();
  });

  it("o retorno do atributo _codigo deve ser igual ao setado", function functionName() {
    var codigo = "12345";
    tubo.setCodigo(codigo);
    expect(codigo).toEqual(tubo.getCodigo());
  });

})();
