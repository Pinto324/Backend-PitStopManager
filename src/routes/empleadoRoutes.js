const express = require("express");
const router = express.Router();
const EmpleadoController = require("../controllers/EmpleadoController");
/**
 * @swagger
 * /empleado/{esMecanico}/{esInterno}:
 *   get:
 *     summary: Obtiene empleados filtrando por esMecanico y esInterno
 *     description: Retorna empleados según los valores de esMecanico y esInterno. Si el valor es 3 se ignora el filtro correspondiente.
 *     tags:
 *       - Empleado
 *     parameters:
 *       - in: path
 *         name: esMecanico
 *         required: true
 *         schema:
 *           type: integer
 *           enum: [0,1,3]
 *         description: Filtra empleados por esMecanico (0=No, 1=Sí, 3=Ignorar)
 *       - in: path
 *         name: esInterno
 *         required: true
 *         schema:
 *           type: integer
 *           enum: [0,1,3]
 *         description: Filtra empleados por esInterno (0=No, 1=Sí, 3=Ignorar)
 *     responses:
 *       200:
 *         description: Lista de empleados filtrados
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
 *                   id_usuario:
 *                     type: integer
 *                     example: 2
 *                   es_mecanico:
 *                     type: boolean
 *                     example: true
 *                   es_interno:
 *                     type: boolean
 *                     example: false
 *       500:
 *         description: Error al obtener empleados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al encontrar vehículos con ID Cliente Empleado"
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
 * /especialista:
 *   get:
 *     summary: Obtiene todos los especialistas
 *     description: Retorna empleados que tengan al menos una especialidad asignada.
 *     tags:
 *       - Empleado
 *     responses:
 *       200:
 *         description: Lista de especialistas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_empleado:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: "Juan"
 *                   apellido:
 *                     type: string
 *                     example: "Pérez"
 *                   especialidad:
 *                     type: string
 *                     example: "Mecánica General"
 *       500:
 *         description: Error al obtener especialistas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al encontrar especialistas"
 *                 error:
 *                   type: string
 *                   example: "Detalle del error interno"
 *
 * /especialista/{idTE}:
 *   get:
 *     summary: Obtiene especialistas por tipo de especialidad
 *     description: Retorna empleados que tengan asignada una especialidad específica.
 *     tags:
 *       - Empleado
 *     parameters:
 *       - in: path
 *         name: idTE
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de tipo de especialidad
 *     responses:
 *       200:
 *         description: Lista de especialistas filtrados por tipo de especialidad
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_empleado:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: "Juan"
 *                   apellido:
 *                     type: string
 *                     example: "Pérez"
 *                   especialidad:
 *                     type: string
 *                     example: "Mecánica General"
 *       500:
 *         description: Error al obtener especialistas por tipo de especialidad
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al encontrar especialistas"
 *                 error:
 *                   type: string
 *                   example: "Detalle del error interno"
 */

router.get("/empleado/:esMecanico/:esInterno", EmpleadoController.getAllByMecanico.bind(EmpleadoController));
router.get("/especialista", (req, res) => EmpleadoController.getAllEspecialistas(req, res));
router.get("/especialista/:idTE", (req, res) => EmpleadoController.getAllEspecialistaByTipoEspecialidad(req, res));

module.exports = router;