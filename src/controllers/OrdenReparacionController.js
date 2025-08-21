const MasterController = require("./MasterController");

class OrdenReparacionController extends MasterController {
    constructor() {
        super('Orden_Reparacion');
    }
}

module.exports = new OrdenReparacionController();
