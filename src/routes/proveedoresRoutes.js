const express = require("express");
const router = express.Router();
const ProveedorController = require("../controllers/ProveedorController");
const ProveedorRespuestoController = require("../controllers/ProveedorRepuestoController");

/**
 * @swagger
 * /proveedor/esServicio/{esServicio}:
 *   get:
 *     summary: Obtiene proveedores filtrando por tipo de servicio
 *     description: Retorna un arreglo de proveedores que coinciden con el valor de `es_servicio`.
 *     tags:
 *       - Proveedor
 *     parameters:
 *       - in: path
 *         name: esServicio
 *         required: true
 *         schema:
 *           type: boolean
 *         description: Indica si el proveedor ofrece un servicio (`true`) o no (`false`)
 *     responses:
 *       200:
 *         description: Lista de proveedores filtrados por `es_servicio`
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
 *                     example: 5
 *                   nombre_empresa:
 *                     type: string
 *                     example: "Proveedor XYZ"
 *                   es_servicio:
 *                     type: boolean
 *                     example: true
 *                   descripcion:
 *                     type: string
 *                     example: "Proveedor especializado en repuestos"
 *       500:
 *         description: Error al buscar proveedores
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al encontrar Proveedores por es_servicio Proveedor"
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
 * /proveedor/idUser/{idUser}:
 *   get:
 *     summary: Obtiene proveedores por ID de usuario
 *     description: Retorna un arreglo de proveedores que pertenecen al usuario con ID especificado.
 *     tags:
 *       - Proveedor
 *     parameters:
 *       - in: path
 *         name: idUser
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario asociado al proveedor
 *     responses:
 *       200:
 *         description: Lista de proveedores del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 2
 *                   id_usuario:
 *                     type: integer
 *                     example: 3
 *                   nombre_empresa:
 *                     type: string
 *                     example: "Proveedor ABC"
 *                   es_servicio:
 *                     type: boolean
 *                     example: false
 *                   descripcion:
 *                     type: string
 *                     example: "Proveedor de piezas de motor"
 *       500:
 *         description: Error al buscar proveedores
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al encontrar Proveedores por id_usuario Proveedor"
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

router.get("/proveedor/esServicio/:esServicio", ProveedorController.getByServicio.bind(ProveedorController));
router.get("/proveedor/idUser/:idUser", ProveedorController.getByIDUser.bind(ProveedorController));
//PROVEEDOR REPUESTOS
/**
 * @swagger
 * /proveedorRepuestos/idRepuesto/{idRepuesto}:
 *   get:
 *     summary: Obtiene proveedores que tienen un determinado repuesto
 *     description: Retorna un arreglo de registros de `Proveedor_Repuesto` que contienen el `idRepuesto` especificado.
 *     tags:
 *       - Proveedor_Repuesto
 *     parameters:
 *       - in: path
 *         name: idRepuesto
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del repuesto para buscar proveedores
 *     responses:
 *       200:
 *         description: Lista de proveedores que tienen el repuesto
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
 *                   id_proveedor:
 *                     type: integer
 *                     example: 2
 *                   id_repuesto:
 *                     type: integer
 *                     example: 3
 *                   precio:
 *                     type: number
 *                     format: double
 *                     example: 125.50
 *       500:
 *         description: Error al buscar proveedores por repuesto
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al encontrar Proveedores correspondientes a un Repuesto Proveedor_Repuesto"
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
 * /proveedorRepuestos/idProveedor/{idProveedor}:
 *   get:
 *     summary: Obtiene todos los repuestos de un proveedor específico
 *     description: Retorna un arreglo de registros de `Proveedor_Repuesto` que pertenecen al proveedor con `idProveedor`.
 *     tags:
 *       - Proveedor_Repuesto
 *     parameters:
 *       - in: path
 *         name: idProveedor
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proveedor para buscar sus repuestos
 *     responses:
 *       200:
 *         description: Lista de repuestos de un proveedor
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
 *                   id_proveedor:
 *                     type: integer
 *                     example: 2
 *                   id_repuesto:
 *                     type: integer
 *                     example: 3
 *                   precio:
 *                     type: number
 *                     format: double
 *                     example: 125.50
 *       500:
 *         description: Error al buscar repuestos por proveedor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al encontrar Repuestos correspondientes a un Proveedor Proveedor_Repuesto"
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

router.get("/proveedorRepuestos/idRepuesto/:idRepuesto", ProveedorRespuestoController.getProveedorByIDRepuesto.bind(ProveedorController));
router.get("/proveedorRepuestos/idProveedor/:idProveedor", ProveedorRespuestoController.getRepuestosByIDProveedor.bind(ProveedorController));
module.exports = router;