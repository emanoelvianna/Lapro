describe("Editar campos de tubos", function() {

  it("campo input deve trazer o código atual do item clicado", function() {
    var item = "item1";
    editar(item);
    expect(classItemClicado).toEqual("item1");
  });

  it("valor escrito no campo input deve ser o novo valor do item", function() {
    var novoValor = 1234;
    
  });

});
