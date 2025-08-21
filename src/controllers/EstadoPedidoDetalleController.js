const MasterController = require("./MasterController");

class EstadoPedidoDetalleController extends MasterController {
    constructor() {
        super('Estado_Pedido_Detalle');
    }
}

module.exports = new EstadoPedidoDetalleController();
