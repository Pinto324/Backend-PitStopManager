const MasterController = require("./MasterController");

class ServicioController extends MasterController {
    constructor() {
        super('Servicio');
    }
}

module.exports = new ServicioController();
