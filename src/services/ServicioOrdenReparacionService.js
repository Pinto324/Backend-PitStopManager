const ModelService = require("./ModelService");

class ServicioOrdenReparacionService extends ModelService {
  constructor() {
    super('Servicio_Orden_Reparacion');
  }

  async updateEstadoTrabajoByID(id, value) {
    return await Model.updateById(this.table, id, 'id_estado_trabajo', value);
  }
}

module.exports = new ServicioOrdenReparacionService();
