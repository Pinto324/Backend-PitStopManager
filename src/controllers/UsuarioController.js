const MasterController = require("./MasterController");

class UsuarioController extends MasterController{
  constructor() {
    super('Usuario');
  }
}

module.exports = new UsuarioController();