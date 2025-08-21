const ModelService = require("./ModelService");

class EstadoPedidoService extends ModelService {
  constructor() {
    super('Estado_Pedido');
  }
}

module.exports = new EstadoPedidoService();
