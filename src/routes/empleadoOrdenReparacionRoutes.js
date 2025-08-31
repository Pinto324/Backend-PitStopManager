const express = require("express");
const router = express.Router();
const EmpleadoOrdenReparacionController = require("../controllers/EmpleadoOrdenReparacionController");
/**
 * @swagger
 * /empleadoordenreparacion/empleadoDisponible/{idOrden}:
 *   get:
 *     summary: Obtener empleados disponibles para una orden de reparación
 *     description: >
 *       Retorna la lista de empleados que están libres durante el intervalo de tiempo de una orden de reparación,
 *       tomando como referencia la `fecha_ingreso` + `hora_ingreso` y la `fecha_egreso` + `hora_egreso` de la orden.
 *     tags:
 *       - EmpleadoOrdenReparacion
 *     parameters:
 *       - in: path
 *         name: idOrden
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden de reparación a consultar.
 *     responses:
 *       200:
 *         description: Lista de empleados disponibles en el rango de tiempo de la orden.
 *         content:
 *           application/json:
 *             example:
 *               [
 *                 {
 *                   "idEmpleado": 7,
 *                   "nombre": "Carlos Pérez",
 *                   "apellido": "Pérez",
 *                   "disponibleDesde": "2025-08-30 10:00:00",
 *                   "disponibleHasta": "2025-08-30 18:00:00"
 *                 },
 *                 {
 *                   "idEmpleado": 12,
 *                   "nombre": "María López",
 *                   "especialidad": "Electricista",
 *                   "disponibleDesde": "2025-08-30 09:30:00",
 *                   "disponibleHasta": "2025-08-30 17:00:00"
 *                 }
 *               ]
 *       404:
 *         description: No se encontró la orden de reparación con el ID proporcionado.
 *         content:
 *           application/json:
 *             example:
 *               {
 *                 "message": "No se encontró la orden de reparación con ID 123"
 *               }
 *       500:
 *         description: Error interno al intentar obtener empleados disponibles.
 *         content:
 *           application/json:
 *             example:
 *               {
 *                 "message": "Error al encontrar Empleados libres según ID de Orden Reparacion",
 *                 "errorMessage": "Detalles del error"
 *               }
 */

router.get("/empleadoordenreparacion/empleadoDisponible/:idOrden", EmpleadoOrdenReparacionController.getEmpleadosDisponibles.bind(EmpleadoOrdenReparacionController));

module.exports = router;