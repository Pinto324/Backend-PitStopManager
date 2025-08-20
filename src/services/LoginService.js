const Model = require('../controllers/ModelController');
const cripto = require('../security/cripto');

class LoginService {
    async loginUser(data) {
        try {
            const { username, password } = data;

            if (!username || !password) {
                throw new Error('Credenciales incompletas');
            }

            const passwordEncriptado = await cripto.encriptar(password);
            // Usar el método del Model
            const usuario = await Model.findByCredentials(username, passwordEncriptado);
            return usuario;

        } catch (error) {
            console.error("❌ Error en LoginService:", error.message);
            throw error;
        }
    }
}

module.exports = new LoginService();