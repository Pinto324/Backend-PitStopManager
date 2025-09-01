const ModelService = require("./ModelService");
const Model = require("../controllers/ModelController");

class VehiculoService extends ModelService {
  constructor() {
    super('Vehiculo');
  }
    async reporteVehiculo(id) { 
   const querry = `
SELECT 
    v.id AS id_vehiculo,
    v.marca,
    v.modelo,
    v.placas,
    orr.id AS id_orden,
    orr.fecha_ingreso,
    orr.fecha_egreso,
    eor.estado AS estado_orden,
    s.servicio,
    s.descripcion,
    s.precio
FROM Vehiculo v
INNER JOIN Orden_Reparacion orr 
    ON v.id = orr.id_vehiculo
INNER JOIN Estado_Orden_Reparacion eor 
    ON orr.estado = eor.id
INNER JOIN Servicio_Orden_Reparacion sor 
    ON orr.id = sor.id_orden_reparacion
INNER JOIN Servicio s 
    ON sor.id_servicio = s.id
WHERE v.id = ?
ORDER BY orr.fecha_ingreso DESC;
        `;
            const Parametros = [id];
            return await Model.executeSelect(querry, Parametros);
    }

}

module.exports = new VehiculoService();
