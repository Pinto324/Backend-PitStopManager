class Servicio {
  constructor(id, servicio, es_correctivo, descripcion, tiempo_estimado, precio) {
    this.id = id;
    this.servicio = servicio;
    this.es_correctivo = es_correctivo;
    this.descripcion = descripcion;
    this.tiempo_estimado = tiempo_estimado;
    this.precio = precio;
  }
}
module.exports = Servicio;