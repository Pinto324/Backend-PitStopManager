class Inventario {
  constructor(id, id_repuesto, cantidad, precio_unitario) {
    this.id = id;
    this.id_repuesto = id_repuesto;
    this.cantidad = cantidad;
    this.precio_unitario = precio_unitario;
  }
}
module.exports = Inventario;