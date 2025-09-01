const ModelService = require("./ModelService");
const Model = require("../controllers/ModelController");
class TipoReporteService extends ModelService {
  constructor() {
    super('TipoReporte');
  }
}

module.exports = new TipoReporteService();
