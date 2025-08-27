// services/ModelService.js
const Model = require('../controllers/ModelController');
const Rol = require('../models/Rol');
const Usuario = require('../models/Usuario');
const Empleado = require('../models/Empleado');
const TipoEspecialidad = require('../models/TipoEspecialidad');
const Especialidad = require('../models/Especialidad');
const Vehiculo = require('../models/Vehiculo');
const Proveedor = require('../models/Proveedor');
const Repuesto = require('../models/Repuesto');
const ProveedorRepuesto = require('../models/ProveedorRepuesto');
const EstadoPedido = require('../models/EstadoPedido');
const Pedido = require('../models/Pedido');
const EstadoPedidoDetalle = require('../models/EstadoPedidoDetalle');
const PedidoDetalle = require('../models/PedidoDetalle');
const Inventario = require('../models/Inventario');
const EstadoOrdenReparacion = require('../models/EstadoOrdenReparacion');
const OrdenReparacion = require('../models/OrdenReparacion');
const Servicio = require('../models/Servicio');
const EstadoTrabajo = require('../models/EstadoTrabajo');
const ServicioOrdenReparacion = require('../models/ServicioOrdenReparacion');
const InventarioOrdenReparacion = require('../models/InventarioOrdenReparacion');
const Factura = require('../models/Factura');
const Pago = require('../models/Pago');
const ChatUsuario = require('../models/ChatUsuario');
const TipoNotificacion = require('../models/TipoNotificacion');
const Notificacion = require('../models/Notificacion');
const EmpleadoOrdenReparacion = require('../models/EmpleadoOrdenReparacion');
const TipoReporte = require('../models/TipoReporte');
const Reporte = require('../models/Reporte');
const CodigoVerificacion = require('../models/CodigoVerificacion');
const Recibo = require('../models/Recibo');

class ModelService {
    constructor(table) {
        this.table = table;
    }

    async create(data) {
        return await Model.create(this.table, data);
    }

    async getById(id) {
        return await Model.findById(this.table, id);
    }

    async getAll() {
        return await Model.getAll(this.table);
    }

    async updateById(id, columnName, value) {
        return await Model.updateById(this.table, id, columnName, value);
    }

    async delete(id) {
        return await Model.deleteById(this.table, id);
    }

    async getAllByParameters(columns, values) {
        return await Model.getAllByParameters(this.table, columns, values);
    }

    async executeQuery(query) {
        console.log(query);
        return await Model.executeSelect(query);
    }

    async getObject(data) {
        switch (this.table) {
            case 'Rol':
                return new Rol(null, data.rol);
            case 'Usuario':
                return new Usuario(null, data.nombre, data.apellido, data.username, data.password, data.rol, data.email, data.telefono, data.correo_verificado, data.verificacion_activa);
            case 'Empleado':
                return new Empleado(null, data.id_usuario, data.es_mecanico, data.es_interno);
            case 'Tipo_Especialidad':
                return new TipoEspecialidad(null, data.tipo_especialidad);
            case 'Especialidad':
                return new Especialidad(null, data.id_empleado, data.id_tipo_especialidad);
            case 'Vehiculo':
                return new Vehiculo(null, data.id_cliente, data.marca, data.modelo, data.placas);
            case 'Proveedor':
                return new Proveedor(null, data.id_usuario, data.nombre_empresa, data.es_servicio, data.descripcion);
            case 'Repuesto':
                return new Repuesto(null, data.nombre_repuesto);
            case 'Proveedor_Repuesto':
                return new ProveedorRepuesto(null, data.id_proveedor, data.id_repuesto, data.precio);
            case 'Estado_Pedido':
                return new EstadoPedido(null, data.estado);
            case 'Pedido':
                return new Pedido(null, data.fecha_pedido, data.fecha_entrega, data.estado);
            case 'Estado_Pedido_Detalle':
                return new EstadoPedidoDetalle(null, data.estado);
            case 'Pedido_Detalle':
                return new PedidoDetalle(null, data.id_pedido, data.id_proveedor_repuesto, data.estado, data.cantidad_solicitada);
            case 'Inventario':
                return new Inventario(null, data.id_repuesto, data.cantidad, data.precio_unitario);
            case 'Estado_Orden_Reparacion':
                return new EstadoOrdenReparacion(null, data.estado);
            case 'Orden_Reparacion':
                return new OrdenReparacion(null, data.id_vehiculo, data.fecha_ingreso, data.hora_ingreso, data.fecha_egreso, data.hora_egreso, data.estado);
            case 'Servicio':
                return new Servicio(null, data.servicio, data.es_correctivo, data.descripcion, data.tiempo_estimado, data.precio);
            case 'Estado_Trabajo':
                return new EstadoTrabajo(null, data.estado);
            case 'Servicio_Orden_Reparacion':
                return new ServicioOrdenReparacion(null, data.id_orden_reparacion, data.id_servicio, data.id_estado_trabajo);
            case 'Inventario_Orden_Reparacion':
                return new InventarioOrdenReparacion(null, data.id_inventario, data.id_orden_reparacion, data.cantidad);
            case 'Factura':
                return new Factura(null, data.id_orden_reparacion, data.fecha, data.total);
            case 'Pago':
                return new Pago(null, data.id_factura, data.monto, data.fecha);
            case 'Chat_Usuario':
                return new ChatUsuario(null, data.id_orden_reparacion, data.mensaje, data.visto);
            case 'Tipo_Notificacion':
                return new TipoNotificacion(null, data.tipo_notificacion);
            case 'Notificacion':
                return new Notificacion(null, data.id_pedido, data.id_tipo_notificacion, data.comentario, data.fecha, data.hora);
            case 'Empleado_Orden_Reparacion':
                return new EmpleadoOrdenReparacion(null, data.id_empleado, data.id_orden_reparacion, data.es_especialista);
            case 'TipoReporte':
                return new TipoReporte(null, data.tipo_reporte, data.mostrar_mecanico);
            case 'Reporte':
                return new Reporte(null, data.id_empleado_orden_reparacion, data.id_tipo_reporte, data.observaciones, data.solucionado, data.fecha, data.hora);
            case 'Codigo_verificacion':
                return new CodigoVerificacion(null, data.id_usuario, data.codigo, data.fecha, data.hora, data.booleaan, data.alerta);
            case 'Recibo':
                return new Recibo(null, data.id_pedido, data.fecha, data.total);
            default:
                throw new Error(`Tabla no reconocida: ${this.table}`);
        }
    }
}
module.exports = ModelService;
