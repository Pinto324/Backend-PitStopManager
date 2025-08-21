const MasterController = require("./MasterController");

class EspecialidadController extends MasterController {
    constructor() {
        super('Especialidad');
    }
}

module.exports = new EspecialidadController();
