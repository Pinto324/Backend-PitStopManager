class Empleado_Orden_Reparacion {
  constructor(id, id_empleado, id_orden_reparacion, es_especialista) {
    this.id = id;
    this.id_empleado = id_empleado;
    this.id_orden_reparacion = id_orden_reparacion;
    this.es_especialista = es_especialista;
  }
}
module.exports = Empleado_Orden_Reparacion;