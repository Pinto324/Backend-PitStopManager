class Factura {
  constructor(id, id_orden_reparacion, fecha, total) {
    this.id = id;
    this.id_orden_reparacion = id_orden_reparacion;
    this.fecha = fecha;
    this.total = total;
  }
}
module.exports = Factura;