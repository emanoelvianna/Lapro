describe("Editar campos de tubos", function() {

  it("campo input deve trazer o código atual do item clicado", function() {
    var item = "item1";
    editar(item);
    expect(retornaItemClicado()).toEqual("item1");
  });

  it("retorno de lista de itens não deve ser vazio", function() {
    var item = "item";
    var list = retornaListaDeItens(item);
    expect(list).not.toBeLessThan(0);
  });

  it("modal deve trazer no campo input o código atual do tubo", function() {
    var item = "item1";
    editar(item);
    var retorno = retornaItemClicado();
    expect(retorno).toEqual(item);
  });
});
