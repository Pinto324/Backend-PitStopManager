const express = require("express");
const router = express.Router();
const InventarioOrdenReparacion = require("../controllers/InventarioOrdenReparacionController");
/**
 * @swagger
 * /inventarioordenreparacion/idOrden/{idOrdenReparacion}:
 *   get:
 *     summary: Obtiene los repuestos usados asociados a una orden de reparación
 *     tags: [InventarioOrdenReparacion]
 *     parameters:
 *       - in: path
 *         name: idOrdenReparacion
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden de reparación
 *     responses:
 *       200:
 *         description: Lista de repuestos usados en la orden de reparación
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   id_inventario:
 *                     type: integer
 *                   id_orden_reparacion:
 *                     type: integer
 *                   cantidad:
 *                     type: integer
 *             examples:
 *               ejemplo1:
 *                 summary: Ejemplo de respuesta con repuestos usados
 *                 value:
 *                   - id: 10
 *                     id_inventario: 3
 *                     id_orden_reparacion: 2
 *                     cantidad: 4
 *                   - id: 11
 *                     id_inventario: 5
 *                     id_orden_reparacion: 2
 *                     cantidad: 2
 *       500:
 *         description: Error al obtener los repuestos usados de la orden de reparación
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
 *               message: "Error al encontrar Repuestos Usados en Orden de Reparación InventarioOrdenReparacion"
 *               name: "Error"
 *               code: "unknown"
 *               errorMessage: "Error al consultar base de datos"
 */

router.get("/inventarioordenreparacion/idOrden/:idOrdenReparacion", InventarioOrdenReparacion.getByIDOrdenReparacion.bind(ServicioOrdenReparacionController));

module.exports = router;