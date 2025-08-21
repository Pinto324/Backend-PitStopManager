const MasterController = require("./MasterController");

class InventarioController extends MasterController {
    constructor() {
        super('Inventario');
    }
}

module.exports = new InventarioController();
