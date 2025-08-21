class Notificacion {
  constructor(id, id_pedido, id_tipo_notificacion, comentario, fecha, hora) {
    this.id = id;
    this.id_pedido = id_pedido;
    this.id_tipo_notificacion = id_tipo_notificacion;
    this.comentario = comentario;
    this.fecha = fecha;
    this.hora = hora;
  }
}
module.exports = Notificacion;