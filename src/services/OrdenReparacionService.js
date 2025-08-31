const ModelService = require("./ModelService");

class OrdenReparacionService extends ModelService {
  constructor() {
    super('Orden_Reparacion');
  }

  async updateEstadoByID(id, value) {
    return await Model.updateById(this.table, id, 'estado', value);
  }
}

module.exports = new OrdenReparacionService();
