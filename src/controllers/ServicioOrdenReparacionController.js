const MasterController = require("./MasterController");

class ServicioOrdenReparacionController extends MasterController {
    constructor() {
        super('Servicio_Orden_Reparacion');
    }
}

module.exports = new ServicioOrdenReparacionController();
