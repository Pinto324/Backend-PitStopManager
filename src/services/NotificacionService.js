const ModelService = require("./ModelService");

class NotificacionService extends ModelService {
  constructor() {
    super('Notificacion');
  }
}

module.exports = new NotificacionService();
