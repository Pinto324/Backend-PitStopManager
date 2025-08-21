const MasterController = require("./MasterController");

class CodigoVerificacionController extends MasterController {
    constructor() {
        super('Codigo_verificacion');
    }
}

module.exports = new CodigoVerificacionController();
