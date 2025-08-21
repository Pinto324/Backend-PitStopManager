const ModelService = require("./ModelService");

class EmpleadoService extends ModelService {
  constructor() {
    super('Empleado');
  }
}

module.exports = new EmpleadoService();
