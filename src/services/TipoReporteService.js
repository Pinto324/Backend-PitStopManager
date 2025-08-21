const ModelService = require("./ModelService");

class TipoReporteService extends ModelService {
  constructor() {
    super('TipoReporte');
  }
}

module.exports = new TipoReporteService();
