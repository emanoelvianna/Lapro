var tubo = (function() {
  // aqui é privado
  var _clazz = null;
  var _codigo = 0;
  var _setCodigo = function(argument) {
    _codigo = argument;
  }
  var _getCodigo = function() {
    return _codigo;
  }
  var _setClazz = function(argument) {
    _clazz = argument;
  }
  var _getClazz = function() {
    return _clazz;
  }
  // aqui é publico
  return {
    setCodigo: _setCodigo,
    getCodigo: _getCodigo,
    setClazz:  _setClazz,
    getClazz: _getClazz
  };
})();
