const MasterController = require("./MasterController");

class FacturaController extends MasterController {
    constructor() {
        super('Factura');
    }
}

module.exports = new FacturaController();
