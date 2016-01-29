var tubo = (function() {
  // aqui é privado
  var _clazzClicada = null;
  var _codigo = 0;
  var _setCodigo = function(argument) {
    _codigo = argument;
  };
  var _getCodigo = function() {
    return _codigo;
  };
  var _setclazzClicada = function(argument) {
    _clazzClicada = argument;
  };
  var _getclazzClicada = function() {
    return _clazzClicada;
  };
  // aqui é publico
  return {
    setCodigo: _setCodigo,
    getCodigo: _getCodigo,
    setclazzClicada: _setclazzClicada,
    getclazzClicada: _getclazzClicada
  };
})();
