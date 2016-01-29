var tubo = (function() {
  // aqui é privado
  var _clazzClicado = null;
  var _codigo = 0;
  var _setCodigo = function(argument) {
    _codigo = argument;
  };
  var _getCodigo = function() {
    return _codigo;
  };
  var _setClazzClicado = function(argument) {
    _clazzClicado = argument;
  };
  var _getClazzClicado = function() {
    return _clazzClicado;
  };
  // aqui é publico
  return {
    setCodigo: _setCodigo,
    getCodigo: _getCodigo,
    setClazzClicado: _setClazzClicado,
    getClazzClicado: _getClazzClicado
  };
})();
