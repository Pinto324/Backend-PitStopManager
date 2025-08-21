class Chat_Usuario {
  constructor(id, id_orden_reparacion, mensaje, visto) {
    this.id = id;
    this.id_orden_reparacion = id_orden_reparacion;
    this.mensaje = mensaje;
    this.visto = visto;
  }
}
module.exports = Chat_Usuario;