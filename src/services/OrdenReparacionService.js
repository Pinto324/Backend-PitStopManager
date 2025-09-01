const ModelService = require("./ModelService");
const Model = require("../controllers/ModelController");
class OrdenReparacionService extends ModelService {
  constructor() {
    super('Orden_Reparacion');
  }

  async updateEstadoByID(id, value) {
    return await Model.updateById(this.table, id, 'estado', value);
  }

  async getWorkByID(idUsuario){ 
   const querry = `
SELECT 
    eor.id AS id_asignacion,
    orr.id AS id_orden,
    e.id AS id_empleado,
    u.nombre AS nombre_empleado,
    u.apellido AS apellido_empleado,
    eor.es_especialista,
    orr.fecha_ingreso,
    orr.fecha_egreso,
    eor.id_orden_reparacion,
    eor.id_empleado,
    eor.id,
    eor.es_especialista,
    est.estado AS estado_orden
FROM Empleado_Orden_Reparacion eor
INNER JOIN Orden_Reparacion orr 
    ON eor.id_orden_reparacion = orr.id
INNER JOIN Estado_Orden_Reparacion est 
    ON orr.estado = est.id
INNER JOIN Empleado e 
    ON eor.id_empleado = e.id
INNER JOIN Usuario u 
    ON e.id_usuario = u.id
WHERE e.id_usuario = ? 
  AND est.estado IN ('En curso', 'Finalizado');

        `;
            const Parametros = [idUsuario];
            return await Model.executeSelect(querry, Parametros);
  }
}

module.exports = new OrdenReparacionService();
