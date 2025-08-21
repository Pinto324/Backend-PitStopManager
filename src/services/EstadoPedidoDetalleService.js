const ModelService = require("./ModelService");

class EstadoPedidoDetalleService extends ModelService {
  constructor() {
    super('Estado_Pedido_Detalle');
  }
}

module.exports = new EstadoPedidoDetalleService();
