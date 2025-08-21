const MasterController = require("./MasterController");

class EmpleadoOrdenReparacionController extends MasterController {
    constructor() {
        super('Empleado_Orden_Reparacion');
    }
}

module.exports = new EmpleadoOrdenReparacionController();
