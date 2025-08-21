const ModelService = require("./ModelService");

class PedidoService extends ModelService {
  constructor() {
    super('Pedido');
  }
}

module.exports = new PedidoService();
