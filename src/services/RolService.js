const ModelService = require("./ModelService");

class RolService extends ModelService {
  constructor() {
    super('Rol');
  }
}

module.exports = new RolService();
