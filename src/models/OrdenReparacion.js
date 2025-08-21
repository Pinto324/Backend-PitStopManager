class Orden_Reparacion {
  constructor(id, id_vehiculo, fecha_ingreso, hora_ingreso, fecha_egreso, hora_egreso, estado) {
    this.id = id;
    this.id_vehiculo = id_vehiculo;
    this.fecha_ingreso = fecha_ingreso;
    this.hora_ingreso = hora_ingreso;
    this.fecha_egreso = fecha_egreso;
    this.hora_egreso = hora_egreso;
    this.estado = estado;
  }
}
module.exports = Orden_Reparacion;