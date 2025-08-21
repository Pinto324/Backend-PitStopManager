class Reporte {
  constructor(id, id_empleado_orden_reparacion, id_tipo_reporte, observaciones, solucionado, fecha, hora) {
    this.id = id;
    this.id_empleado_orden_reparacion = id_empleado_orden_reparacion;
    this.id_tipo_reporte = id_tipo_reporte;
    this.observaciones = observaciones;
    this.solucionado = solucionado;
    this.fecha = fecha;
    this.hora = hora;
  }
}
module.exports = Reporte;
