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


router.get("/cliente/", UsuarioController.getClientes.bind(UsuarioController));
/**
 * @swagger
 * /api/cliente/vehiculos/{id}:
 *   get:
 *     summary: Obtener vehículos de un cliente por ID de usuario
 *     description: Retorna una lista de todos los vehículos y el estado de sus órdenes de reparación, asociados a un cliente específico.
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: El ID del usuario (cliente).
 *     responses:
 *       200:
 *         description: Lista de vehículos del cliente obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_usuario:
 *                     type: integer
 *                     description: El ID del usuario.
 *                     example: 14
 *                   nombre:
 *                     type: string
 *                     description: El nombre del cliente.
 *                     example: "Cliente1"
 *                   apellido:
 *                     type: string
 *                     description: El apellido del cliente.
 *                     example: "Cliente1"
 *                   id_vehiculo:
 *                     type: integer
 *                     description: El ID del vehículo.
 *                     example: 3
 *                   marca:
 *                     type: string
 *                     description: La marca del vehículo.
 *                     example: "Mitsubishi"
 *                   modelo:
 *                     type: string
 *                     description: El modelo del vehículo.
 *                     example: "Lancer"
 *                   placas:
 *                     type: string
 *                     description: Las placas del vehículo.
 *                     example: "P2134XS"
 *                   id:
 *                     type: integer
 *                     description: El id de la orden de reparación.
 *                     example: "1"
 *                   estado_orden:
 *                     type: string
 *                     description: El estado de la orden de reparación del vehículo.
 *                     example: "Aprobado por el Cliente"
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Error del servidor"
 *               error: "Database connection error"
 */
router.get("/cliente/vehiculos/:id", UsuarioController.ObtenerDatosDeVehiculos.bind(UsuarioController));

router.get("/cliente/detalle/:id", UsuarioController.ObtenerDatosDeVehiculos.bind(UsuarioController));

module.exports = router;