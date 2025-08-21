const ModelService = require("./ModelService");

class ServicioOrdenReparacionService extends ModelService {
  constructor() {
    super('Servicio_Orden_Reparacion');
  }
}

module.exports = new ServicioOrdenReparacionService();
