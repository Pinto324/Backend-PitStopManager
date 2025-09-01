const ModelService = require("./ModelService");
const EspecialidadService = require("./EspecialidadService");

class EmpleadoOrdenReparacionService extends ModelService {
  constructor() {
    super('EmpleadoOrdenReparacion');
  }

  async getEmpleadosLibres(fechaHoraInicio, fechaHoraFin) {

    try {
      const query = `
      SELECT e.id, e.nombre, e.apellido
      FROM Empleado e
      WHERE e.id NOT IN (
          SELECT eor.id_empleado
          FROM Empleado_Orden_Reparacion eor
          INNER JOIN Orden_Reparacion orr 
              ON eor.id_orden_reparacion = orr.id
          WHERE (
              STR_TO_DATE(CONCAT(orr.fecha_ingreso, ' ', orr.hora_ingreso), '%Y-%m-%d %H:%i:%s') < ${fechaHoraInicio}
              AND STR_TO_DATE(CONCAT(orr.fecha_egreso, ' ', orr.hora_egreso), '%Y-%m-%d %H:%i:%s') > ${fechaHoraFin}
          )
      );
    `;
      return await this.executeQuery(query);
    } catch (error) {
      throw new Error("Error al calcular tiempo de salida: " + error.message);
    }

  }

  async verifyEmpleadoLibre(idEmpleado,fechaHoraInicio, fechaHoraFin) {

    try {
      let empleadoLibre = true;
      const query = `
      SELECT e.id, e.nombre, e.apellido
      FROM Empleado e
      WHERE e.id = ${idEmpleado}
      AND e.id NOT IN (
      SELECT eor.id_empleado
      FROM Empleado_Orden_Reparacion eor
      INNER JOIN Orden_Reparacion orr 
          ON eor.id_orden_reparacion = orr.id
      WHERE (
          STR_TO_DATE(CONCAT(orr.fecha_ingreso, ' ', orr.hora_ingreso), '%Y-%m-%d %H:%i:%s') < ${fechaHoraInicio}
          AND STR_TO_DATE(CONCAT(orr.fecha_egreso, ' ', orr.hora_egreso), '%Y-%m-%d %H:%i:%s') > ${fechaHoraFin}
      )
  );

    `;

      let listadoEmpleado = await this.executeQuery(query);
      if (listadoEmpleado.length == 0) {//Si está ocupado, no devuelve filas
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
      let values = idUsuario;
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
