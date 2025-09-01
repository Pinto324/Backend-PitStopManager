const express = require("express");
const router = express.Router();
const VehiculoController = require("../controllers/VehiculoController");
/**
 * @swagger
 * /vehiculo/idUser/{idUser}:
 *   get:
 *     summary: Obtiene todos los vehículos asociados a un usuario por su ID
 *     description: Retorna un arreglo de vehículos que pertenecen al usuario especificado.
 *     tags:
 *       - Vehiculo
 *     parameters:
 *       - in: path
 *         name: idUser
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario dueño de los vehículos
 *     responses:
 *       200:
 *         description: Lista de vehículos del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 3
 *                   id_cliente:
 *                     type: integer
 *                     example: 1
 *                   marca:
 *                     type: string
 *                     example: "Honda"
 *                   modelo:
 *                     type: string
 *                     example: "Civic"
 *                   placas:
 *                     type: string
 *                     example: "P456ABC"
 *       500:
 *         description: Error al buscar vehículos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al encontrar vehículos con ID Cliente Vehiculo"
 *                 name:
 *                   type: string
 *                   example: "Error"
 *                 code:
 *                   type: string
 *                   example: "unknown"
 *                 errorMessage:
 *                   type: string
 *                   example: "Detalle del error interno"
 */

router.get("/vehiculo/idUser/:idUser", VehiculoController.getByIDUser.bind(VehiculoController));
/**
 * @swagger
 * /api/vehiculo/Reporte/{id}:
 *   get:
 *     summary: Obtener reporte de un vehículo por su ID
 *     description: Retorna un reporte detallado de un vehículo específico, incluyendo información de sus órdenes de reparación.
 *     tags: [Vehiculo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: El ID del vehículo.
 *     responses:
 *       200:
 *         description: Reporte del vehículo obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_vehiculo:
 *                     type: integer
 *                     description: El ID del vehículo.
 *                     example: 1
 *                   marca:
 *                     type: string
 *                     description: La marca del vehículo.
 *                     example: "Toyota"
 *                   modelo:
 *                     type: string
 *                     description: El modelo del vehículo.
 *                     example: "Corolla"
 *                   placas:
 *                     type: string
 *                     description: Las placas del vehículo.
 *                     example: "P123XYZ"
 *                   id_orden:
 *                     type: integer
 *                     description: El ID de la orden de reparación asociada.
 *                     example: 4
 *                   fecha_ingreso:
 *                     type: string
 *                     format: date-time
 *                     description: La fecha de ingreso del vehículo al taller.
 *                     example: "2025-09-01T06:00:00.000Z"
 *                   fecha_egreso:
 *                     type: string
 *                     format: date-time
 *                     description: La fecha de egreso del vehículo del taller.
 *                     example: "2025-09-11T06:00:00.000Z"
 *                   estado_orden:
 *                     type: string
 *                     description: El estado de la orden de reparación.
 *                     example: "En curso"
 *                   servicio:
 *                     type: string
 *                     description: El nombre del servicio realizado.
 *                     example: "Cambio de llantas"
 *                   descripcion:
 *                     type: string
 *                     description: Una descripción detallada del servicio.
 *                     example: "Cambio de llantas"
 *                   precio:
 *                     type: number
 *                     description: El precio del servicio.
 *                     example: 500
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Error del servidor"
 *               error: "Database connection error"
 */
router.get("/vehiculo/Reporte/:id", VehiculoController.getByIDVehiculo.bind(VehiculoController));

module.exports = router;