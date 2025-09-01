const ModelService = require("./ModelService");
const EspecialidadService = require("./EspecialidadService");

class EmpleadoOrdenReparacionService extends ModelService {
  constructor() {
    super('Empleado_Orden_Reparacion');
  }

  async getEmpleadosLibres(esEspecialista) {

    try {
      let query = `
      SELECT e.*
      FROM Empleado e
      WHERE e.id NOT IN (
        SELECT eor.id_empleado
        FROM Empleado_Orden_Reparacion eor
        INNER JOIN Orden_Reparacion orr 
            ON eor.id_orden_reparacion = orr.id
        WHERE orr.estado = 4
      )
      AND e.id NOT IN (
        SELECT esp.id_empleado
        FROM Especialidad esp
);
    `;
      if (esEspecialista) {
        query = `
        SELECT DISTINCT e.*
        FROM Empleado e
          INNER JOIN Especialidad esp 
            ON e.id = esp.id_empleado
          WHERE e.id NOT IN (
        SELECT eor.id_empleado
        FROM Empleado_Orden_Reparacion eor
          INNER JOIN Orden_Reparacion orr 
        ON eor.id_orden_reparacion = orr.id
        WHERE orr.estado = 4
);
        `;
      }
      return await this.executeQuery(query);
    } catch (error) {
      throw new Error("Error al calcular tiempo de salida: " + error.message);
    }

  }

async getEmpleadosLibresConEspecialidad(esEspecialista, id_tipo_especialidad) {
  try {
    let query = `
      SELECT e.*
      FROM Empleado e
      WHERE e.id NOT IN (
        SELECT eor.id_empleado
        FROM Empleado_Orden_Reparacion eor
        INNER JOIN Orden_Reparacion orr 
          ON eor.id_orden_reparacion = orr.id
        WHERE orr.estado = 4
      )
    `;

    // Si se requiere que sea especialista
    if (esEspecialista) {
      query = `
        SELECT DISTINCT e.*
        FROM Empleado e
        INNER JOIN Especialidad esp 
          ON e.id = esp.id_empleado
        WHERE esp.id_tipo_especialidad = ${id_tipo_especialidad}
          AND e.id NOT IN (
            SELECT eor.id_empleado
            FROM Empleado_Orden_Reparacion eor
            INNER JOIN Orden_Reparacion orr 
              ON eor.id_orden_reparacion = orr.id
            WHERE orr.estado = 4
          )
      `;
    }

    return await this.executeQuery(query);
  } catch (error) {
    throw new Error("Error al calcular empleados libres: " + error.message);
  }
}


  async verifyEmpleadoLibre(idEmpleado) {

    try {
      let empleadoLibre = true;
      const query = `
        SELECT eor.*
        FROM Empleado_Orden_Reparacion eor
        INNER JOIN Orden_Reparacion orr ON eor.id_orden_reparacion = orr.id
        WHERE orr.estado = 4 AND eor.id_empleado = ${idEmpleado};
        `;

      let listadoEmpleado = await this.executeQuery(query);
      if (listadoEmpleado.length != 0) {//Si está libre, no devuelve filas
        empleadoLibre = false;
      }
      return empleadoLibre;
    } catch (error) {
      throw new Error("Error al calcular tiempo de salida: " + error.message);
    }

  }

  async verifyEspecialista(idUsuario) {
    try {
      let esEspecialista = true;
      let colums = ["id_empleado"];
      let values = [idUsuario];
      let especialidadesUser = await EspecialidadService.getAllByParameters(colums, values);
      if (especialidadesUser.length == 0) {
        esEspecialista = false;
      }
      return esEspecialista;
    } catch (error) {
      throw new Error("Error al calcular tiempo de salida: " + error.message);
    }

  }

}

module.exports = new EmpleadoOrdenReparacionService();
