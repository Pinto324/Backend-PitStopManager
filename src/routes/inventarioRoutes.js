const express = require("express");
const router = express.Router();
const InventarioController = require("../controllers/InventarioController");

/**
 * @swagger
 * /inventario/updateStock/{id}:
 *   put:
 *     summary: Actualiza la cantidad de un inventario por ID
 *     description: Permite abastecer o descontar unidades de un repuesto en inventario.
 *     tags:
 *       - Inventario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del inventario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cantidad:
 *                 type: integer
 *                 example: 10
 *               esAbastecer:
 *                 type: boolean
 *                 example: true
 *             required:
 *               - cantidad
 *               - esAbastecer
 *     responses:
 *       201:
 *         description: Inventario actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Se han agregado 10 unidades de Filtro de Aceite al Inventario"
 *       403:
 *         description: No se puede descontar más unidades de las disponibles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se cuenta con esa cantidad de unidades."
 *       500:
 *         description: Error al actualizar inventario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al actualizar Respuestos con IDRepuesto Inventario"
 *                 name:
 *                   type: string
 *                   example: "Error"
 *                 code:
 *                   type: string
 *                   example: "unknown"
 *                 errorMessage:
 *                   type: string
 *                   example: "Detalle del error interno"
 *
 *
 * /inventario/idRepuesto/{idRepuesto}:
 *   get:
 *     summary: Obtiene inventario por ID de repuesto
 *     description: Retorna un arreglo de registros de inventario asociados a un repuesto específico.
 *     tags:
 *       - Inventario
 *     parameters:
 *       - in: path
 *         name: idRepuesto
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del repuesto a consultar en inventario
 *     responses:
 *       200:
 *         description: Lista de inventario del repuesto
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
 *                   id_repuesto:
 *                     type: integer
 *                     example: 3
 *                   cantidad:
 *                     type: integer
 *                     example: 50
 *                   precio_unitario:
 *                     type: number
 *                     format: double
 *                     example: 125.50
 *       500:
 *         description: Error al buscar inventario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al encontrar Repuestos en Inventario por id_repuesto Inventario"
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

router.put("/inventario/updateStock/:id", InventarioController.updateStockByIDInventario.bind(InventarioController));
router.get("/inventario/idRepuesto/:idRepuesto", InventarioController.getIDInvByIDRepuesto.bind(InventarioController));

module.exports = router;