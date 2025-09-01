const express = require("express");
const router = express.Router();
const OrdenReparacionController = require("../controllers/OrdenReparacionController");
const authenticateToken = require("../security/authMiddleware");
const authorize = require("../security/authorize");

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

/**
 * @swagger
 * /api/ordenreparacion/vehiculo/{id}:
 *   get:
 *     summary: Obtener órdenes de reparación por ID de vehículo
 *     description: Retorna una lista de todas las órdenes de reparación asociadas a un vehículo específico.
 *     tags: [OrdenReparacion]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: El ID del vehículo.
 *     responses:
 *       200:
 *         description: Lista de órdenes de reparación obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_orden:
 *                     type: integer
 *                     description: El ID de la orden de reparación.
 *                     example: 4
 *                   fecha_ingreso:
 *                     type: string
 *                     format: date-time
 *                     description: La fecha de ingreso del vehículo al taller.
 *                     example: "2025-09-01T06:00:00.000Z"
 *                   hora_ingreso:
 *                     type: string
 *                     description: La hora de ingreso del vehículo al taller.
 *                     example: "02:31:10"
 *                   fecha_egreso:
 *                     type: string
 *                     format: date-time
 *                     description: La fecha de egreso del vehículo del taller.
 *                     example: "2025-09-11T06:00:00.000Z"
 *                   hora_egreso:
 *                     type: string
 *                     description: La hora de egreso del vehículo del taller.
 *                     example: "02:33:00"
 *                   estado_orden:
 *                     type: string
 *                     description: El estado actual de la orden de reparación.
 *                     example: "En curso"
 *                   nombre_servicio:
 *                     type: string
 *                     description: El nombre del servicio de reparación.
 *                     example: "Cambio de llantas"
 *                   descripcion_servicio:
 *                     type: string
 *                     description: Una descripción detallada del servicio.
 *                     example: "Cambio de llantas"
 *                   precio_servicio:
 *                     type: number
 *                     description: El costo del servicio.
 *                     example: 500
 *                   es_correctivo:
 *                     type: integer
 *                     description: Indica si el servicio es correctivo (1) o no (0).
 *                     example: 0
 *                   estado_trabajo:
 *                     type: string
 *                     description: El estado del trabajo individual.
 *                     example: "Pendiente"
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Error del servidor"
 *               error: "Database connection error"
 */
router.get("/ordenreparacion/vehiculo/:id", OrdenReparacionController.getWorkVehiculoByID.bind(OrdenReparacionController));
/**
 * @swagger
 * /api/ordenreparacion/Reporte/Trabajo:
 *   post:
 *     summary: Generar un reporte de órdenes de trabajo por rango de fechas
 *     description: Retorna un reporte detallado de las órdenes de trabajo completadas en un rango de fechas específico.
 *     tags: [OrdenReparacion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fecha_inicio
 *               - fecha_final
 *             properties:
 *               fecha_inicio:
 *                 type: string
 *                 format: date
 *                 description: La fecha de inicio del rango del reporte (formato YYYY-MM-DD).
 *                 example: "2024-01-01"
 *               fecha_final:
 *                 type: string
 *                 format: date
 *                 description: La fecha de fin del rango del reporte (formato YYYY-MM-DD).
 *                 example: "2024-12-31"
 *     responses:
 *       200:
 *         description: Reporte de órdenes de trabajo generado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_orden:
 *                     type: integer
 *                     description: El ID de la orden de reparación.
 *                     example: 2
 *                   fecha_ingreso:
 *                     type: string
 *                     format: date-time
 *                     description: La fecha de ingreso del vehículo.
 *                     example: "2024-01-15T06:00:00.000Z"
 *                   fecha_egreso:
 *                     type: string
 *                     format: date-time
 *                     description: La fecha de egreso del vehículo.
 *                     example: "2025-09-12T06:00:00.000Z"
 *                   servicio:
 *                     type: string
 *                     description: El nombre del servicio de reparación.
 *                     example: "Cambio de aceite y filtro"
 *                   descripcion:
 *                     type: string
 *                     description: Descripción del servicio realizado.
 *                     example: "Cambio completo de aceite del motor y reemplazo del filtro de aceite"
 *                   precio:
 *                     type: number
 *                     description: El precio del servicio.
 *                     example: 8500
 *                   estado_trabajo:
 *                     type: string
 *                     description: El estado del trabajo.
 *                     example: "Completado"
 *                   mecanico_nombre:
 *                     type: string
 *                     description: El nombre del mecánico que realizó el trabajo.
 *                     example: "Empleado1"
 *                   mecanico_apellido:
 *                     type: string
 *                     description: El apellido del mecánico.
 *                     example: "Empleadoo1"
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: "Error del servidor"
 *               error: "Database connection error"
 */
router.post("/ordenreparacion/Reporte/Trabajo", OrdenReparacionController.reporteTrabajoPeriodo.bind(OrdenReparacionController));
module.exports = router;