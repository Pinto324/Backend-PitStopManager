const Model = require("../controllers/ModelController");
const cripto = require("../security/cripto");

class LoginService {
  async loginUser(data) {
    try {
      const { username, password } = data;

      if (!username || !password) {
        throw new Error("Credenciales incompletas");
      }

      const passwordEncriptado = await cripto.encriptar(password);
      // Usar el método del Model
      const usuario = await Model.findByCredentials(
        username,
        passwordEncriptado
      );
      return usuario;
    } catch (error) {
      console.error("❌ Error en LoginService:", error.message);
      throw error;
    }
  }

  async recuperacionPassword(data) {
    try {
      const { username } = data;

      if (!username) {
        throw new Error("Credenciales incompletas");
      }
      // Usar el método del Model
      const querry = `
            SELECT * FROM Usuario
            WHERE (username = ? OR email = ?) 
            LIMIT 1
        `;
      const Parametros = [username, username];
      const usuario = await Model.executeSelect(querry, Parametros);

      return usuario;
    } catch (error) {
      console.error("❌ Error en LoginService:", error.message);
      throw error;
    }
  }
}

module.exports = new LoginService();
