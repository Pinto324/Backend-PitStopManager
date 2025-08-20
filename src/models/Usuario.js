class Usuario {
  constructor(id, nombre, apellido, username, password, rol, email, telefono, correo_verificado) {
    this.id = id;
    this.rol = rol;
    this.nombre = nombre;
    this.apellido = apellido;
    this.username = username;
    this.password = password;
    this.email = email;
    this.telefono = telefono;
    this.correo_verificado = correo_verificado;
  }
}

module.exports = Usuario;