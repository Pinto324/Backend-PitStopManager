const MasterController = require("./MasterController");

class PedidoController extends MasterController {
    constructor() {
        super('Pedido');
    }
}

module.exports = new PedidoController();
