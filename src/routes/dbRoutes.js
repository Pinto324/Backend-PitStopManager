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
router.get("/rol", RolController.getAll.bind(RolController));
router.get("/rol/:id", RolController.getByID.bind(RolController));
router.post("/rol", RolController.insertToDB.bind(RolController));
router.put("/rol/:id", RolController.updateById.bind(RolController));
router.delete("/rol/:id", RolController.deleteById.bind(RolController));

// Usuario Routes
router.get("/usuario", UsuarioController.getAll.bind(UsuarioController));
router.get("/usuario/:id", UsuarioController.getByID.bind(UsuarioController));
router.post("/usuario", UsuarioController.insertToDB.bind(UsuarioController));
router.put("/usuario/:id", UsuarioController.updateById.bind(UsuarioController));
router.delete("/usuario/:id", UsuarioController.deleteById.bind(UsuarioController));

// Empleado Routes
router.get("/empleado", EmpleadoController.getAll.bind(EmpleadoController));
router.get("/empleado/:id", EmpleadoController.getByID.bind(EmpleadoController));
router.post("/empleado", EmpleadoController.insertToDB.bind(EmpleadoController));
router.put("/empleado/:id", EmpleadoController.updateById.bind(EmpleadoController));
router.delete("/empleado/:id", EmpleadoController.deleteById.bind(EmpleadoController));

// TipoEspecialidad Routes
router.get("/tipoespecialidad", TipoEspecialidadController.getAll.bind(TipoEspecialidadController));
router.get("/tipoespecialidad/:id", TipoEspecialidadController.getByID.bind(TipoEspecialidadController));
router.post("/tipoespecialidad", TipoEspecialidadController.insertToDB.bind(TipoEspecialidadController));
router.put("/tipoespecialidad/:id", TipoEspecialidadController.updateById.bind(TipoEspecialidadController));
router.delete("/tipoespecialidad/:id", TipoEspecialidadController.deleteById.bind(TipoEspecialidadController));

// Especialidad Routes
router.get("/especialidad", EspecialidadController.getAll.bind(EspecialidadController));
router.get("/especialidad/:id", EspecialidadController.getByID.bind(EspecialidadController));
router.post("/especialidad", EspecialidadController.insertToDB.bind(EspecialidadController));
router.put("/especialidad/:id", EspecialidadController.updateById.bind(EspecialidadController));
router.delete("/especialidad/:id", EspecialidadController.deleteById.bind(EspecialidadController));

// Vehiculo Routes
router.get("/vehiculo", VehiculoController.getAll.bind(VehiculoController));
router.get("/vehiculo/:id", VehiculoController.getByID.bind(VehiculoController));
router.post("/vehiculo", VehiculoController.insertToDB.bind(VehiculoController));
router.put("/vehiculo/:id", VehiculoController.updateById.bind(VehiculoController));
router.delete("/vehiculo/:id", VehiculoController.deleteById.bind(VehiculoController));

// Proveedor Routes
router.get("/proveedor", ProveedorController.getAll.bind(ProveedorController));
router.get("/proveedor/:id", ProveedorController.getByID.bind(ProveedorController));
router.post("/proveedor", ProveedorController.insertToDB.bind(ProveedorController));
router.put("/proveedor/:id", ProveedorController.updateById.bind(ProveedorController));
router.delete("/proveedor/:id", ProveedorController.deleteById.bind(ProveedorController));

// Repuesto Routes
router.get("/repuesto", RepuestoController.getAll.bind(RepuestoController));
router.get("/repuesto/:id", RepuestoController.getByID.bind(RepuestoController));
router.post("/repuesto", RepuestoController.insertToDB.bind(RepuestoController));
router.put("/repuesto/:id", RepuestoController.updateById.bind(RepuestoController));
router.delete("/repuesto/:id", RepuestoController.deleteById.bind(RepuestoController));

// ProveedorRepuesto Routes
router.get("/proveedorrepuesto", ProveedorRepuestoController.getAll.bind(ProveedorRepuestoController));
router.get("/proveedorrepuesto/:id", ProveedorRepuestoController.getByID.bind(ProveedorRepuestoController));
router.post("/proveedorrepuesto", ProveedorRepuestoController.insertToDB.bind(ProveedorRepuestoController));
router.put("/proveedorrepuesto/:id", ProveedorRepuestoController.updateById.bind(ProveedorRepuestoController));
router.delete("/proveedorrepuesto/:id", ProveedorRepuestoController.deleteById.bind(ProveedorRepuestoController));

// EstadoPedido Routes
router.get("/estadopedido", EstadoPedidoController.getAll.bind(EstadoPedidoController));
router.get("/estadopedido/:id", EstadoPedidoController.getByID.bind(EstadoPedidoController));
router.post("/estadopedido", EstadoPedidoController.insertToDB.bind(EstadoPedidoController));
router.put("/estadopedido/:id", EstadoPedidoController.updateById.bind(EstadoPedidoController));
router.delete("/estadopedido/:id", EstadoPedidoController.deleteById.bind(EstadoPedidoController));

// Pedido Routes
router.get("/pedido", PedidoController.getAll.bind(PedidoController));
router.get("/pedido/:id", PedidoController.getByID.bind(PedidoController));
router.post("/pedido", PedidoController.insertToDB.bind(PedidoController));
router.put("/pedido/:id", PedidoController.updateById.bind(PedidoController));
router.delete("/pedido/:id", PedidoController.deleteById.bind(PedidoController));

// EstadoPedidoDetalle Routes
router.get("/estadopedidodetalle", EstadoPedidoDetalleController.getAll.bind(EstadoPedidoDetalleController));
router.get("/estadopedidodetalle/:id", EstadoPedidoDetalleController.getByID.bind(EstadoPedidoDetalleController));
router.post("/estadopedidodetalle", EstadoPedidoDetalleController.insertToDB.bind(EstadoPedidoDetalleController));
router.put("/estadopedidodetalle/:id", EstadoPedidoDetalleController.updateById.bind(EstadoPedidoDetalleController));
router.delete("/estadopedidodetalle/:id", EstadoPedidoDetalleController.deleteById.bind(EstadoPedidoDetalleController));

// PedidoDetalle Routes
router.get("/pedidodetalle", PedidoDetalleController.getAll.bind(PedidoDetalleController));
router.get("/pedidodetalle/:id", PedidoDetalleController.getByID.bind(PedidoDetalleController));
router.post("/pedidodetalle", PedidoDetalleController.insertToDB.bind(PedidoDetalleController));
router.put("/pedidodetalle/:id", PedidoDetalleController.updateById.bind(PedidoDetalleController));
router.delete("/pedidodetalle/:id", PedidoDetalleController.deleteById.bind(PedidoDetalleController));

// Inventario Routes
router.get("/inventario", InventarioController.getAll.bind(InventarioController));
router.get("/inventario/:id", InventarioController.getByID.bind(InventarioController));
router.post("/inventario", InventarioController.insertToDB.bind(InventarioController));
router.put("/inventario/:id", InventarioController.updateById.bind(InventarioController));
router.delete("/inventario/:id", InventarioController.deleteById.bind(InventarioController));

// EstadoOrdenReparacion Routes
router.get("/estadoordenreparacion", EstadoOrdenReparacionController.getAll.bind(EstadoOrdenReparacionController));
router.get("/estadoordenreparacion/:id", EstadoOrdenReparacionController.getByID.bind(EstadoOrdenReparacionController));
router.post("/estadoordenreparacion", EstadoOrdenReparacionController.insertToDB.bind(EstadoOrdenReparacionController));
router.put("/estadoordenreparacion/:id", EstadoOrdenReparacionController.updateById.bind(EstadoOrdenReparacionController));
router.delete("/estadoordenreparacion/:id", EstadoOrdenReparacionController.deleteById.bind(EstadoOrdenReparacionController));

// OrdenReparacion Routes
router.get("/ordenreparacion", OrdenReparacionController.getAll.bind(OrdenReparacionController));
router.get("/ordenreparacion/:id", OrdenReparacionController.getByID.bind(OrdenReparacionController));
router.post("/ordenreparacion", OrdenReparacionController.insertToDB.bind(OrdenReparacionController));
router.put("/ordenreparacion/:id", OrdenReparacionController.updateById.bind(OrdenReparacionController));
router.delete("/ordenreparacion/:id", OrdenReparacionController.deleteById.bind(OrdenReparacionController));

// Servicio Routes
router.get("/servicio", ServicioController.getAll.bind(ServicioController));
router.get("/servicio/:id", ServicioController.getByID.bind(ServicioController));
router.post("/servicio", ServicioController.insertToDB.bind(ServicioController));
router.put("/servicio/:id", ServicioController.updateById.bind(ServicioController));
router.delete("/servicio/:id", ServicioController.deleteById.bind(ServicioController));

// EstadoTrabajo Routes
router.get("/estadotrabajo", EstadoTrabajoController.getAll.bind(EstadoTrabajoController));
router.get("/estadotrabajo/:id", EstadoTrabajoController.getByID.bind(EstadoTrabajoController));
router.post("/estadotrabajo", EstadoTrabajoController.insertToDB.bind(EstadoTrabajoController));
router.put("/estadotrabajo/:id", EstadoTrabajoController.updateById.bind(EstadoTrabajoController));
router.delete("/estadotrabajo/:id", EstadoTrabajoController.deleteById.bind(EstadoTrabajoController));

// ServicioOrdenReparacion Routes
router.get("/servicioordenreparacion", ServicioOrdenReparacionController.getAll.bind(ServicioOrdenReparacionController));
router.get("/servicioordenreparacion/:id", ServicioOrdenReparacionController.getByID.bind(ServicioOrdenReparacionController));
router.post("/servicioordenreparacion", ServicioOrdenReparacionController.insertToDB.bind(ServicioOrdenReparacionController));
router.put("/servicioordenreparacion/:id", ServicioOrdenReparacionController.updateById.bind(ServicioOrdenReparacionController));
router.delete("/servicioordenreparacion/:id", ServicioOrdenReparacionController.deleteById.bind(ServicioOrdenReparacionController));

// InventarioOrdenReparacion Routes
router.get("/inventarioordenreparacion", InventarioOrdenReparacionController.getAll.bind(InventarioOrdenReparacionController));
router.get("/inventarioordenreparacion/:id", InventarioOrdenReparacionController.getByID.bind(InventarioOrdenReparacionController));
router.post("/inventarioordenreparacion", InventarioOrdenReparacionController.insertToDB.bind(InventarioOrdenReparacionController));
router.put("/inventarioordenreparacion/:id", InventarioOrdenReparacionController.updateById.bind(InventarioOrdenReparacionController));
router.delete("/inventarioordenreparacion/:id", InventarioOrdenReparacionController.deleteById.bind(InventarioOrdenReparacionController));

// Factura Routes
router.get("/factura", FacturaController.getAll.bind(FacturaController));
router.get("/factura/:id", FacturaController.getByID.bind(FacturaController));
router.post("/factura", FacturaController.insertToDB.bind(FacturaController));
router.put("/factura/:id", FacturaController.updateById.bind(FacturaController));
router.delete("/factura/:id", FacturaController.deleteById.bind(FacturaController));

// Pago Routes
router.get("/pago", PagoController.getAll.bind(PagoController));
router.get("/pago/:id", PagoController.getByID.bind(PagoController));
router.post("/pago", PagoController.insertToDB.bind(PagoController));
router.put("/pago/:id", PagoController.updateById.bind(PagoController));
router.delete("/pago/:id", PagoController.deleteById.bind(PagoController));

// ChatUsuario Routes
router.get("/chatusuario", ChatUsuarioController.getAll.bind(ChatUsuarioController));
router.get("/chatusuario/:id", ChatUsuarioController.getByID.bind(ChatUsuarioController));
router.post("/chatusuario", ChatUsuarioController.insertToDB.bind(ChatUsuarioController));
router.put("/chatusuario/:id", ChatUsuarioController.updateById.bind(ChatUsuarioController));
router.delete("/chatusuario/:id", ChatUsuarioController.deleteById.bind(ChatUsuarioController));

// TipoNotificacion Routes
router.get("/tiponotificacion", TipoNotificacionController.getAll.bind(TipoNotificacionController));
router.get("/tiponotificacion/:id", TipoNotificacionController.getByID.bind(TipoNotificacionController));
router.post("/tiponotificacion", TipoNotificacionController.insertToDB.bind(TipoNotificacionController));
router.put("/tiponotificacion/:id", TipoNotificacionController.updateById.bind(TipoNotificacionController));
router.delete("/tiponotificacion/:id", TipoNotificacionController.deleteById.bind(TipoNotificacionController));

// Notificacion Routes
router.get("/notificacion", NotificacionController.getAll.bind(NotificacionController));
router.get("/notificacion/:id", NotificacionController.getByID.bind(NotificacionController));
router.post("/notificacion", NotificacionController.insertToDB.bind(NotificacionController));
router.put("/notificacion/:id", NotificacionController.updateById.bind(NotificacionController));
router.delete("/notificacion/:id", NotificacionController.deleteById.bind(NotificacionController));

// EmpleadoOrdenReparacion Routes
router.get("/empleadoordenreparacion", EmpleadoOrdenReparacionController.getAll.bind(EmpleadoOrdenReparacionController));
router.get("/empleadoordenreparacion/:id", EmpleadoOrdenReparacionController.getByID.bind(EmpleadoOrdenReparacionController));
router.post("/empleadoordenreparacion", EmpleadoOrdenReparacionController.insertToDB.bind(EmpleadoOrdenReparacionController));
router.put("/empleadoordenreparacion/:id", EmpleadoOrdenReparacionController.updateById.bind(EmpleadoOrdenReparacionController));
router.delete("/empleadoordenreparacion/:id", EmpleadoOrdenReparacionController.deleteById.bind(EmpleadoOrdenReparacionController));

// TipoReporte Routes
router.get("/tiporeporte", TipoReporteController.getAll.bind(TipoReporteController));
router.get("/tiporeporte/:id", TipoReporteController.getByID.bind(TipoReporteController));
router.post("/tiporeporte", TipoReporteController.insertToDB.bind(TipoReporteController));
router.put("/tiporeporte/:id", TipoReporteController.updateById.bind(TipoReporteController));
router.delete("/tiporeporte/:id", TipoReporteController.deleteById.bind(TipoReporteController));

// Reporte Routes
router.get("/reporte", ReporteController.getAll.bind(ReporteController));
router.get("/reporte/:id", ReporteController.getByID.bind(ReporteController));
router.post("/reporte", ReporteController.insertToDB.bind(ReporteController));
router.put("/reporte/:id", ReporteController.updateById.bind(ReporteController));
router.delete("/reporte/:id", ReporteController.deleteById.bind(ReporteController));

// CodigoVerificacion Routes
router.get("/codigoverificacion", CodigoVerificacionController.getAll.bind(CodigoVerificacionController));
router.get("/codigoverificacion/:id", CodigoVerificacionController.getByID.bind(CodigoVerificacionController));
router.post("/codigoverificacion", CodigoVerificacionController.insertToDB.bind(CodigoVerificacionController));
router.put("/codigoverificacion/:id", CodigoVerificacionController.updateById.bind(CodigoVerificacionController));
router.delete("/codigoverificacion/:id", CodigoVerificacionController.deleteById.bind(CodigoVerificacionController));

// Recibo Routes
router.get("/recibo", ReciboController.getAll.bind(ReciboController));
router.get("/recibo/:id", ReciboController.getByID.bind(ReciboController));
router.post("/recibo", ReciboController.insertToDB.bind(ReciboController));
router.put("/recibo/:id", ReciboController.updateById.bind(ReciboController));
router.delete("/recibo/:id", ReciboController.deleteById.bind(ReciboController));

module.exports = router;