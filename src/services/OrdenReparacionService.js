const ModelService = require("./ModelService");

class OrdenReparacionService extends ModelService {
  constructor() {
    super('Orden_Reparacion');
  }
}

module.exports = new OrdenReparacionService();
