const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/LoginController");
const authenticateToken = require('../security/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Autenticación
 *   description: Manejo de inicio de sesión y verificación de usuario
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Inicia sesión de un usuario
 *     description: Valida credenciales y retorna un JWT en el header `Authorization`. El correo debe estar previamente verificado.
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: "usuario123"
 *               password:
 *                 type: string
 *                 example: "Secr3to!"
 *     responses:
 *       200:
 *         description: Usuario autenticado exitosamente
 *         headers:
 *           Authorization:
 *             description: Token JWT para autenticación
 *             schema:
 *               type: string
 *               example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 usuario:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "64ef29b82f9b7c1a2f9d4a11"
 *                     username:
 *                       type: string
 *                       example: "usuario123"
 *                     correo:
 *                       type: string
 *                       example: "usuario@mail.com"
 *                     rol:
 *                       type: string
 *                       example: "Administrador"
 *       401:
 *         description: Credenciales inválidas o correo no verificado
 *         content:
 *           application/json:
 *             example:
 *               message: "Credenciales inválidas"
 *       500:
 *         description: Error interno
 *         content:
 *           application/json:
 *             example:
 *               message: "Usuario no autenticado"
 */
router.post("/", LoginController.login);
/**
 * @swagger
 * /login/verificar:
 *   post:
 *     summary: Verifica el código enviado al correo del usuario
 *     description: Comprueba que el código de verificación sea válido y no haya expirado.
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - usuarioId
 *               - codigo
 *             properties:
 *               usuarioId:
 *                 type: string
 *                 example: "64ef29b82f9b7c1a2f9d4a11"
 *               codigo:
 *                 type: string
 *                 example: "845123"
 *     responses:
 *       200:
 *         description: Código verificado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "✅ Email verificado correctamente"
 *               verificado: true
 *       400:
 *         description: Código inválido o datos incompletos
 *         content:
 *           application/json:
 *             examples:
 *               datosIncompletos:
 *                 summary: Datos incompletos
 *                 value:
 *                   success: false
 *                   message: "❌ Datos incompletos. Se requiere usuarioId y codigo"
 *               codigoInvalido:
 *                 summary: Código inválido o expirado
 *                 value:
 *                   success: false
 *                   message: "❌ Código inválido o expirado"
 *                   verificado: false
 *       500:
 *         description: Error interno al verificar código
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Error al verificar código"
 *               error: "Database connection error"
 */
router.post("/verificar", LoginController.verificarCodigo);
/**
 * @swagger
 * /login:
 *   get:
 *     summary: Ruta protegida (requiere token JWT)
 *     description: Accede a esta ruta únicamente con un token válido generado en el login.
 *     tags: [Autenticación]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Acceso concedido
 *         content:
 *           application/json:
 *             example:
 *               message: "Acceso concedido a ruta protegida"
 *               user:
 *                 id: "64ef29b82f9b7c1a2f9d4a11"
 *                 username: "usuario123"
 *                 rol: "Administrador"
 *       401:
 *         description: Token inválido o ausente
 *         content:
 *           application/json:
 *             example:
 *               message: "Token no proporcionado o inválido"
 */
router.get('/', authenticateToken, (req, res) => {
    res.json({ message: 'Acceso concedido a ruta protegida', user: req.user });
});
module.exports = router;