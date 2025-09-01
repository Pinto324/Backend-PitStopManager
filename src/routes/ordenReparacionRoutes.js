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
 * /api/ordenreparacion/trabajos:
 *   get:
 *     summary: Ruta protegida trabajos del empleado (requiere token JWT)
 *     description: Accede a esta ruta únicamente con un token válido generado en el login, aqui te devuelve todos los registros de los datos de los trabajos del usuario
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
router.get("/ordenreparacion/trabajos", authenticateToken, authorize(["Empleado"]), OrdenReparacionController.getWorkByID.bind(OrdenReparacionController));
module.exports = router;