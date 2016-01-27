describe("Editar campos de tubos", function() {

  it("campo input deve trazer o código atual do item clicado", function() {
    var item = "item1";
    editar(item);
    expect(classItemClicado).toEqual("item1");
  });

  it("retorno de lista de itens não deve ser vazio", function() {
    var item = "item";
    var list = retornaListaDeItens(item);
    console.log(list.length);
    expect(list).not.toBeLessThan(0);
  });

});
