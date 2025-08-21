const MasterController = require("./MasterController");

class PedidoDetalleController extends MasterController {
    constructor() {
        super('Pedido_Detalle');
    }
}

module.exports = new PedidoDetalleController();
