const ModelService = require("./ModelService");

class ServicioService extends ModelService {
  constructor() {
    super('Servicio');
  }
}

module.exports = new ServicioService();
