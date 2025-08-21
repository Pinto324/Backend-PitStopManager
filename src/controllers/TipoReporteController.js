const MasterController = require("./MasterController");

class TipoReporteController extends MasterController {
    constructor() {
        super('TipoReporte');
    }
}

module.exports = new TipoReporteController();
