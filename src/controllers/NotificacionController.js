const MasterController = require("./MasterController");

class NotificacionController extends MasterController {
    constructor() {
        super('Notificacion');
    }
}

module.exports = new NotificacionController();
