const express = require("express");
const router = express.Router();
const PedidoController = require("../controllers/PedidoController");
/**
 * @swagger
 * /pedido/idPedido/{id}:
 *   put:
 *     summary: Actualizar el estado de un pedido por ID
 *     description: >
 *       Permite actualizar el campo `estado` de un pedido específico utilizando su `idPedido`.
 *     tags:
 *       - Pedido
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único del pedido a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               estado:
 *                 type: string
 *                 example: "Entregado"
 *     responses:
 *       201:
 *         description: Estado del pedido actualizado correctamente
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
 *                   example: 5
 *       400:
 *         description: Petición inválida, faltan parámetros o datos incorrectos
 *       500:
 *         description: Error interno del servidor al actualizar el pedido
 */

router.put("/pedido/idPedido/:id", PedidoController.updateEstadoPedidoByIDPedido.bind(PedidoController));
router.post("/pedido/aprovedPedido/:id", PedidoController.aprovePedido.bind(PedidoController));
module.exports = router;