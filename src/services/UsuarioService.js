const ModelService = require("./ModelService");
const Model = require("../controllers/ModelController");

class UsuarioService extends ModelService {
  constructor() {
    super('Usuario');
  }

    async ObtenerDatosDeVehiculos(idUsuario) { 
   const querry = `
SELECT 
    u.id AS id_usuario,
    u.nombre,
    u.apellido,
    v.id AS id_vehiculo,
    v.marca,
    v.modelo,
    v.placas,
    orr.id,
    eor.estado AS estado_orden
FROM Usuario u
INNER JOIN Vehiculo v 
    ON u.id = v.id_cliente
INNER JOIN Orden_Reparacion orr 
    ON v.id = orr.id_vehiculo
INNER JOIN Estado_Orden_Reparacion eor 
    ON orr.estado = eor.id
WHERE u.id = ?
  AND orr.fecha_ingreso = (
      SELECT MAX(fecha_ingreso) 
      FROM Orden_Reparacion 
      WHERE id_vehiculo = v.id
  );

        `;
            const Parametros = [idUsuario];
            return await Model.executeSelect(querry, Parametros);
  }

      async ObtenerDatosDeVehiculosDetalle(idUsuario) { 
   const querry = `
SELECT 
    u.id AS id_usuario,
    u.nombre,
    u.apellido,
    v.id AS id_vehiculo,
    v.marca,
    v.modelo,
    v.placas,
    orr.id,
    eor.estado AS estado_orden
FROM Usuario u
INNER JOIN Vehiculo v 
    ON u.id = v.id_cliente
INNER JOIN Orden_Reparacion orr 
    ON v.id = orr.id_vehiculo
INNER JOIN Estado_Orden_Reparacion eor 
    ON orr.estado = eor.id
WHERE u.id = ?
  AND orr.fecha_ingreso = (
      SELECT MAX(fecha_ingreso) 
      FROM Orden_Reparacion 
      WHERE id_vehiculo = v.id
  );

        `;
            const Parametros = [idUsuario];
            return await Model.executeSelect(querry, Parametros);
    }
    
    async reporteHistorialCliente(idUsuario) { 
   const querry = `
SELECT 
    u.id AS id_cliente,
    u.nombre AS nombre_cliente,
    u.apellido AS apellido_cliente,
    v.id AS id_vehiculo,
    v.marca,
    v.modelo,
    v.placas,
    orr.id AS id_orden,
    orr.fecha_ingreso,
    orr.fecha_egreso,
    eor.estado AS estado_orden,
    s.servicio AS nombre_servicio,
    s.descripcion AS descripcion_servicio,
    s.precio AS precio_servicio
FROM Usuario u
INNER JOIN Vehiculo v 
    ON u.id = v.id_cliente
INNER JOIN Orden_Reparacion orr 
    ON v.id = orr.id_vehiculo
INNER JOIN Estado_Orden_Reparacion eor 
    ON orr.estado = eor.id
INNER JOIN Servicio_Orden_Reparacion sor 
    ON orr.id = sor.id_orden_reparacion
INNER JOIN Servicio s 
    ON sor.id_servicio = s.id
WHERE u.id = ?
ORDER BY orr.fecha_ingreso DESC;
        `;
            const Parametros = [idUsuario];
            return await Model.executeSelect(querry, Parametros);
  }

}

module.exports = new UsuarioService();
