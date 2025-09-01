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
/**
 * @swagger
 * /pedido/idProveedor/{idProveedor}/{estado}:
 *   get:
 *     summary: Obtener pedidos por proveedor y estado
 *     description: >
 *       Retorna la lista de pedidos asociados a un proveedor específico, filtrados por estado.
 *       La información incluye el ID del pedido, la fecha del pedido, la fecha de entrega y el estado.
 *     parameters:
 *       - in: path
 *         name: idProveedor
 *         required: true
 *         description: ID único del proveedor.
 *         schema:
 *           type: integer
 *           example: 3
 *       - in: path
 *         name: estado
 *         required: true
 *         description: Estado del pedido (ejemplo: 1 = Activo, 0 = Inactivo).
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Lista de pedidos encontrados para el proveedor y estado especificado.
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
 *                     example: "2025-08-28"
 *                   fecha_entrega:
 *                     type: string
 *                     format: date
 *                     example: "2025-09-05"
 *                   estado:
 *                     type: integer
 *                     example: 1
 *       500:
 *         description: Error al encontrar órdenes de reparación del empleado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al encontrar ordenes de reparación del empleado Pedido"
 *                 name:
 *                   type: string
 *                   example: "DatabaseError"
 *                 code:
 *                   type: string
 *                   example: "unknown"
 *                 errorMessage:
 *                   type: string
 *                   example: "Error en la consulta SQL"
 */
router.get("/pedido/idProveedor/:idProveedor/:estado", PedidoDetalleController.getPedidoByIDProveedorEstadoPedido.bind(PedidoDetalleController));
/**
 * @swagger
 * /pedidodetalle/idPedidoDetalle/{id}:
 *   put:
 *     summary: Actualizar el estado de un detalle de pedido
 *     description: >
 *       Permite actualizar el estado de un registro en la tabla `Pedido_Detalle` según su ID.
 *       Solo se actualiza el campo `estado`, Recuerda que si se desea aprobar el detallePedido, se debe colocar, estado: 3.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único del detalle del pedido.
 *         schema:
 *           type: integer
 *           example: 12
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               estado:
 *                 type: integer
 *                 description: Nuevo estado para el detalle del pedido.
 *                 example: 2
 *     responses:
 *       201:
 *         description: Estado del detalle de pedido actualizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Stock actualizado"
 *                 id:
 *                   type: integer
 *                   example: 12
 *       400:
 *         description: Petición inválida (por ejemplo, faltan parámetros o valores no válidos).
 *       500:
 *         description: Error interno al actualizar el estado del detalle del pedido.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al actualizar Respuestos con IDRepuesto: Error en la consulta SQL"
 */
router.put("/pedidodetalle/idPedidoDetalle/:id", PedidoDetalleController.updateEstadoByIDPedidoDetalle.bind(PedidoDetalleController));
module.exports = router;