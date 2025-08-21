const MasterController = require("./MasterController");

class TipoEspecialidadController extends MasterController {
    constructor() {
        super('Tipo_Especialidad');
    }
}

module.exports = new TipoEspecialidadController();
