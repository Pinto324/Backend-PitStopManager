const express = require("express");
const router = express.Router();
const RolController = require("../controllers/RolController");
const UsuarioController = require("../controllers/UsuarioController");
const EmpleadoController = require("../controllers/EmpleadoController");
const TipoEspecialidadController = require("../controllers/TipoEspecialidadController");
const EspecialidadController = require("../controllers/EspecialidadController");
const VehiculoController = require("../controllers/VehiculoController");
const ProveedorController = require("../controllers/ProveedorController");
const RepuestoController = require("../controllers/RepuestoController");
const ProveedorRepuestoController = require("../controllers/ProveedorRepuestoController");
const EstadoPedidoController = require("../controllers/EstadoPedidoController");
const PedidoController = require("../controllers/PedidoController");
const EstadoPedidoDetalleController = require("../controllers/EstadoPedidoDetalleController");
const PedidoDetalleController = require("../controllers/PedidoDetalleController");
const InventarioController = require("../controllers/InventarioController");
const EstadoOrdenReparacionController = require("../controllers/EstadoOrdenReparacionController");
const OrdenReparacionController = require("../controllers/OrdenReparacionController");
const ServicioController = require("../controllers/ServicioController");
const EstadoTrabajoController = require("../controllers/EstadoTrabajoController");
const ServicioOrdenReparacionController = require("../controllers/ServicioOrdenReparacionController");
const InventarioOrdenReparacionController = require("../controllers/InventarioOrdenReparacionController");
const FacturaController = require("../controllers/FacturaController");
const PagoController = require("../controllers/PagoController");
const ChatUsuarioController = require("../controllers/ChatUsuarioController");
const TipoNotificacionController = require("../controllers/TipoNotificacionController");
const NotificacionController = require("../controllers/NotificacionController");
const EmpleadoOrdenReparacionController = require("../controllers/EmpleadoOrdenReparacionController");
const TipoReporteController = require("../controllers/TipoReporteController");
const ReporteController = require("../controllers/ReporteController");
const CodigoVerificacionController = require("../controllers/CodigoVerificacionController");
const ReciboController = require("../controllers/ReciboController");


// Rol Routes
/**
 * @swagger
 * /rol:
 *   get:
 *     summary: Obtiene todos los roles
 *     tags:
 *       - Rol
 *     responses:
 *       200:
 *         description: Lista de roles
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
 *                   rol:
 *                     type: string
 *                     example: Administrador
 *       500:
 *         description: Error interno del servidor
 */
router.get("/rol", RolController.getAll.bind(RolController));

/**
 * @swagger
 * /rol/{id}:
 *   get:
 *     summary: Obtiene un rol por ID
 *     tags:
 *       - Rol
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del rol a obtener
 *     responses:
 *       200:
 *         description: Rol encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 rol:
 *                   type: string
 *                   example: Administrador
 *       404:
 *         description: Rol no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/rol/:id", RolController.getByID.bind(RolController));

/**
 * @swagger
 * /rol:
 *   post:
 *     summary: Crea un nuevo rol
 *     tags:
 *       - Rol
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rol:
 *                 type: string
 *                 example: Proveedor
 *     responses:
 *       201:
 *         description: Rol creado correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/rol", RolController.insertToDB.bind(RolController));

/**
 * @swagger
 * /rol/{id}:
 *   put:
 *     summary: Actualiza un campo de un rol por ID
 *     tags:
 *       - Rol
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del rol a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               columnName:
 *                 type: string
 *                 example: rol
 *               value:
 *                 type: string
 *                 example: Proveedor
 *     responses:
 *       200:
 *         description: Rol actualizado correctamente
 *       404:
 *         description: Rol no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put("/rol/:id", RolController.updateById.bind(RolController));

/**
 * @swagger
 * /rol/{id}:
 *   delete:
 *     summary: Elimina un rol por ID
 *     tags:
 *       - Rol
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del rol a eliminar
 *     responses:
 *       200:
 *         description: Rol eliminado correctamente
 *       404:
 *         description: Rol no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/rol/:id", RolController.deleteById.bind(RolController));


// Usuario Routes

/**
 * @swagger
 * /usuario:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags:
 *       - Usuario
 *     responses:
 *       200:
 *         description: Lista de usuarios
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
 *                   nombre:
 *                     type: string
 *                     example: Juan
 *                   apellido:
 *                     type: string
 *                     example: Perez
 *                   username:
 *                     type: string
 *                     example: juanp
 *                   password:
 *                     type: string
 *                     example: password
 *                   rol:
 *                     type: integer
 *                     example: 1
 *                   email:
 *                     type: string
 *                     example: 'juan.example.com'
 *                   telefono:
 *                     type: string
 *                     example: "+50212345678"
 *                   correo_verificado:
 *                     type: boolean
 *                     example: true
 *       500:
 *         description: Error interno del servidor
 */
router.get("/usuario", UsuarioController.getAll.bind(UsuarioController));

/**
 * @swagger
 * /usuario/{id}:
 *   get:
 *     summary: Obtiene un usuario por ID
 *     tags:
 *       - Usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a obtener
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nombre:
 *                   type: string
 *                   example: Juan
 *                 apellido:
 *                   type: string
 *                   example: Perez
 *                 username:
 *                   type: string
 *                   example: juanp
 *                 password:
 *                   type: string
 *                   example: password
 *                 rol:
 *                   type: integer
 *                   example: 1
 *                 email:
 *                   type: string
 *                   example: 'juan.example.com'
 *                 telefono:
 *                   type: string
 *                   example: "+50212345678"
 *                 correo_verificado:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/usuario/:id", UsuarioController.getByID.bind(UsuarioController));

/**
 * @swagger
 * /usuario:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags:
 *       - Usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Juan
 *               apellido:
 *                 type: string
 *                 example: Perez
 *               username:
 *                 type: string
 *                 example: juanp
 *               password:
 *                 type: string
 *                 example: 123456
 *               rol:
 *                 type: integer
 *                 example: 1
 *               email:
 *                 type: string
 *                 example: 'juan.example.com'
 *               telefono:
 *                 type: string
 *                 example: "+50212345678"
 *               correo_verificado:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/usuario", UsuarioController.insertToDB.bind(UsuarioController));

/**
 * @swagger
 * /usuario/{id}:
 *   put:
 *     summary: Actualiza un campo de un usuario por ID
 *     tags:
 *       - Usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               columnName:
 *                 type: integer
 *                 example: rol
 *               value:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put("/usuario/:id", UsuarioController.updateById.bind(UsuarioController));

/**
 * @swagger
 * /usuario/{id}:
 *   delete:
 *     summary: Elimina un usuario por ID
 *     tags:
 *       - Usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/usuario/:id", UsuarioController.deleteById.bind(UsuarioController));

/**
 * @swagger
 * /empleado:
 *   get:
 *     summary: Obtiene todos los empleados
 *     tags:
 *       - Empleado
 *     responses:
 *       200:
 *         description: Lista de empleados
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
 *         description: Error interno del servidor
 */
router.get("/empleado", EmpleadoController.getAll.bind(EmpleadoController));

/**
 * @swagger
 * /empleado/{id}:
 *   get:
 *     summary: Obtiene un empleado por ID
 *     tags:
 *       - Empleado
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del empleado a obtener
 *     responses:
 *       200:
 *         description: Empleado encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 id_usuario:
 *                   type: integer
 *                   example: 2
 *                 es_mecanico:
 *                   type: boolean
 *                   example: true
 *                 es_interno:
 *                   type: boolean
 *                   example: false
 *       404:
 *         description: Empleado no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/empleado/:id", EmpleadoController.getByID.bind(EmpleadoController));

/**
 * @swagger
 * /empleado:
 *   post:
 *     summary: Crea un nuevo empleado
 *     tags:
 *       - Empleado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_usuario:
 *                 type: integer
 *                 example: 2
 *               es_mecanico:
 *                 type: boolean
 *                 example: true
 *               es_interno:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       201:
 *         description: Empleado creado correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/empleado", EmpleadoController.insertToDB.bind(EmpleadoController));

/**
 * @swagger
 * /empleado/{id}:
 *   put:
 *     summary: Actualiza un campo de un empleado por ID
 *     tags:
 *       - Empleado
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del empleado a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               columnName:
 *                 type: string
 *                 example: es_mecanico
 *               value:
 *                 type: string
 *                 example: true
 *     responses:
 *       200:
 *         description: Empleado actualizado correctamente
 *       404:
 *         description: Empleado no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put("/empleado/:id", EmpleadoController.updateById.bind(EmpleadoController));

/**
 * @swagger
 * /empleado/{id}:
 *   delete:
 *     summary: Elimina un empleado por ID
 *     tags:
 *       - Empleado
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del empleado a eliminar
 *     responses:
 *       200:
 *         description: Empleado eliminado correctamente
 *       404:
 *         description: Empleado no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/empleado/:id", EmpleadoController.deleteById.bind(EmpleadoController));

// ============================ TIPO ESPECIALIDAD ROUTES ============================
/**
 * @swagger
 * /tipoespecialidad:
 *   get:
 *     summary: Obtiene todos los tipos de especialidad
 *     tags: [TipoEspecialidad]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 tipo_especialidad: "Frenos"
 *               - id: 2
 *                 tipo_especialidad: "Electricidad"
 */
router.get("/tipoespecialidad", TipoEspecialidadController.getAll.bind(TipoEspecialidadController));

/**
 * @swagger
 * /tipoespecialidad/{id}:
 *   get:
 *     summary: Obtiene un tipo de especialidad por ID
 *     tags: [TipoEspecialidad]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               tipo_especialidad: "Transmisión"
 */
router.get("/tipoespecialidad/:id", TipoEspecialidadController.getByID.bind(TipoEspecialidadController));

/**
 * @swagger
 * /tipoespecialidad:
 *   post:
 *     summary: Crea un tipo de especialidad
 *     tags: [TipoEspecialidad]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo_especialidad: { type: string, example: "Frenos" }
 */
router.post("/tipoespecialidad", TipoEspecialidadController.insertToDB.bind(TipoEspecialidadController));

/**
 * @swagger
 * /tipoespecialidad/{id}:
 *   put:
 *     summary: Actualiza un campo de tipo de especialidad
 *     tags: [TipoEspecialidad]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: tipo_especialidad
 *             value: "Motor"
 */
router.put("/tipoespecialidad/:id", TipoEspecialidadController.updateById.bind(TipoEspecialidadController));

/**
 * @swagger
 * /tipoespecialidad/{id}:
 *   delete:
 *     summary: Elimina un tipo de especialidad
 *     tags: [TipoEspecialidad]
 */
router.delete("/tipoespecialidad/:id", TipoEspecialidadController.deleteById.bind(TipoEspecialidadController));


// ============================ ESPECIALIDAD ROUTES ============================
/**
 * @swagger
 * /especialidad:
 *   get:
 *     summary: Obtiene todas las especialidades
 *     tags: [Especialidad]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 id_empleado: 2
 *                 id_tipo_especialidad: 1
 */
router.get("/especialidad", EspecialidadController.getAll.bind(EspecialidadController));

/**
 * @swagger
 * /especialidad/{id}:
 *   get:
 *     summary: Obtiene una especialidad por ID
 *     tags: [Especialidad]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 3
 *               id_empleado: 5
 *               id_tipo_especialidad: 2
 */
router.get("/especialidad/:id", EspecialidadController.getByID.bind(EspecialidadController));

/**
 * @swagger
 * /especialidad:
 *   post:
 *     summary: Crea una especialidad
 *     tags: [Especialidad]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               id_empleado: { type: integer, example: 1 }
 *               id_tipo_especialidad: { type: integer, example: 2 }
 */
router.post("/especialidad", EspecialidadController.insertToDB.bind(EspecialidadController));

/**
 * @swagger
 * /especialidad/{id}:
 *   put:
 *     summary: Actualiza un campo de una especialidad
 *     tags: [Especialidad]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: id_tipo_especialidad
 *             value: 3
 */
router.put("/especialidad/:id", EspecialidadController.updateById.bind(EspecialidadController));

/**
 * @swagger
 * /especialidad/{id}:
 *   delete:
 *     summary: Elimina una especialidad
 *     tags: [Especialidad]
 */
router.delete("/especialidad/:id", EspecialidadController.deleteById.bind(EspecialidadController));


// ============================ VEHICULO ROUTES ============================
/**
 * @swagger
 * /vehiculo:
 *   get:
 *     summary: Obtiene todos los vehículos
 *     tags: [Vehiculo]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 id_cliente: 2
 *                 marca: "Toyota"
 *                 modelo: "Corolla"
 *                 placas: "P123XYZ"
 */
router.get("/vehiculo", VehiculoController.getAll.bind(VehiculoController));

/**
 * @swagger
 * /vehiculo/{id}:
 *   get:
 *     summary: Obtiene un vehículo por ID
 *     tags: [Vehiculo]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 3
 *               id_cliente: 1
 *               marca: "Honda"
 *               modelo: "Civic"
 *               placas: "P456ABC"
 */
router.get("/vehiculo/:id", VehiculoController.getByID.bind(VehiculoController));

/**
 * @swagger
 * /vehiculo:
 *   post:
 *     summary: Crea un vehículo
 *     tags: [Vehiculo]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               id_cliente: { type: integer, example: 1 }
 *               marca: { type: string, example: "Toyota" }
 *               modelo: { type: string, example: "Corolla" }
 *               placas: { type: string, example: "P123XYZ" }
 */
router.post("/vehiculo", VehiculoController.insertToDB.bind(VehiculoController));

/**
 * @swagger
 * /vehiculo/{id}:
 *   put:
 *     summary: Actualiza un campo de un vehículo
 *     tags: [Vehiculo]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: modelo
 *             value: "Rav4"
 */
router.put("/vehiculo/:id", VehiculoController.updateById.bind(VehiculoController));

/**
 * @swagger
 * /vehiculo/{id}:
 *   delete:
 *     summary: Elimina un vehículo
 *     tags: [Vehiculo]
 */
router.delete("/vehiculo/:id", VehiculoController.deleteById.bind(VehiculoController));


// ============================ PROVEEDOR ROUTES ============================
/**
 * @swagger
 * /proveedor:
 *   get:
 *     summary: Obtiene todos los proveedores
 *     tags: [Proveedor]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 id_usuario: 3
 *                 nombre_empresa: "AutoParts SA"
 *                 es_servicio: false
 *                 descripcion: "Proveedor de repuestos"
 */
router.get("/proveedor", ProveedorController.getAll.bind(ProveedorController));

/**
 * @swagger
 * /proveedor/{id}:
 *   get:
 *     summary: Obtiene un proveedor por ID
 *     tags: [Proveedor]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               id_usuario: 5
 *               nombre_empresa: "Servicios Mecánicos SRL"
 *               es_servicio: true
 *               descripcion: "Taller especializado en transmisión"
 */
router.get("/proveedor/:id", ProveedorController.getByID.bind(ProveedorController));

/**
 * @swagger
 * /proveedor:
 *   post:
 *     summary: Crea un proveedor
 *     tags: [Proveedor]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               id_usuario: { type: integer, example: 1 }
 *               nombre_empresa: { type: string, example: "AutoParts SA" }
 *               es_servicio: { type: boolean, example: false }
 *               descripcion: { type: string, example: "Proveedor de repuestos" }
 */
router.post("/proveedor", ProveedorController.insertToDB.bind(ProveedorController));

/**
 * @swagger
 * /proveedor/{id}:
 *   put:
 *     summary: Actualiza un campo de un proveedor
 *     tags: [Proveedor]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: descripcion
 *             value: "Distribuidor autorizado de repuestos originales"
 */
router.put("/proveedor/:id", ProveedorController.updateById.bind(ProveedorController));

/**
 * @swagger
 * /proveedor/{id}:
 *   delete:
 *     summary: Elimina un proveedor
 *     tags: [Proveedor]
 */
router.delete("/proveedor/:id", ProveedorController.deleteById.bind(ProveedorController));


// ============================ REPUESTO ROUTES ============================
/**
 * @swagger
 * /repuesto:
 *   get:
 *     summary: Obtiene todos los repuestos
 *     tags: [Repuesto]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 nombre_repuesto: "Filtro de aire"
 *               - id: 2
 *                 nombre_repuesto: "Bujía"
 */
router.get("/repuesto", RepuestoController.getAll.bind(RepuestoController));

/**
 * @swagger
 * /repuesto/{id}:
 *   get:
 *     summary: Obtiene un repuesto por ID
 *     tags: [Repuesto]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 3
 *               nombre_repuesto: "Amortiguador"
 */
router.get("/repuesto/:id", RepuestoController.getByID.bind(RepuestoController));

/**
 * @swagger
 * /repuesto:
 *   post:
 *     summary: Crea un repuesto
 *     tags: [Repuesto]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               nombre_repuesto: { type: string, example: "Filtro de aire" }
 */
router.post("/repuesto", RepuestoController.insertToDB.bind(RepuestoController));

/**
 * @swagger
 * /repuesto/{id}:
 *   put:
 *     summary: Actualiza un campo de un repuesto
 *     tags: [Repuesto]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: nombre_repuesto
 *             value: "Pastilla de freno"
 */
router.put("/repuesto/:id", RepuestoController.updateById.bind(RepuestoController));

/**
 * @swagger
 * /repuesto/{id}:
 *   delete:
 *     summary: Elimina un repuesto
 *     tags: [Repuesto]
 */
router.delete("/repuesto/:id", RepuestoController.deleteById.bind(RepuestoController));


// ============================ PROVEEDOR REPUESTO ROUTES ============================
/**
 * @swagger
 * /proveedorrepuesto:
 *   get:
 *     summary: Obtiene todos los registros proveedor-repuesto
 *     tags: [ProveedorRepuesto]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 id_proveedor: 2
 *                 id_repuesto: 3
 *                 precio: 250.75
 */
router.get("/proveedorrepuesto", ProveedorRepuestoController.getAll.bind(ProveedorRepuestoController));

/**
 * @swagger
 * /proveedorrepuesto/{id}:
 *   get:
 *     summary: Obtiene un proveedor-repuesto por ID
 *     tags: [ProveedorRepuesto]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               id_proveedor: 1
 *               id_repuesto: 4
 *               precio: 150.50
 */
router.get("/proveedorrepuesto/:id", ProveedorRepuestoController.getByID.bind(ProveedorRepuestoController));

/**
 * @swagger
 * /proveedorrepuesto:
 *   post:
 *     summary: Crea un proveedor-repuesto
 *     tags: [ProveedorRepuesto]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               id_proveedor: { type: integer, example: 1 }
 *               id_repuesto: { type: integer, example: 2 }
 *               precio: { type: number, example: 150.50 }
 */
router.post("/proveedorrepuesto", ProveedorRepuestoController.insertToDB.bind(ProveedorRepuestoController));

/**
 * @swagger
 * /proveedorrepuesto/{id}:
 *   put:
 *     summary: Actualiza un campo de proveedor-repuesto
 *     tags: [ProveedorRepuesto]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: precio
 *             value: 175.00
 */
router.put("/proveedorrepuesto/:id", ProveedorRepuestoController.updateById.bind(ProveedorRepuestoController));

/**
 * @swagger
 * /proveedorrepuesto/{id}:
 *   delete:
 *     summary: Elimina un proveedor-repuesto
 *     tags: [ProveedorRepuesto]
 */
router.delete("/proveedorrepuesto/:id", ProveedorRepuestoController.deleteById.bind(ProveedorRepuestoController));
// ============================ ESTADO PEDIDO ROUTES ============================
/**
 * @swagger
 * /estadopedido:
 *   get:
 *     summary: Obtiene todos los estados de pedido
 *     tags: [EstadoPedido]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 estado: "Pendiente"
 *               - id: 2
 *                 estado: "En camino"
 */
router.get("/estadopedido", EstadoPedidoController.getAll.bind(EstadoPedidoController));

/**
 * @swagger
 * /estadopedido/{id}:
 *   get:
 *     summary: Obtiene un estado de pedido por ID
 *     tags: [EstadoPedido]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               estado: "Entregado"
 */
router.get("/estadopedido/:id", EstadoPedidoController.getByID.bind(EstadoPedidoController));

/**
 * @swagger
 * /estadopedido:
 *   post:
 *     summary: Crea un estado de pedido
 *     tags: [EstadoPedido]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               estado: { type: string, example: "Pendiente" }
 */
router.post("/estadopedido", EstadoPedidoController.insertToDB.bind(EstadoPedidoController));

/**
 * @swagger
 * /estadopedido/{id}:
 *   put:
 *     summary: Actualiza un campo de estado pedido
 *     tags: [EstadoPedido]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: estado
 *             value: "Cancelado"
 */
router.put("/estadopedido/:id", EstadoPedidoController.updateById.bind(EstadoPedidoController));

/**
 * @swagger
 * /estadopedido/{id}:
 *   delete:
 *     summary: Elimina un estado de pedido
 *     tags: [EstadoPedido]
 */
router.delete("/estadopedido/:id", EstadoPedidoController.deleteById.bind(EstadoPedidoController));


// ============================ PEDIDO ROUTES ============================
/**
 * @swagger
 * /pedido:
 *   get:
 *     summary: Obtiene todos los pedidos
 *     tags: [Pedido]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 fecha_pedido: "2025-01-10"
 *                 fecha_entrega: "2025-01-15"
 *                 estado: 1
 *               - id: 2
 *                 fecha_pedido: "2025-01-12"
 *                 fecha_entrega: "2025-01-20"
 *                 estado: 2
 */
router.get("/pedido", PedidoController.getAll.bind(PedidoController));

/**
 * @swagger
 * /pedido/{id}:
 *   get:
 *     summary: Obtiene un pedido por ID
 *     tags: [Pedido]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 3
 *               fecha_pedido: "2025-01-15"
 *               fecha_entrega: "2025-01-22"
 *               estado: 3
 */
router.get("/pedido/:id", PedidoController.getByID.bind(PedidoController));

/**
 * @swagger
 * /pedido:
 *   post:
 *     summary: Crea un pedido
 *     tags: [Pedido]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               fecha_pedido: { type: string, format: date, example: "2025-01-10" }
 *               fecha_entrega: { type: string, format: date, example: "2025-01-15" }
 *               estado: { type: integer, example: 1 }
 */
router.post("/pedido", PedidoController.insertToDB.bind(PedidoController));

/**
 * @swagger
 * /pedido/{id}:
 *   put:
 *     summary: Actualiza un campo de un pedido
 *     tags: [Pedido]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: fecha_entrega
 *             value: "2025-01-18"
 */
router.put("/pedido/:id", PedidoController.updateById.bind(PedidoController));

/**
 * @swagger
 * /pedido/{id}:
 *   delete:
 *     summary: Elimina un pedido
 *     tags: [Pedido]
 */
router.delete("/pedido/:id", PedidoController.deleteById.bind(PedidoController));


// ============================ ESTADO PEDIDO DETALLE ROUTES ============================
/**
 * @swagger
 * /estadopedidodetalle:
 *   get:
 *     summary: Obtiene todos los estados de detalle de pedido
 *     tags: [EstadoPedidoDetalle]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 estado: "En proceso"
 *               - id: 2
 *                 estado: "Aprobado"
 */
router.get("/estadopedidodetalle", EstadoPedidoDetalleController.getAll.bind(EstadoPedidoDetalleController));

/**
 * @swagger
 * /estadopedidodetalle/{id}:
 *   get:
 *     summary: Obtiene un estado de detalle de pedido por ID
 *     tags: [EstadoPedidoDetalle]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               estado: "Rechazado"
 */
router.get("/estadopedidodetalle/:id", EstadoPedidoDetalleController.getByID.bind(EstadoPedidoDetalleController));

/**
 * @swagger
 * /estadopedidodetalle:
 *   post:
 *     summary: Crea un estado de detalle de pedido
 *     tags: [EstadoPedidoDetalle]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               estado: { type: string, example: "En proceso" }
 */
router.post("/estadopedidodetalle", EstadoPedidoDetalleController.insertToDB.bind(EstadoPedidoDetalleController));

/**
 * @swagger
 * /estadopedidodetalle/{id}:
 *   put:
 *     summary: Actualiza un campo de estado detalle de pedido
 *     tags: [EstadoPedidoDetalle]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: estado
 *             value: "Completado"
 */
router.put("/estadopedidodetalle/:id", EstadoPedidoDetalleController.updateById.bind(EstadoPedidoDetalleController));

/**
 * @swagger
 * /estadopedidodetalle/{id}:
 *   delete:
 *     summary: Elimina un estado de detalle de pedido
 *     tags: [EstadoPedidoDetalle]
 */
router.delete("/estadopedidodetalle/:id", EstadoPedidoDetalleController.deleteById.bind(EstadoPedidoDetalleController));


// ============================ PEDIDO DETALLE ROUTES ============================
/**
 * @swagger
 * /pedidodetalle:
 *   get:
 *     summary: Obtiene todos los detalles de pedido
 *     tags: [PedidoDetalle]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 id_pedido: 1
 *                 id_proveedor_repuesto: 2
 *                 estado: 1
 *                 cantidad_solicitada: 5
 *               - id: 2
 *                 id_pedido: 2
 *                 id_proveedor_repuesto: 3
 *                 estado: 2
 *                 cantidad_solicitada: 10
 */
router.get("/pedidodetalle", PedidoDetalleController.getAll.bind(PedidoDetalleController));

/**
 * @swagger
 * /pedidodetalle/{id}:
 *   get:
 *     summary: Obtiene un detalle de pedido por ID
 *     tags: [PedidoDetalle]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 3
 *               id_pedido: 2
 *               id_proveedor_repuesto: 5
 *               estado: 1
 *               cantidad_solicitada: 8
 */
router.get("/pedidodetalle/:id", PedidoDetalleController.getByID.bind(PedidoDetalleController));

/**
 * @swagger
 * /pedidodetalle:
 *   post:
 *     summary: Crea un detalle de pedido
 *     tags: [PedidoDetalle]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               id_pedido: { type: integer, example: 1 }
 *               id_proveedor_repuesto: { type: integer, example: 2 }
 *               estado: { type: integer, example: 1 }
 *               cantidad_solicitada: { type: integer, example: 5 }
 */
router.post("/pedidodetalle", PedidoDetalleController.insertToDB.bind(PedidoDetalleController));

/**
 * @swagger
 * /pedidodetalle/{id}:
 *   put:
 *     summary: Actualiza un campo de un detalle de pedido
 *     tags: [PedidoDetalle]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: cantidad_solicitada
 *             value: 12
 */
router.put("/pedidodetalle/:id", PedidoDetalleController.updateById.bind(PedidoDetalleController));

/**
 * @swagger
 * /pedidodetalle/{id}:
 *   delete:
 *     summary: Elimina un detalle de pedido
 *     tags: [PedidoDetalle]
 */
router.delete("/pedidodetalle/:id", PedidoDetalleController.deleteById.bind(PedidoDetalleController));


// ============================ INVENTARIO ROUTES ============================
/**
 * @swagger
 * /inventario:
 *   get:
 *     summary: Obtiene todo el inventario
 *     tags: [Inventario]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 id_repuesto: 3
 *                 cantidad: 20
 *                 precio_unitario: 125.50
 *               - id: 2
 *                 id_repuesto: 4
 *                 cantidad: 15
 *                 precio_unitario: 210.00
 */
router.get("/inventario", InventarioController.getAll.bind(InventarioController));

/**
 * @swagger
 * /inventario/{id}:
 *   get:
 *     summary: Obtiene un registro de inventario por ID
 *     tags: [Inventario]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 3
 *               id_repuesto: 5
 *               cantidad: 50
 *               precio_unitario: 95.75
 */
router.get("/inventario/:id", InventarioController.getByID.bind(InventarioController));

/**
 * @swagger
 * /inventario:
 *   post:
 *     summary: Crea un registro de inventario
 *     tags: [Inventario]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               id_repuesto: { type: integer, example: 1 }
 *               cantidad: { type: integer, example: 20 }
 *               precio_unitario: { type: number, example: 125.50 }
 */
router.post("/inventario", InventarioController.insertToDB.bind(InventarioController));

/**
 * @swagger
 * /inventario/{id}:
 *   put:
 *     summary: Actualiza un campo del inventario
 *     tags: [Inventario]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: cantidad
 *             value: 30
 */
router.put("/inventario/:id", InventarioController.updateById.bind(InventarioController));

/**
 * @swagger
 * /inventario/{id}:
 *   delete:
 *     summary: Elimina un registro de inventario
 *     tags: [Inventario]
 */
router.delete("/inventario/:id", InventarioController.deleteById.bind(InventarioController));

// ============================ ESTADO ORDEN REPARACION ROUTES ============================
// ============================ ESTADO ORDEN REPARACION ROUTES ============================
/**
 * @swagger
 * /estadoordenreparacion:
 *   get:
 *     summary: Obtiene todos los estados de orden de reparación
 *     tags: [EstadoOrdenReparacion]
 *     responses:
 *       200:
 *         description: Lista de estados de orden de reparación
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 estado: "Pendiente"
 *               - id: 2
 *                 estado: "En reparación"
 *               - id: 3
 *                 estado: "Finalizado"
 */
router.get("/estadoordenreparacion", EstadoOrdenReparacionController.getAll.bind(EstadoOrdenReparacionController));

/**
 * @swagger
 * /estadoordenreparacion/{id}:
 *   get:
 *     summary: Obtiene un estado de orden de reparación por ID
 *     tags: [EstadoOrdenReparacion]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *     responses:
 *       200:
 *         description: Estado de orden de reparación
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               estado: "En reparación"
 */

router.get("/estadoordenreparacion/:id", EstadoOrdenReparacionController.getByID.bind(EstadoOrdenReparacionController));

/**
 * @swagger
 * /estadoordenreparacion:
 *   post:
 *     summary: Crea un estado de orden de reparación
 *     tags: [EstadoOrdenReparacion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               estado: { type: string, example: "Pendiente" }
 *     responses:
 *       201:
 *         description: Estado creado
 *         content:
 *           application/json:
 *             example:
 *               id: 4
 *               estado: "Pendiente"
 */
router.post("/estadoordenreparacion", EstadoOrdenReparacionController.insertToDB.bind(EstadoOrdenReparacionController));

/**
 * @swagger
 * /estadoordenreparacion/{id}:
 *   put:
 *     summary: Actualiza un campo de estado de orden de reparación
 *     tags: [EstadoOrdenReparacion]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               columnName: { type: string, example: "estado" }
 *               value: { type: string, example: "Finalizado" }
 *     responses:
 *       200:
 *         description: Estado actualizado
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               estado: "Finalizado"
 */
router.put("/estadoordenreparacion/:id", EstadoOrdenReparacionController.updateById.bind(EstadoOrdenReparacionController));

/**
 * @swagger
 * /estadoordenreparacion/{id}:
 *   delete:
 *     summary: Elimina un estado de orden de reparación
 *     tags: [EstadoOrdenReparacion]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 3
 *     responses:
 *       200:
 *         description: Estado eliminado
 *         content:
 *           application/json:
 *             example:
 *               message: "Estado eliminado correctamente"
*/
router.delete("/estadoordenreparacion/:id", EstadoOrdenReparacionController.deleteById.bind(EstadoOrdenReparacionController));

// ============================ ORDEN REPARACION ROUTES ============================
/**
 * @swagger
 * /ordenreparacion:
 *   get:
 *     summary: Obtiene todas las órdenes de reparación
 *     tags: [OrdenReparacion]
 *     responses:
 *       200:
 *         description: Lista de órdenes de reparación
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 id_vehiculo: 1
 *                 fecha_ingreso: "2025-02-01"
 *                 hora_ingreso: "08:30:00"
 *                 fecha_egreso: "2025-02-05"
 *                 hora_egreso: "14:00:00"
 *                 estado: 2
 */
router.get("/ordenreparacion", OrdenReparacionController.getAll.bind(OrdenReparacionController));

/**
 * @swagger
 * /ordenreparacion/{id}:
 *   get:
 *     summary: Obtiene una orden de reparación por ID
 *     tags: [OrdenReparacion]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Orden de reparación
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               id_vehiculo: 1
 *               fecha_ingreso: "2025-02-01"
 *               hora_ingreso: "08:30:00"
 *               fecha_egreso: "2025-02-05"
 *               hora_egreso: "14:00:00"
 *               estado: 2
 */
router.get("/ordenreparacion/:id", OrdenReparacionController.getByID.bind(OrdenReparacionController));

/**
 * @swagger
 * /ordenreparacion:
 *   post:
 *     summary: Crea una orden de reparación
 *     tags: [OrdenReparacion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               id_vehiculo: { type: integer, example: 1 }
 *               fecha_ingreso: { type: string, format: date, example: "2025-02-01" }
 *               hora_ingreso: { type: string, format: time, example: "08:30:00" }
 *               fecha_egreso: { type: string, format: date, example: "2025-02-05" }
 *               hora_egreso: { type: string, format: time, example: "14:00:00" }
 *               estado: { type: integer, example: 2 }
 *     responses:
 *       201:
 *         description: Orden creada
 *         content:
 *           application/json:
 *             example:
 *               id: 5
 *               id_vehiculo: 1
 *               fecha_ingreso: "2025-02-01"
 *               hora_ingreso: "08:30:00"
 *               fecha_egreso: "2025-02-05"
 *               hora_egreso: "14:00:00"
 *               estado: 2
 */

router.post("/ordenreparacion", OrdenReparacionController.insertToDB.bind(OrdenReparacionController));

/**
 * @swagger
 * /ordenreparacion/{id}:
 *   put:
 *     summary: Actualiza un campo de una orden de reparación
 *     tags: [OrdenReparacion]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               columnName: { type: string, example: "estado" }
 *               value: { type: string, example: "3" }
 *     responses:
 *       200:
 *         description: Orden actualizada
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               estado: 3
 */

router.put("/ordenreparacion/:id", OrdenReparacionController.updateById.bind(OrdenReparacionController));

/**
 * @swagger
 * /ordenreparacion/{id}:
 *   delete:
 *     summary: Elimina una orden de reparación
 *     tags: [OrdenReparacion]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 5
 *     responses:
 *       200:
 *         description: Orden eliminada
 *         content:
 *           application/json:
 *             example:
 *               message: "Orden eliminada correctamente"
 */

router.delete("/ordenreparacion/:id", OrdenReparacionController.deleteById.bind(OrdenReparacionController));

// ============================ SERVICIO ROUTES ============================
/**
 * @swagger
 * /servicio:
 *   get:
 *     summary: Obtiene todos los servicios
 *     tags: [Servicio]
 *     responses:
 *       200:
 *         description: Lista de servicios
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 servicio: "Cambio de aceite"
 *                 es_correctivo: true
 *                 descripcion: "Cambio completo de aceite con filtro"
 *                 tiempo_estimado: 60
 *                 precio: 450.00
 *               - id: 2
 *                 servicio: "Alineación"
 *                 es_correctivo: false
 *                 descripcion: "Alineación de ruedas"
 *                 tiempo_estimado: 30
 *                 precio: 200.00
 */
router.get("/servicio", ServicioController.getAll.bind(ServicioController));

/**
 * @swagger
 * /servicio/{id}:
 *   get:
 *     summary: Obtiene un servicio por ID
 *     tags: [Servicio]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Servicio encontrado
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               servicio: "Cambio de aceite"
 *               es_correctivo: true
 *               descripcion: "Cambio completo de aceite con filtro"
 *               tiempo_estimado: 60
 *               precio: 450.00
 */

router.get("/servicio/:id", ServicioController.getByID.bind(ServicioController));

/**
 * @swagger
 * /servicio:
 *   post:
 *     summary: Crea un servicio
 *     tags: [Servicio]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               servicio: { type: string, example: "Cambio de aceite" }
 *               es_correctivo: { type: boolean, example: true }
 *               descripcion: { type: string, example: "Cambio de aceite completo con filtro" }
 *               tiempo_estimado: { type: integer, example: 60 }
 *               precio: { type: number, example: 450.00 }
 *     responses:
 *       201:
 *         description: Servicio creado
 *         content:
 *           application/json:
 *             example:
 *               id: 3
 *               servicio: "Lavado completo"
 *               es_correctivo: false
 *               descripcion: "Lavado exterior e interior del vehículo"
 *               tiempo_estimado: 45
 *               precio: 100.00
 */
router.post("/servicio", ServicioController.insertToDB.bind(ServicioController));

/**
 * @swagger
 * /servicio/{id}:
 *   put:
 *     summary: Actualiza un campo de un servicio
 *     tags: [Servicio]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               columnName: { type: string, example: "descripcion" }
 *               value: { type: string, example: "Cambio de aceite y filtro completado" }
 *     responses:
 *       200:
 *         description: Servicio actualizado
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               descripcion: "Cambio de aceite y filtro completado"
 */

router.put("/servicio/:id", ServicioController.updateById.bind(ServicioController));


/**
 * @swagger
 * /servicio/{id}:
 *   delete:
 *     summary: Elimina un servicio
 *     tags: [Servicio]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *     responses:
 *       200:
 *         description: Servicio eliminado
 *         content:
 *           application/json:
 *             example:
 *               message: "Servicio eliminado correctamente"
*/

router.delete("/servicio/:id", ServicioController.deleteById.bind(ServicioController));

// ============================ ESTADO TRABAJO ROUTES ============================
/**
 * @swagger
 * /estadotrabajo:
 *   get:
 *     summary: Obtiene todos los estados de trabajo
 *     tags: [EstadoTrabajo]
 *     responses:
 *       200:
 *         description: Lista de estados de trabajo
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 estado: "Pendiente"
 *               - id: 2
 *                 estado: "En proceso"
 *               - id: 3
 *                 estado: "Completado"
 */
router.get("/estadotrabajo", EstadoTrabajoController.getAll.bind(EstadoTrabajoController));

/**
 * @swagger
 * /estadotrabajo/{id}:
 *   get:
 *     summary: Obtiene un estado de trabajo por ID
 *     tags: [EstadoTrabajo]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 3
 *     responses:
 *       200:
 *         description: Estado de trabajo encontrado
 *         content:
 *           application/json:
 *             example:
 *               id: 3
 *               estado: "Completado"
 */
router.get("/estadotrabajo/:id", EstadoTrabajoController.getByID.bind(EstadoTrabajoController));

/**
 * @swagger
 * /estadotrabajo:
 *   post:
 *     summary: Crea un estado de trabajo
 *     tags: [EstadoTrabajo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               estado: { type: string, example: "En proceso" }
 *     responses:
 *       201:
 *         description: Estado de trabajo creado
 *         content:
 *           application/json:
 *             example:
 *               id: 4
 *               estado: "En proceso"
 */
router.post("/estadotrabajo", EstadoTrabajoController.insertToDB.bind(EstadoTrabajoController));

/**
 * @swagger
 * /estadotrabajo/{id}:
 *   put:
 *     summary: Actualiza un campo de un estado de trabajo
 *     tags: [EstadoTrabajo]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               columnName: { type: string, example: "estado" }
 *               value: { type: string, example: "Completado" }
 *     responses:
 *       200:
 *         description: Estado de trabajo actualizado
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               estado: "Completado"
 */

router.put("/estadotrabajo/:id", EstadoTrabajoController.updateById.bind(EstadoTrabajoController));


/**
 * @swagger
 * /estadotrabajo/{id}:
 *   delete:
 *     summary: Elimina un estado de trabajo
 *     tags: [EstadoTrabajo]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Estado eliminado
 *         content:
 *           application/json:
 *             example:
 *               message: "Estado eliminado correctamente"
*/

router.delete("/estadotrabajo/:id", EstadoTrabajoController.deleteById.bind(EstadoTrabajoController));

// ============================ SERVICIO ORDEN REPARACION ROUTES ============================
/**
 * @swagger
 * /servicioordenreparacion:
 *   get:
 *     summary: Obtiene todos los servicios por orden de reparación
 *     tags: [ServicioOrdenReparacion]
 *     responses:
 *       200:
 *         description: Lista de servicios por orden
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 id_orden_reparacion: 1
 *                 id_servicio: 2
 *                 id_estado_trabajo: 3
 */
router.get("/servicioordenreparacion", ServicioOrdenReparacionController.getAll.bind(ServicioOrdenReparacionController));

/**
 * @swagger
 * /servicioordenreparacion/{id}:
 *   get:
 *     summary: Obtiene un servicio por orden de reparación por ID
 *     tags: [ServicioOrdenReparacion]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Servicio por orden encontrado
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               id_orden_reparacion: 1
 *               id_servicio: 2
 *               id_estado_trabajo: 3
 */

router.get("/servicioordenreparacion/:id", ServicioOrdenReparacionController.getByID.bind(ServicioOrdenReparacionController));

/**
 * @swagger
 * /servicioordenreparacion:
 *   post:
 *     summary: Crea un registro de servicio-orden
 *     tags: [ServicioOrdenReparacion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               id_orden_reparacion: { type: integer, example: 1 }
 *               id_servicio: { type: integer, example: 2 }
 *               id_estado_trabajo: { type: integer, example: 1 }
 *     responses:
 *       201:
 *         description: Servicio por orden creado
 *         content:
 *           application/json:
 *             example:
 *               id: 3
 *               id_orden_reparacion: 2
 *               id_servicio: 1
 *               id_estado_trabajo: 2
 */

router.post("/servicioordenreparacion", ServicioOrdenReparacionController.insertToDB.bind(ServicioOrdenReparacionController));

/**
 * @swagger
 * /servicioordenreparacion/{id}:
 *   put:
 *     summary: Actualiza un campo de un servicio por orden
 *     tags: [ServicioOrdenReparacion]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               columnName: { type: string, example: "id_estado_trabajo" }
 *               value: { type: string, example: "3" }
 *     responses:
 *       200:
 *         description: Servicio por orden actualizado
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               id_estado_trabajo: 3
 */

router.put("/servicioordenreparacion/:id", ServicioOrdenReparacionController.updateById.bind(ServicioOrdenReparacionController));

/**
 * @swagger
 * /servicioordenreparacion/{id}:
 *   delete:
 *     summary: Elimina un servicio por orden
 *     tags: [ServicioOrdenReparacion]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *     responses:
 *       200:
 *         description: Servicio por orden eliminado
 *         content:
 *           application/json:
 *             example:
 *               message: "Servicio por orden eliminado correctamente"
*/
router.delete("/servicioordenreparacion/:id", ServicioOrdenReparacionController.deleteById.bind(ServicioOrdenReparacionController));

// ============================ INVENTARIO ORDEN REPARACION ROUTES ============================
/**
 * @swagger
 * /inventarioordenreparacion:
 *   get:
 *     summary: Obtiene todos los inventarios por orden de reparación
 *     tags: [InventarioOrdenReparacion]
 *     responses:
 *       200:
 *         description: Lista de inventarios por orden
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 id_inventario: 3
 *                 id_orden_reparacion: 1
 *                 cantidad: 4
 */
router.get("/inventarioordenreparacion", InventarioOrdenReparacionController.getAll.bind(InventarioOrdenReparacionController));

/**
 * @swagger
 * /inventarioordenreparacion/{id}:
 *   get:
 *     summary: Obtiene un inventario por orden de reparación por ID
 *     tags: [InventarioOrdenReparacion]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Inventario encontrado
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               id_inventario: 3
 *               id_orden_reparacion: 1
 *               cantidad: 4
 */
router.get("/inventarioordenreparacion/:id", InventarioOrdenReparacionController.getByID.bind(InventarioOrdenReparacionController));

/**
 * @swagger
 * /inventarioordenreparacion:
 *   post:
 *     summary: Crea un inventario por orden
 *     tags: [InventarioOrdenReparacion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               id_inventario: { type: integer, example: 2 }
 *               id_orden_reparacion: { type: integer, example: 1 }
 *               cantidad: { type: integer, example: 5 }
 *     responses:
 *       201:
 *         description: Inventario creado
 *         content:
 *           application/json:
 *             example:
 *               id: 5
 *               id_inventario: 2
 *               id_orden_reparacion: 1
 *               cantidad: 5
 */
router.post("/inventarioordenreparacion", InventarioOrdenReparacionController.insertToDB.bind(InventarioOrdenReparacionController));

/**
 * @swagger
 * /inventarioordenreparacion/{id}:
 *   put:
 *     summary: Actualiza un campo de inventario por orden
 *     tags: [InventarioOrdenReparacion]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               columnName: { type: string, example: "cantidad" }
 *               value: { type: string, example: "10" }
 *     responses:
 *       200:
 *         description: Inventario actualizado
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               cantidad: 10
 */
router.put("/inventarioordenreparacion/:id", InventarioOrdenReparacionController.updateById.bind(InventarioOrdenReparacionController));

/**
 * @swagger
 * /inventarioordenreparacion/{id}:
 *   delete:
 *     summary: Elimina un inventario por orden
 *     tags: [InventarioOrdenReparacion]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Inventario eliminado
 *         content:
 *           application/json:
 *             example:
 *               message: "Inventario eliminado correctamente"
*/
router.delete("/inventarioordenreparacion/:id", InventarioOrdenReparacionController.deleteById.bind(InventarioOrdenReparacionController));

// ============================ FACTURA ROUTES ============================
/**
 * @swagger
 * /factura:
 *   get:
 *     summary: Obtiene todas las facturas
 *     tags: [Factura]
 *     responses:
 *       200:
 *         description: Lista de facturas
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 id_orden_reparacion: 1
 *                 fecha: "2025-02-10"
 *                 total: 1200.75
 */
router.get("/factura", FacturaController.getAll.bind(FacturaController));

/**
 * @swagger
 * /factura/{id}:
 *   get:
 *     summary: Obtiene una factura por ID
 *     tags: [Factura]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Factura encontrada
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               id_orden_reparacion: 1
 *               fecha: "2025-02-10"
 *               total: 1200.75
 */
router.get("/factura/:id", FacturaController.getByID.bind(FacturaController));

/**
 * @swagger
 * /factura:
 *   post:
 *     summary: Crea una factura
 *     tags: [Factura]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               id_orden_reparacion: { type: integer, example: 2 }
 *               fecha: { type: string, format: date, example: "2025-02-12" }
 *               total: { type: number, example: 850.50 }
 *     responses:
 *       201:
 *         description: Factura creada
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               id_orden_reparacion: 2
 *               fecha: "2025-02-12"
 *               total: 850.50
 */
router.post("/factura", FacturaController.insertToDB.bind(FacturaController));

/**
 * @swagger
 * /factura/{id}:
 *   put:
 *     summary: Actualiza un campo de una factura
 *     tags: [Factura]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               columnName: { type: string, example: "total" }
 *               value: { type: string, example: "900.00" }
 *     responses:
 *       200:
 *         description: Factura actualizada
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               total: 900.00
 */
router.put("/factura/:id", FacturaController.updateById.bind(FacturaController));

/**
 * @swagger
 * /factura/{id}:
 *   delete:
 *     summary: Elimina una factura
 *     tags: [Factura]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Factura eliminada
 *         content:
 *           application/json:
 *             example:
 *               message: "Factura eliminada correctamente"
*/
router.delete("/factura/:id", FacturaController.deleteById.bind(FacturaController));

// ============================ PAGO ROUTES ============================
/**
 * @swagger
 * /pago:
 *   get:
 *     summary: Obtiene todos los pagos
 *     tags: [Pago]
 *     responses:
 *       200:
 *         description: Lista de pagos
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 id_factura: 1
 *                 monto: 500.00
 *                 fecha: "2025-02-12"
 */
router.get("/pago", PagoController.getAll.bind(PagoController));

/**
 * @swagger
 * /pago/{id}:
 *   get:
 *     summary: Obtiene un pago por ID
 *     tags: [Pago]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Pago encontrado
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               id_factura: 1
 *               monto: 500.00
 *               fecha: "2025-02-12"
 */
router.get("/pago/:id", PagoController.getByID.bind(PagoController));

/**
 * @swagger
 * /pago:
 *   post:
 *     summary: Crea un pago
 *     tags: [Pago]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               id_factura: { type: integer, example: 2 }
 *               monto: { type: number, example: 850.50 }
 *               fecha: { type: string, format: date, example: "2025-02-15" }
 *     responses:
 *       201:
 *         description: Pago creado
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               id_factura: 2
 *               monto: 850.50
 *               fecha: "2025-02-15"
 */
router.post("/pago", PagoController.insertToDB.bind(PagoController));

/**
 * @swagger
 * /pago/{id}:
 *   put:
 *     summary: Actualiza un campo de un pago
 *     tags: [Pago]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               columnName: { type: string, example: "monto" }
 *               value: { type: string, example: "550.00" }
 *     responses:
 *       200:
 *         description: Pago actualizado
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               monto: 550.00
 */
router.put("/pago/:id", PagoController.updateById.bind(PagoController));

/**
 * @swagger
 * /pago/{id}:
 *   delete:
 *     summary: Elimina un pago
 *     tags: [Pago]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *     responses:
 *       200:
 *         description: Pago eliminado
 *         content:
 *           application/json:
 *             example:
 *               message: "Pago eliminado correctamente"
*/
router.delete("/pago/:id", PagoController.deleteById.bind(PagoController));

// ============================ CHAT USUARIO ROUTES ============================
/**
 * @swagger
 * /chatusuario:
 *   get:
 *     summary: Obtiene todos los mensajes de chat de usuarios
 *     tags: [ChatUsuario]
 *     responses:
 *       200:
 *         description: Lista de chats
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 id_orden_reparacion: 2
 *                 mensaje: "El vehículo ya está listo."
 *                 visto: true
 */
router.get("/chatusuario", ChatUsuarioController.getAll.bind(ChatUsuarioController));

/**
 * @swagger
 * /chatusuario/{id}:
 *   get:
 *     summary: Obtiene un chat de usuario por ID
 *     tags: [ChatUsuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               id_orden_reparacion: 2
 *               mensaje: "Revisando frenos"
 *               visto: false
 */
router.get("/chatusuario/:id", ChatUsuarioController.getByID.bind(ChatUsuarioController));

/**
 * @swagger
 * /chatusuario:
 *   post:
 *     summary: Crea un nuevo chat de usuario
 *     tags: [ChatUsuario]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               id_orden_reparacion: { type: integer, example: 1 }
 *               mensaje: { type: string, example: "¿Ya está listo mi carro?" }
 *               visto: { type: boolean, example: false }
 */
router.post("/chatusuario", ChatUsuarioController.insertToDB.bind(ChatUsuarioController));

/**
 * @swagger
 * /chatusuario/{id}:
 *   put:
 *     summary: Actualiza un campo de chat de usuario
 *     tags: [ChatUsuario]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: mensaje
 *             value: "Cambio de aceite terminado"
 */
router.put("/chatusuario/:id", ChatUsuarioController.updateById.bind(ChatUsuarioController));

/**
 * @swagger
 * /chatusuario/{id}:
 *   delete:
 *     summary: Elimina un chat de usuario
 *     tags: [ChatUsuario]
 */
router.delete("/chatusuario/:id", ChatUsuarioController.deleteById.bind(ChatUsuarioController));


// ============================ TIPO NOTIFICACION ROUTES ============================
/**
 * @swagger
 * /tiponotificacion:
 *   get:
 *     summary: Obtiene todos los tipos de notificación
 *     tags: [TipoNotificacion]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 tipo_notificacion: "Alerta de pedido"
 */
router.get("/tiponotificacion", TipoNotificacionController.getAll.bind(TipoNotificacionController));

/**
 * @swagger
 * /tiponotificacion/{id}:
 *   get:
 *     summary: Obtiene un tipo de notificación por ID
 *     tags: [TipoNotificacion]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               tipo_notificacion: "Recordatorio de servicio"
 */
router.get("/tiponotificacion/:id", TipoNotificacionController.getByID.bind(TipoNotificacionController));

/**
 * @swagger
 * /tiponotificacion:
 *   post:
 *     summary: Crea un tipo de notificación
 *     tags: [TipoNotificacion]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               tipo_notificacion: { type: string, example: "Aviso de factura" }
 */
router.post("/tiponotificacion", TipoNotificacionController.insertToDB.bind(TipoNotificacionController));

/**
 * @swagger
 * /tiponotificacion/{id}:
 *   put:
 *     summary: Actualiza un campo de tipo de notificación
 *     tags: [TipoNotificacion]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: tipo_notificacion
 *             value: "Alerta de pago"
 */
router.put("/tiponotificacion/:id", TipoNotificacionController.updateById.bind(TipoNotificacionController));

/**
 * @swagger
 * /tiponotificacion/{id}:
 *   delete:
 *     summary: Elimina un tipo de notificación
 *     tags: [TipoNotificacion]
 */
router.delete("/tiponotificacion/:id", TipoNotificacionController.deleteById.bind(TipoNotificacionController));

// ============================ NOTIFICACION ROUTES ============================
/**
 * @swagger
 * /notificacion:
 *   get:
 *     summary: Obtiene todas las notificaciones
 *     tags: [Notificacion]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 id_pedido: 2
 *                 id_tipo_notificacion: 1
 *                 comentario: "Pedido en camino"
 *                 fecha: "2025-02-20"
 *                 hora: "09:15:00"
 */
router.get("/notificacion", NotificacionController.getAll.bind(NotificacionController));

/**
 * @swagger
 * /notificacion/{id}:
 *   get:
 *     summary: Obtiene una notificación por ID
 *     tags: [Notificacion]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               id_pedido: 2
 *               id_tipo_notificacion: 1
 *               comentario: "Su pedido fue entregado"
 *               fecha: "2025-02-22"
 *               hora: "15:30:00"
 */
router.get("/notificacion/:id", NotificacionController.getByID.bind(NotificacionController));

/**
 * @swagger
 * /notificacion:
 *   post:
 *     summary: Crea una notificación
 *     tags: [Notificacion]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               id_pedido: { type: integer, example: 1 }
 *               id_tipo_notificacion: { type: integer, example: 2 }
 *               comentario: { type: string, example: "Pedido listo para recoger" }
 *               fecha: { type: string, format: date, example: "2025-02-18" }
 *               hora: { type: string, format: time, example: "10:45:00" }
 */
router.post("/notificacion", NotificacionController.insertToDB.bind(NotificacionController));

/**
 * @swagger
 * /notificacion/{id}:
 *   put:
 *     summary: Actualiza un campo de una notificación
 *     tags: [Notificacion]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: comentario
 *             value: "Entrega retrasada por tráfico"
 */
router.put("/notificacion/:id", NotificacionController.updateById.bind(NotificacionController));

/**
 * @swagger
 * /notificacion/{id}:
 *   delete:
 *     summary: Elimina una notificación
 *     tags: [Notificacion]
 */
router.delete("/notificacion/:id", NotificacionController.deleteById.bind(NotificacionController));

// ============================ EMPLEADO ORDEN REPARACION ROUTES ============================
/**
 * @swagger
 * /empleadoordenreparacion:
 *   get:
 *     summary: Obtiene todas las asignaciones empleado-orden
 *     tags: [EmpleadoOrdenReparacion]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 id_empleado: 2
 *                 id_orden_reparacion: 3
 *                 es_especialista: true
 */
router.get("/empleadoordenreparacion", EmpleadoOrdenReparacionController.getAll.bind(EmpleadoOrdenReparacionController));

/**
 * @swagger
 * /empleadoordenreparacion/{id}:
 *   get:
 *     summary: Obtiene una asignación empleado-orden por ID
 *     tags: [EmpleadoOrdenReparacion]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               id_empleado: 2
 *               id_orden_reparacion: 3
 *               es_especialista: false
 */
router.get("/empleadoordenreparacion/:id", EmpleadoOrdenReparacionController.getByID.bind(EmpleadoOrdenReparacionController));

/**
 * @swagger
 * /empleadoordenreparacion:
 *   post:
 *     summary: Crea una asignación empleado-orden
 *     tags: [EmpleadoOrdenReparacion]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               id_empleado: { type: integer, example: 1 }
 *               id_orden_reparacion: { type: integer, example: 2 }
 *               es_especialista: { type: boolean, example: true }
 */
router.post("/empleadoordenreparacion", EmpleadoOrdenReparacionController.insertToDB.bind(EmpleadoOrdenReparacionController));

/**
 * @swagger
 * /empleadoordenreparacion/{id}:
 *   put:
 *     summary: Actualiza un campo de empleado-orden
 *     tags: [EmpleadoOrdenReparacion]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: es_especialista
 *             value: true
 */
router.put("/empleadoordenreparacion/:id", EmpleadoOrdenReparacionController.updateById.bind(EmpleadoOrdenReparacionController));

/**
 * @swagger
 * /empleadoordenreparacion/{id}:
 *   delete:
 *     summary: Elimina una asignación empleado-orden
 *     tags: [EmpleadoOrdenReparacion]
 */
router.delete("/empleadoordenreparacion/:id", EmpleadoOrdenReparacionController.deleteById.bind(EmpleadoOrdenReparacionController));

// ============================ TIPO REPORTE ROUTES ============================
/**
 * @swagger
 * /tiporeporte:
 *   get:
 *     summary: Obtiene todos los tipos de reporte
 *     tags: [TipoReporte]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 tipo_reporte: "Mantenimiento"
 *                 mostrar_mecanico: true
 */
router.get("/tiporeporte", TipoReporteController.getAll.bind(TipoReporteController));

/**
 * @swagger
 * /tiporeporte/{id}:
 *   get:
 *     summary: Obtiene un tipo de reporte por ID
 *     tags: [TipoReporte]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               tipo_reporte: "Reparación urgente"
 *               mostrar_mecanico: false
 */
router.get("/tiporeporte/:id", TipoReporteController.getByID.bind(TipoReporteController));

/**
 * @swagger
 * /tiporeporte:
 *   post:
 *     summary: Crea un tipo de reporte
 *     tags: [TipoReporte]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               tipo_reporte: { type: string, example: "Diagnóstico" }
 *               mostrar_mecanico: { type: boolean, example: true }
 */
router.post("/tiporeporte", TipoReporteController.insertToDB.bind(TipoReporteController));

/**
 * @swagger
 * /tiporeporte/{id}:
 *   put:
 *     summary: Actualiza un campo de un tipo de reporte
 *     tags: [TipoReporte]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: tipo_reporte
 *             value: "Prueba de ruta"
 */
router.put("/tiporeporte/:id", TipoReporteController.updateById.bind(TipoReporteController));

/**
 * @swagger
 * /tiporeporte/{id}:
 *   delete:
 *     summary: Elimina un tipo de reporte
 *     tags: [TipoReporte]
 */
router.delete("/tiporeporte/:id", TipoReporteController.deleteById.bind(TipoReporteController));


// ============================ REPORTE ROUTES ============================
/**
 * @swagger
 * /reporte:
 *   get:
 *     summary: Obtiene todos los reportes
 *     tags: [Reporte]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 id_empleado_orden_reparacion: 3
 *                 id_tipo_reporte: 1
 *                 observaciones: "Se detectó desgaste en las llantas"
 *                 solucionado: false
 *                 fecha: "2025-02-21"
 *                 hora: "09:00:00"
 */
router.get("/reporte", ReporteController.getAll.bind(ReporteController));

/**
 * @swagger
 * /reporte/{id}:
 *   get:
 *     summary: Obtiene un reporte por ID
 *     tags: [Reporte]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               id_empleado_orden_reparacion: 4
 *               id_tipo_reporte: 2
 *               observaciones: "Se reemplazó batería"
 *               solucionado: true
 *               fecha: "2025-02-22"
 *               hora: "11:15:00"
 */
router.get("/reporte/:id", ReporteController.getByID.bind(ReporteController));

/**
 * @swagger
 * /reporte:
 *   post:
 *     summary: Crea un reporte
 *     tags: [Reporte]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               id_empleado_orden_reparacion: { type: integer, example: 1 }
 *               id_tipo_reporte: { type: integer, example: 2 }
 *               observaciones: { type: string, example: "Revisión general" }
 *               solucionado: { type: boolean, example: false }
 *               fecha: { type: string, format: date, example: "2025-02-21" }
 *               hora: { type: string, format: time, example: "14:30:00" }
 */
router.post("/reporte", ReporteController.insertToDB.bind(ReporteController));

/**
 * @swagger
 * /reporte/{id}:
 *   put:
 *     summary: Actualiza un campo de un reporte
 *     tags: [Reporte]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: solucionado
 *             value: true
 */
router.put("/reporte/:id", ReporteController.updateById.bind(ReporteController));

/**
 * @swagger
 * /reporte/{id}:
 *   delete:
 *     summary: Elimina un reporte
 *     tags: [Reporte]
 */
router.delete("/reporte/:id", ReporteController.deleteById.bind(ReporteController));


// ============================ CODIGO VERIFICACION ROUTES ============================
/**
 * @swagger
 * /codigoverificacion:
 *   get:
 *     summary: Obtiene todos los códigos de verificación
 *     tags: [CodigoVerificacion]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 id_usuario: 2
 *                 codigo: "ABC123"
 *                 fecha: "2025-02-19"
 *                 hora: "10:45:00"
 *                 booleaan: true
 *                 alerta: false
 */
router.get("/codigoverificacion", CodigoVerificacionController.getAll.bind(CodigoVerificacionController));

/**
 * @swagger
 * /codigoverificacion/{id}:
 *   get:
 *     summary: Obtiene un código de verificación por ID
 *     tags: [CodigoVerificacion]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               id_usuario: 3
 *               codigo: "XYZ789"
 *               fecha: "2025-02-20"
 *               hora: "09:20:00"
 *               booleaan: false
 *               alerta: true
 */
router.get("/codigoverificacion/:id", CodigoVerificacionController.getByID.bind(CodigoVerificacionController));

/**
 * @swagger
 * /codigoverificacion:
 *   post:
 *     summary: Crea un código de verificación
 *     tags: [CodigoVerificacion]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               id_usuario: { type: integer, example: 1 }
 *               codigo: { type: string, example: "QWE456" }
 *               fecha: { type: string, format: date, example: "2025-02-21" }
 *               hora: { type: string, format: time, example: "13:15:00" }
 *               booleaan: { type: boolean, example: true }
 *               alerta: { type: boolean, example: false }
 */
router.post("/codigoverificacion", CodigoVerificacionController.insertToDB.bind(CodigoVerificacionController));

/**
 * @swagger
 * /codigoverificacion/{id}:
 *   put:
 *     summary: Actualiza un campo de un código de verificación
 *     tags: [CodigoVerificacion]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: alerta
 *             value: true
 */
router.put("/codigoverificacion/:id", CodigoVerificacionController.updateById.bind(CodigoVerificacionController));

/**
 * @swagger
 * /codigoverificacion/{id}:
 *   delete:
 *     summary: Elimina un código de verificación
 *     tags: [CodigoVerificacion]
 */
router.delete("/codigoverificacion/:id", CodigoVerificacionController.deleteById.bind(CodigoVerificacionController));


// ============================ RECIBO ROUTES ============================
/**
 * @swagger
 * /recibo:
 *   get:
 *     summary: Obtiene todos los recibos
 *     tags: [Recibo]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 id_pedido: 3
 *                 fecha: "2025-02-19"
 *                 total: 850.00
 */
router.get("/recibo", ReciboController.getAll.bind(ReciboController));

/**
 * @swagger
 * /recibo/{id}:
 *   get:
 *     summary: Obtiene un recibo por ID
 *     tags: [Recibo]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               id_pedido: 4
 *               fecha: "2025-02-20"
 *               total: 1200.50
 */
router.get("/recibo/:id", ReciboController.getByID.bind(ReciboController));

/**
 * @swagger
 * /recibo:
 *   post:
 *     summary: Crea un recibo
 *     tags: [Recibo]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               id_pedido: { type: integer, example: 1 }
 *               fecha: { type: string, format: date, example: "2025-02-22" }
 *               total: { type: number, example: 1500.00 }
 */
router.post("/recibo", ReciboController.insertToDB.bind(ReciboController));

/**
 * @swagger
 * /recibo/{id}:
 *   put:
 *     summary: Actualiza un campo de un recibo
 *     tags: [Recibo]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             columnName: total
 *             value: 1800.75
 */
router.put("/recibo/:id", ReciboController.updateById.bind(ReciboController));

/**
 * @swagger
 * /recibo/{id}:
 *   delete:
 *     summary: Elimina un recibo
 *     tags: [Recibo]
 */
router.delete("/recibo/:id", ReciboController.deleteById.bind(ReciboController));

module.exports = router;