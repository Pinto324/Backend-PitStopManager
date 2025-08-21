const ModelService = require("./ModelService");

class InventarioOrdenReparacionService extends ModelService {
  constructor() {
    super('Inventario_Orden_Reparacion');
  }
}

module.exports = new InventarioOrdenReparacionService();
