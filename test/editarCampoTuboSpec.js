describe("Editar campos de tubos", function() {

  it("deve retornar o código atual no item selecionado", function() {
    var item = "item1";
    editar(item);
    expect(classItemClicado).toEqual("item1");
  });

});
