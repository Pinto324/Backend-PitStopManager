const MasterController = require("./MasterController");

class ProveedorController extends MasterController {
    constructor() {
        super('Proveedor');
    }
}

module.exports = new ProveedorController();
