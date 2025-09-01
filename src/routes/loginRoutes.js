const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/LoginController");
const authenticateToken = require("../security/authMiddleware");
const authorize = require("../security/authorize");
const OrdenReparacionController = require("../controllers/OrdenReparacionController");

/**
 * @swagger
 * tags:
 *   name: Autenticación
 *   description: Manejo de inicio de sesión y verificación de usuario
 */

/**
 * @swagger
 * /api/login:
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
 *                 example: "prueba5"
 *               password:
 *                 type: string
 *                 example: "1"
 *     responses:
 *       200:
 *         description: Usuario autenticado exitosamente y no tiene autenticación de 2 pasos
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
 *                     id:
 *                       type: string
 *                       example: "1"
 *                     username:
 *                       type: string
 *                       example: "usuario123"
 *                     rol:
 *                       type: object
 *                       properties:
 *                          id:
 *                              type: int
 *                              example: "1"
 *                          rol:
 *                              type: string
 *                              example: "Administrador"
 *       301:
 *         description: Falta la verificación del correo del usuario para poder ingresar
 *         headers:
 *           Authorization:
 *             description: Token JWT para autenticación
 *             schema:
 *               type: string
 *               example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         content:
 *           application/json:
 *             example:
 *               message: "Verifique el correo para poder ingersar"
 *       302:
 *         description: Cambiar a factor de 2 pasos para poder ingresar el código mandado al correo
 *         headers:
 *           Authorization:
 *             description: Token JWT para autenticación
 *             schema:
 *               type: string
 *               example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         content:
 *           application/json:
 *             example:
 *               message: "Cambiar a factor de 2 pasos"
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
 * /api/login/verificar:
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
 *                 example: "1"
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
router.post("/verificar", LoginController.verificarCodigoRegistro);
/**
 * @swagger
 * /api/login/autenticacion:
 *   post:
 *     summary: Verifica el código enviado al correo
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
 *                 example: "1"
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
 *               message: "✅ Codigo de autenticación correcto"
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
router.post(
  "/autenticacion",
  LoginController.verificarCodigoAutenticacion
);
/**
 * @swagger
 * /api/login/recuperacion:
 *   post:
 *     summary: Envio de codigo de recuperación al usuario por el correo
 *     description: Busca el usuario, ya sea por correo o username y le manda un correo con el código devuelve el id para en la siguiente view mandar el código y el id a la ruta siguiente
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username/correo
 *             properties:
 *               username:
 *                 type: string
 *                 example: "user"
 *     responses:
 *       200:
 *         description: Código verificado exitosamente
 *         content:
 *           application/json:
 *             example:
 *              success: true
 *              message: "Email con codigo enviado"
 *              userId: usuario.id
 *       500:
 *         description: Error al recuperar contraseña
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Error al verificar código"
 *               error: "Database connection error"
 */
router.post("/recuperacion", LoginController.verificarCodigoAutenticacion);
/**
 * @swagger
 * /api/login:
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
router.get("/", authenticateToken, authorize(["Proveedor"]), (req, res) => {
  res.json({ message: "Acceso concedido a ruta protegida", user: req.user });
});
/**
 * @swagger
 * /api/login/trabajos/:id:
 *   get:
 *     summary: Ruta protegida trabajos del empleado (requiere token JWT)
 *     description: Accede a esta ruta únicamente con un token válido generado en el login, aqui te devuelve todos los registros de los datos de los trabajos del usuario
 *     tags: [OrdenReparacion]
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
 *                   id_asignacion: 1
 *                   id_empleado: 5
 *                   id_orden_reparacion: 10
 *                   es_especialista: true
 *                   id_vehiculo: 2
 *                   fecha_ingreso: "2024-01-15"
 *                   hora_ingreso: "09:30:00"
 *                   fecha_egreso: "2024-01-17"
 *                   hora_egreso: "16:45:00"
 *                   estado_orden: "En Curso"
 *                   estado_descripcion: "Trabajo en progreso"
 *                   marca: "Toyota"
 *                   modelo: "Corolla"
 *                   placas: "ABC123"
 *                   cantidad_servicios: 3
 *       401:
 *         description: Token inválido o ausente
 *         content:
 *           application/json:
 *             example:
 *               message: "Token no proporcionado o inválido"
 */
router.get("/trabajos/:id", authenticateToken, authorize(["Empleado"]), OrdenReparacionController.getWorkByID.bind(OrdenReparacionController));
module.exports = router;
