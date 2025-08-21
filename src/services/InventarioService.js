const ModelService = require("./ModelService");

class InventarioService extends ModelService {
  constructor() {
    super('Inventario');
  }
}

module.exports = new InventarioService();
