const Model = require("../controllers/ModelController");
const ModelService = require("./ModelService");

class ProveedorService extends ModelService {
  constructor() {
    super('Proveedor');
  }

}

module.exports = new ProveedorService();
