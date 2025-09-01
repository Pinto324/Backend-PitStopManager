const ModelService = require("./ModelService");
const Model = require("../controllers/ModelController");
class OrdenReparacionService extends ModelService {
  constructor() {
    super('Orden_Reparacion');
  }

  async updateEstadoByID(id, value) {
    return await Model.updateById(this.table, id, 'estado', value);
  }

  async getWorkByID(idUsuario) { 
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
  AND est.estado IN ('En curso', 'Completado');

        `;
            const Parametros = [idUsuario];
            return await Model.executeSelect(querry, Parametros);
  }

    async reporteTrabajoPeriodo(fecha_inicio ,fecha_final) { 
   const querry = `
SELECT 
    orr.id AS id_orden,
    orr.fecha_ingreso,
    orr.fecha_egreso,
    s.servicio,
    s.descripcion,
    s.precio,
    et.estado AS estado_trabajo,
    u.nombre AS mecanico_nombre,
    u.apellido AS mecanico_apellido
FROM Orden_Reparacion orr
INNER JOIN Servicio_Orden_Reparacion sor 
    ON orr.id = sor.id_orden_reparacion
INNER JOIN Servicio s 
    ON sor.id_servicio = s.id
INNER JOIN Estado_Trabajo et 
    ON sor.id_estado_trabajo = et.id
LEFT JOIN Empleado_Orden_Reparacion eor 
    ON orr.id = eor.id_orden_reparacion
LEFT JOIN Empleado e 
    ON eor.id_empleado = e.id
LEFT JOIN Usuario u 
    ON e.id_usuario = u.id
WHERE orr.fecha_ingreso BETWEEN ? AND ?
ORDER BY orr.fecha_ingreso DESC;

        `;
            const Parametros = [fecha_inicio, fecha_final];
            return await Model.executeSelect(querry, Parametros);
    }
    
        async getWorkVehiculoByID(idVehiculo) { 
   const querry = `
SELECT 
    orr.id AS id_orden,
    orr.fecha_ingreso,
    orr.hora_ingreso,
    orr.fecha_egreso,
    orr.hora_egreso,
    eor.estado AS estado_orden,
    s.servicio AS nombre_servicio,
    s.descripcion AS descripcion_servicio,
    s.precio AS precio_servicio,
    s.es_correctivo,
    et.estado AS estado_trabajo
FROM Orden_Reparacion orr
INNER JOIN Estado_Orden_Reparacion eor 
    ON orr.estado = eor.id
INNER JOIN Servicio_Orden_Reparacion sor 
    ON orr.id = sor.id_orden_reparacion
INNER JOIN Servicio s 
    ON sor.id_servicio = s.id
INNER JOIN Estado_Trabajo et 
    ON sor.id_estado_trabajo = et.id
WHERE orr.id_vehiculo = ? 
ORDER BY orr.fecha_ingreso DESC;
        `;
            const Parametros = [idVehiculo];
            return await Model.executeSelect(querry, Parametros);
  }
}



module.exports = new OrdenReparacionService();
