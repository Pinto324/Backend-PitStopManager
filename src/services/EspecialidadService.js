const ModelService = require("./ModelService");

class EspecialidadService extends ModelService {
  constructor() {
    super('Especialidad');
  }
}

module.exports = new EspecialidadService();
