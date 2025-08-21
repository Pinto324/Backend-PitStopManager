const MasterController = require("./MasterController");

class EstadoTrabajoController extends MasterController {
    constructor() {
        super('Estado_Trabajo');
    }
}

module.exports = new EstadoTrabajoController();
