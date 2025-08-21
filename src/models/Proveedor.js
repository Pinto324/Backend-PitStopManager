class Proveedor {
  constructor(id, id_usuario, nombre_empresa, es_servicio, descripcion) {
    this.id = id;
    this.id_usuario = id_usuario;
    this.nombre_empresa = nombre_empresa;
    this.es_servicio = es_servicio;
    this.descripcion = descripcion;
  }
}
module.exports = Proveedor;