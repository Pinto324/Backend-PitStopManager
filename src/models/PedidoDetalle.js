class Pedido_Detalle {
  constructor(id, id_pedido, id_proveedor_repuesto, estado, cantidad_solicitada) {
    this.id = id;
    this.id_pedido = id_pedido;
    this.id_proveedor_repuesto = id_proveedor_repuesto;
    this.estado = estado;
    this.cantidad_solicitada = cantidad_solicitada;
  }
}
module.exports = Pedido_Detalle;