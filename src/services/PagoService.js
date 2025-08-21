const ModelService = require("./ModelService");

class PagoService extends ModelService {
  constructor() {
    super('Pago');
  }
}

module.exports = new PagoService();
