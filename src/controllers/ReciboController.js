const MasterController = require("./MasterController");

class ReciboController extends MasterController {
    constructor() {
        super('Recibo');
    }
}

module.exports = new ReciboController();
