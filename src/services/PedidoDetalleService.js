const ModelService = require("./ModelService");

class PedidoDetalleService extends ModelService {
  constructor() {
    super('Pedido_Detalle');
  }
}

module.exports = new PedidoDetalleService();
