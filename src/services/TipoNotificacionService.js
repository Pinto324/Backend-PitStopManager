const ModelService = require("./ModelService");

class TipoNotificacionService extends ModelService {
  constructor() {
    super('Tipo_Notificacion');
  }
}

module.exports = new TipoNotificacionService();
