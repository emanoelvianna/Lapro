describe("Editar campos de tubos", function() {

  it("deve trazer o código atual do item", function() {
    var item = "item1";
    editarItem(item);
    expect(classItemClicado).toEqual("item1");
  });
  
});
