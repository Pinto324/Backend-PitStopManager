const ModelService = require("./ModelService");

class EmpleadoOrdenReparacionService extends ModelService {
  constructor() {
    super('EmpleadoOrdenReparacion');
  }
}

module.exports = new EmpleadoOrdenReparacionService();
