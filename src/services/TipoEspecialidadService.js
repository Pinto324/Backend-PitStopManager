const ModelService = require("./ModelService");

class TipoEspecialidadService extends ModelService {
  constructor() {
    super('Tipo_Especialidad');
  }
}

module.exports = new TipoEspecialidadService();
