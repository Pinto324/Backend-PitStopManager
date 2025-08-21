const MasterController = require("./MasterController");

class InventarioOrdenReparacionController extends MasterController {
    constructor() {
        super('Inventario_Orden_Reparacion');
    }
}

module.exports = new InventarioOrdenReparacionController();
