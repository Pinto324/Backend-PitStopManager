const ModelService = require("./ModelService");

class ReciboService extends ModelService {
  constructor() {
    super('Recibo');
  }
}

module.exports = new ReciboService();
