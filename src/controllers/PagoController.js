const MasterController = require("./MasterController");

class PagoController extends MasterController {
    constructor() {
        super('Pago');
    }
}

module.exports = new PagoController();
