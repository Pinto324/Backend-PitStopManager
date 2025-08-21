const MasterController = require("./MasterController");

class EmpleadoController extends MasterController {
    constructor() {
        super('Empleado');
    }
}

module.exports = new EmpleadoController();
