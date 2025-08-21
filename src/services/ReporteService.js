const ModelService = require("./ModelService");

class ReporteService extends ModelService {
  constructor() {
    super('Reporte');
  }
}

module.exports = new ReporteService();
