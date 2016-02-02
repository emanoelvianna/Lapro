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

  it("deve ser possivel setar o código no atributo _codigo", function functionName() {
    var codigo = "12345";
    tubo.setCodigo(codigo);
    expect(codigo).toEqual(tubo.getCodigo());
  });

})();
