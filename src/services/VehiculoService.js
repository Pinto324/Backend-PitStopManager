const ModelService = require("./ModelService");

class VehiculoService extends ModelService {
  constructor() {
    super('Vehiculo');
  }
}

module.exports = new VehiculoService();
