class Pago {
  constructor(id, id_factura, monto, fecha) {
    this.id = id;
    this.id_factura = id_factura;
    this.monto = monto;
    this.fecha = fecha;
  }
}
module.exports = Pago;