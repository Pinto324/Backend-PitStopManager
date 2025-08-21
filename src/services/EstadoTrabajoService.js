const ModelService = require("./ModelService");

class EstadoTrabajoService extends ModelService {
  constructor() {
    super('Estado_Trabajo');
  }
}

module.exports = new EstadoTrabajoService();
