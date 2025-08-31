const express = require("express");
const router = express.Router();
const OrdenReparacionController = require("../controllers/OrdenReparacionController");

/**
 * @swagger
 * /ordenreparacion/idVehiculo/{idVehiculo}:
 *   get:
 *     summary: Obtiene las órdenes de reparación asociadas a un vehículo por su ID
 *     tags: [OrdenReparacion]
 *     parameters:
 *       - in: path
 *         name: idVehiculo
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del vehículo
 *         example: 3
 *     responses:
 *       200:
 *         description: Lista de órdenes de reparación del vehículo
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 10
 *                   id_vehiculo:
 *                     type: integer
 *                     example: 3
 *                   fecha_ingreso:
 *                     type: string
 *                     format: date
 *                     example: "2025-08-28"
 *                   hora_ingreso:
 *                     type: string
 *                     format: time
 *                     example: "09:00:00"
 *                   fecha_egreso:
 *                     type: string
 *                     format: date
 *                     example: "2025-08-30"
 *                   hora_egreso:
 *                     type: string
 *                     format: time
 *                     example: "14:00:00"
 *                   estado:
 *                     type: integer
 *                     example: 1
 *       500:
 *         description: Error al obtener las órdenes por ID Vehículo
 *         content:
 *           application/json:
 *             example:
 *               message: "Error al encontrar ordenes de reparación con ID Vehículo OrdenReparacion"
 *               name: "Error"
 *               code: "unknown"
 *               errorMessage: "Error al consultar base de datos"
 */

/**
 * @swagger
 * /ordenreparacion/placas/{placas}:
 *   get:
 *     summary: Obtiene las órdenes de reparación asociadas a un vehículo por su número de placas
 *     tags: [OrdenReparacion]
 *     parameters:
 *       - in: path
 *         name: placas
 *         required: true
 *         schema:
 *           type: string
 *         description: Número de placas del vehículo
 *         example: "ABC-1234"
 *     responses:
 *       200:
 *         description: Lista de órdenes de reparación del vehículo encontrado por placas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 12
 *                   id_vehiculo:
 *                     type: integer
 *                     example: 5
 *                   fecha_ingreso:
 *                     type: string
 *                     format: date
 *                     example: "2025-08-29"
 *                   hora_ingreso:
 *                     type: string
 *                     format: time
 *                     example: "10:30:00"
 *                   fecha_egreso:
 *                     type: string
 *                     format: date
 *                     example: "2025-08-30"
 *                   hora_egreso:
 *                     type: string
 *                     format: time
 *                     example: "15:00:00"
 *                   estado:
 *                     type: integer
 *                     example: 2
 *       500:
 *         description: Error al obtener las órdenes por placas
 *         content:
 *           application/json:
 *             example:
 *               message: "Error al encontrar ordenes de reparación con ID Vehículo OrdenReparacion"
 *               name: "Error"
 *               code: "unknown"
 *               errorMessage: "Error al consultar base de datos"
 */

/**
 * @swagger
 * /ordenreparacion/estado/{estado}:
 *   get:
 *     summary: Obtener órdenes de reparación por estado
 *     description: Retorna todas las órdenes de reparación que tengan el estado especificado.
 *     tags: 
 *       - OrdenReparacion
 *     parameters:
 *       - in: path
 *         name: estado
 *         required: true
 *         schema:
 *           type: string
 *         description: Estado de la orden de reparación (ej. "Pendiente", "En Proceso", "Finalizada").
 *     responses:
 *       200:
 *         description: Lista de órdenes de reparación con el estado indicado.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 12
 *                   cliente:
 *                     type: string
 *                     example: "Juan Pérez"
 *                   vehiculo:
 *                     type: string
 *                     example: "Toyota Corolla 2020"
 *                   fecha_ingreso:
 *                     type: string
 *                     format: date
 *                     example: "2025-08-30"
 *                   hora_ingreso:
 *                     type: string
 *                     example: "08:30:00"
 *                   estado:
 *                     type: string
 *                     example: "Pendiente"
 *       500:
 *         description: Error al encontrar órdenes de reparación por estado.
 */

router.get("/ordenreparacion/idVehiculo/:idVehiculo", OrdenReparacionController.getByIDVehiculo.bind(OrdenReparacionController));
router.get("/ordenreparacion/placas/:placas", OrdenReparacionController.getByPlacaVehiculo.bind(OrdenReparacionController));
router.get("/ordenreparacion/estado/:estado", OrdenReparacionController.getByEstado.bind(OrdenReparacionController));
module.exports = router;