const express = require("express");
const router = express.Router();
const PedidoDetalleController = require("../controllers/PedidoDetalleController");
/**
 * @swagger
 * /pedidodetalle/idPedido/{idPedido}:
 *   get:
 *     summary: Obtener detalles de un pedido
 *     description: >
 *       Retorna la lista de repuestos solicitados y su información correspondiente a un pedido específico.
 *     tags: [Pedido_Detalle]
 *     parameters:
 *       - in: path
 *         name: idPedido
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del pedido para obtener sus detalles
 *     responses:
 *       200:
 *         description: Lista de detalles del pedido obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   id_pedido:
 *                     type: integer
 *                     example: 10
 *                   id_proveedor_repuesto:
 *                     type: integer
 *                     example: 5
 *                   estado:
 *                     type: integer
 *                     example: 1
 *                   cantidad_solicitada:
 *                     type: integer
 *                     example: 20
 *       404:
 *         description: No se encontraron detalles para el pedido especificado
 *       500:
 *         description: Error al obtener los detalles del pedido
 */

router.get("/pedidodetalle/idPedido/:idPedido", PedidoDetalleController.getPedidoDetalleByIdPedido.bind(PedidoDetalleController));
/**
 * @swagger
 * /pedido/idProveedor/{idProveedor}:
 *   get:
 *     summary: Obtener pedidos por proveedor
 *     description: >
 *       Retorna todos los pedidos asociados a un proveedor específico.  
 *       Cada pedido aparecerá solo una vez, aunque tenga múltiples detalles.
 *     tags: [Pedido]
 *     parameters:
 *       - in: path
 *         name: idProveedor
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proveedor para obtener sus pedidos
 *     responses:
 *       200:
 *         description: Lista de pedidos obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 15
 *                   fecha_pedido:
 *                     type: string
 *                     format: date
 *                     example: "2025-09-01"
 *                   fecha_entrega:
 *                     type: string
 *                     format: date
 *                     example: "2025-09-08"
 *                   estado:
 *                     type: integer
 *                     example: 1
 *       404:
 *         description: No se encontraron pedidos para el proveedor especificado
 *       500:
 *         description: Error al obtener los pedidos del proveedor
 */
router.get("/pedido/idProveedor/:idProveedor", PedidoDetalleController.getPedidoByIDProveedor.bind(PedidoDetalleController));
module.exports = router;