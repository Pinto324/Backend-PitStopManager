const MasterController = require("./MasterController");

class TipoNotificacionController extends MasterController {
    constructor() {
        super('Tipo_Notificacion');
    }
}

module.exports = new TipoNotificacionController();
