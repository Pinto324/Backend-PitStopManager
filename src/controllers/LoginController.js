const LoginService = require("../services/LoginService");
//const PersonaService = require("../services/PersonaService");
const RolService = require("../services/RolService");
const CodigoVerificacionService = require('../services/CodigoVerificacionService');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'Pitstop';
class LoginController {
    async login(req, res) {
        try {
            const usuario = await LoginService.loginUser(req.body);
            if (!usuario) {
                return res.status(401).json({ message: "Credenciales inválidas" });
            } else if (!usuario.correo_verificado) {
                return res.status(401).json({ message: "Verifique el correo para poder ingersar" });
            }
            const rol = await RolService.getById(usuario.rol);
            usuario.rol = rol;
            const token = jwt.sign(
                { id: usuario._id, username: usuario.username, rol: usuario.rol },
                SECRET_KEY,
                { expiresIn: '1h' }
            );
            res.setHeader('Authorization', `${token}`);
            res.status(200).json({ usuario });
        } catch (error) {
            res.status(500).json({ message: "Usuario no autenticado", name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }
    async verificarCodigo(req, res) {
        try {
            const { usuarioId, codigo } = req.body;

            // Validar que vengan los datos necesarios
            if (!usuarioId || !codigo) {
                return res.status(400).json({
                    success: false,
                    message: "❌ Datos incompletos. Se requiere usuarioId y codigo"
                });
            }

            console.log(`🔍 Verificando código: username=${usuarioId}, codigo=${codigo}`);

            // Llamar al método que ya tienes
            const verificado = await CodigoVerificacionService.verificarCodigo(usuarioId, codigo);

            if (verificado) {
                res.status(200).json({
                    success: true,
                    message: "✅ Email verificado correctamente",
                    verificado: true
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: "❌ Código inválido o expirado",
                    verificado: false
                });
            }

        } catch (error) {
            console.error('❌ Error en verificarCodigo:', error.message);
            res.status(500).json({
                success: false,
                message: "Error al verificar código",
                error: error.message
            });
        }
    }

}

module.exports = new LoginController();