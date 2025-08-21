const MasterController = require("./MasterController");

class ProveedorRepuestoController extends MasterController {
    constructor() {
        super('Proveedor_Repuesto');
    }
}

module.exports = new ProveedorRepuestoController();
