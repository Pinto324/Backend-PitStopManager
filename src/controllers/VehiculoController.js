const MasterController = require("./MasterController");

class VehiculoController extends MasterController {
    constructor() {
        super('Vehiculo');
    }
}

module.exports = new VehiculoController();
