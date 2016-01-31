describe("Editar campos de tubos:", function() {

  it("retorno de classe clicada não deve ser null", function functionName() {
    var elemento = document.createElement('div');
    tubo.setClazzClicado(elemento);
    expect(retornaClazzClicada()).toBeTruthy();
  });

  it("retorna item clicado não deve ser null", function functionName() {
    var elemento = document.createElement('div');
    elemento.textContent = "teste";
    tubo.setClazzClicado(elemento);
    expect(retornaItemClicado()).toBeTruthy();
  });

  it("deve retornar no item clicado o código setado", function functionName() {
    var elemento = document.createElement("div");
    elemento.setAttribute("id", "item1");
    elemento.setAttribute("textContent", "item1");
    elemento.setAttribute("class", "teste");
    tubo.setClazzClicado(elemento);
    expect(elemento.textContent).toEqual(retornaItemClicado());
  });

  it("retorno de lista de itens não deve ser vazio", function() {
    var item = "item";
    var list = retornaListaDeItens(item);
    expect(list).not.toBeLessThan(0);
  });

});
