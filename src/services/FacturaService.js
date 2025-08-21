const ModelService = require("./ModelService");

class FacturaService extends ModelService {
  constructor() {
    super('Factura');
  }
}

module.exports = new FacturaService();
