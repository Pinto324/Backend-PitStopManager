const MasterController = require("./MasterController");

class EstadoPedidoController extends MasterController {
    constructor() {
        super('Estado_Pedido');
    }
}

module.exports = new EstadoPedidoController();
