const MasterController = require("./MasterController");

class RepuestoController extends MasterController {
    constructor() {
        super('Repuesto');
    }
}

module.exports = new RepuestoController();
