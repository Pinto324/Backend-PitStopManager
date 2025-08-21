const MasterController = require("./MasterController");

class ReporteController extends MasterController {
    constructor() {
        super('Reporte');
    }
}

module.exports = new ReporteController();
