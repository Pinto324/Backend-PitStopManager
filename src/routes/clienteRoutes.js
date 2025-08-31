const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/UsuarioController");
/**
 * @swagger
 * /cliente/:
 *   get:
 *     summary: Obtener todos los clientes
 *     description: >
 *       Retorna una lista de usuarios que tienen asignado el rol de **Cliente** (`rol = 2`).  
 *       Solo se devuelven registros de la tabla `Usuario` cuyo campo `rol` es igual a `2`.
 *     tags:
 *       - Usuario
 *     responses:
 *       200:
 *         description: Lista de clientes obtenida exitosamente.
 *         content:
 *           application/json:
 *             example:
 *               [
 *                 {
 *                   "id": 12,
 *                   "nombre": "Juan",
 *                   "apellido": "Pérez",
 *                   "username": "juanperez",
 *                   "email": "juanperez@example.com",
 *                   "telefono": "+50212345678",
 *                   "rol": 2,
 *                   "correo_verificado": true,
 *                   "verificacion_activa": false
 *                 },
 *                 {
 *                   "id": 15,
 *                   "nombre": "María",
 *                   "apellido": "López",
 *                   "username": "marialopez",
 *                   "email": "maria@example.com",
 *                   "telefono": "+50287654321",
 *                   "rol": 2,
 *                   "correo_verificado": false,
 *                   "verificacion_activa": true
 *                 }
 *               ]
 *       500:
 *         description: Error en el servidor al consultar los clientes.
 *         content:
 *           application/json:
 *             example:
 *               {
 *                 "message": "Error al encontrar Clientes Usuario",
 *                 "name": "Error",
 *                 "code": "unknown",
 *                 "errorMessage": "Detalles del error interno"
 *               }
 */


router.get("/cliente/", UsuarioController.getClientes.bind(EmpleadoOrdenReparacionController));

module.exports = router;