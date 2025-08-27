const express = require("express");
const router = express.Router();
const VehiculoController = require("../controllers/VehiculoController");
/**
 * @swagger
 * /vehiculo/idUser/{idUser}:
 *   get:
 *     summary: Obtiene todos los vehículos asociados a un usuario por su ID
 *     description: Retorna un arreglo de vehículos que pertenecen al usuario especificado.
 *     tags:
 *       - Vehiculo
 *     parameters:
 *       - in: path
 *         name: idUser
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario dueño de los vehículos
 *     responses:
 *       200:
 *         description: Lista de vehículos del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 3
 *                   id_cliente:
 *                     type: integer
 *                     example: 1
 *                   marca:
 *                     type: string
 *                     example: "Honda"
 *                   modelo:
 *                     type: string
 *                     example: "Civic"
 *                   placas:
 *                     type: string
 *                     example: "P456ABC"
 *       500:
 *         description: Error al buscar vehículos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al encontrar vehículos con ID Cliente Vehiculo"
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

router.get("/vehiculo/idUser/:idUser", VehiculoController.getByIDUser.bind(VehiculoController));

module.exports = router;