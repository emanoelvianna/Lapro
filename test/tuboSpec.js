describe("Tubo:", function() {

  it("o retorno da classe clicada não deve ser null", function() {
    var elemento = document.createElement('div');
    tubo.setClazzClicado(elemento);
    expect(retornaClazzClicada()).toBeTruthy();
  });

})();
