class Empleado {
  constructor(id, id_usuario, es_mecanico, es_interno) {
    this.id = id;
    this.id_usuario = id_usuario;
    this.es_mecanico = es_mecanico;
    this.es_interno = es_interno;
  }
}
module.exports = Empleado;