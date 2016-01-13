describe("Editar campos de tubos", function() {

  it("deve setar corretamente na variavel o item clicado", function() {
    var item = "item1";
    editar(item);
    expect(classItemClicado).toEqual("item1");
  });

  it("deve retornar o item que foi clicado", function() {
    var item ="item1";
    classItemClicado = item;

    expect(classItemClicado).toEqual("item1");
  });

});
