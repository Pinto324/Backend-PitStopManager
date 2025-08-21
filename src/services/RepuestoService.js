const ModelService = require("./ModelService");

class RepuestoService extends ModelService {
  constructor() {
    super('Repuesto');
  }
}

module.exports = new RepuestoService();
