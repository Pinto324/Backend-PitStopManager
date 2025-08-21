const ModelService = require("./ModelService");

class EstadoOrdenReparacionService extends ModelService {
  constructor() {
    super('Estado_Orden_Reparacion');
  }
}

module.exports = new EstadoOrdenReparacionService();
