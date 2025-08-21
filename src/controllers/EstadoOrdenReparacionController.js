const MasterController = require("./MasterController");

class EstadoOrdenReparacionController extends MasterController {
    constructor() {
        super('Estado_Orden_Reparacion');
    }
}

module.exports = new EstadoOrdenReparacionController();
