const ModelService = require("./ModelService");

class UsuarioService extends ModelService {
  constructor() {
    super('Usuario');
  }
}

module.exports = new UsuarioService();
