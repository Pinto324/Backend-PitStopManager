class Inventario_Orden_Reparacion {
  constructor(id, id_inventario, id_orden_reparacion, cantidad) {
    this.id = id;
    this.id_inventario = id_inventario;
    this.id_orden_reparacion = id_orden_reparacion;
    this.cantidad = cantidad;
  }
}
module.exports = Inventario_Orden_Reparacion;