class Pedido {
  constructor(id, fecha_pedido, fecha_entrega, estado) {
    this.id = id;
    this.fecha_pedido = fecha_pedido;
    this.fecha_entrega = fecha_entrega;
    this.estado = estado;
  }
}
module.exports = Pedido;