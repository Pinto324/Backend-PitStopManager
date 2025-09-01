const express = require("express");
const router = express.Router();
const ServicioOrdenReparacionController = require("../controllers/ServicioOrdenReparacionController");
/**
 * @swagger
 * /servicioordenreparacion/idOrden/{idOrden}:
 *   get:
 *     summary: Obtiene los servicios asociados a una orden de reparación
 *     tags: [ServicioOrdenReparacion]
 *     parameters:
 *       - in: path
 *         name: idOrden
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden de reparación
 *     responses:
 *       200:
 *         description: Lista de servicios asociados a la orden de reparación
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   id_orden_reparacion:
 *                     type: integer
 *                   id_servicio:
 *                     type: integer
 *                   id_estado_trabajo:
 *                     type: integer
 *             examples:
 *               ejemplo1:
 *                 summary: Ejemplo de respuesta con servicios
 *                 value:
 *                   - id: 5
 *                     id_orden_reparacion: 2
 *                     id_servicio: 1
 *                     id_estado_trabajo: 2
 *                   - id: 6
 *                     id_orden_reparacion: 2
 *                     id_servicio: 3
 *                     id_estado_trabajo: 1
 *       500:
 *         description: Error al obtener los servicios de la orden de reparación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 name:
 *                   type: string
 *                 code:
 *                   type: string
 *                 errorMessage:
 *                   type: string
 *             example:
 *               message: "Error al encontrar Servicios de una Orden Reparación con ID Orden Reparación ServicioOrdenReparacion"
 *               name: "Error"
 *               code: "unknown"
 *               errorMessage: "Error al consultar base de datos"
 */

router.get("/servicioordenreparacion/idOrden/:idOrdenReparacion", ServicioOrdenReparacionController.getByOrdenReparacion.bind(ServicioOrdenReparacionController));

module.exports = router;