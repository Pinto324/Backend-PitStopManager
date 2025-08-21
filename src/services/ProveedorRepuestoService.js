const ModelService = require("./ModelService");

class ProveedorRepuestoService extends ModelService {
  constructor() {
    super('Proveedor_Repuesto');
  }
}

module.exports = new ProveedorRepuestoService();
