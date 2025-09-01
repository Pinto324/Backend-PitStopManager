const express = require('express');
//const ModelService = require('../services/ModelService');
const RolService = require('../services/RolService');
const UsuarioService = require('../services/UsuarioService');
const EmpleadoService = require('../services/EmpleadoService');
const Tipo_EspecialidadService = require('../services/TipoEspecialidadService');
const EspecialidadService = require('../services/EspecialidadService');
const VehiculoService = require('../services/VehiculoService');
const ProveedorService = require('../services/ProveedorService');
const RepuestoService = require('../services/RepuestoService');
const Proveedor_RepuestoService = require('../services/ProveedorRepuestoService');
const Estado_PedidoService = require('../services/EstadoPedidoService');
const PedidoService = require('../services/PedidoService');
const Estado_Pedido_DetalleService = require('../services/EstadoPedidoDetalleService');
const Pedido_DetalleService = require('../services/PedidoDetalleService');
const InventarioService = require('../services/InventarioService');
const Estado_Orden_ReparacionService = require('../services/EstadoOrdenReparacionService');
const Orden_ReparacionService = require('../services/OrdenReparacionService');
const ServicioService = require('../services/ServicioService');
const Estado_TrabajoService = require('../services/EstadoTrabajoService');
const Servicio_Orden_ReparacionService = require('../services/ServicioOrdenReparacionService');
const Inventario_Orden_ReparacionService = require('../services/InventarioOrdenReparacionService');
const FacturaService = require('../services/FacturaService');
const PagoService = require('../services/PagoService');
const Chat_UsuarioService = require('../services/ChatUsuarioService');
const Tipo_NotificacionService = require('../services/TipoNotificacionService');
const NotificacionService = require('../services/NotificacionService');
const Empleado_Orden_ReparacionService = require('../services/EmpleadoOrdenReparacionService');
const TipoReporteService = require('../services/TipoReporteService');
const ReporteService = require('../services/ReporteService');
const Codigo_verificacionService = require('../services/CodigoVerificacionService');
const ReciboService = require('../services/ReciboService');


class MasterController {

    constructor(table) {
        this.table = table;
    }

    async getAll(req, res) {
        try {
            const data = await this.getAllTable();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({
                message: "No se hallaron registros de "+this.table,
                name: error.name,
                code: error.code || "unknown",
                errorMessage: error.message
            });
        }
    }

    async getByID(req, res) {
        try {
            const { id } = req.params;
            const data = await this.getByIDTable(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar a "+this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }

    async insertToDB(req, res) {
        try {
            const data = req.body;
            const insertedId = await this.insertToDBTable(data);
            res.status(201).json({
                message: "Registro insertado correctamente a "+this.table,
                id: insertedId
            });
        } catch (error) {
            res.status(500).json({
                message: "Error al insertar registro a "+this.table,
                name: error.name,
                code: error.code || "unknown",
                errorMessage: error.message
            });
        }
    }

    async updateById(req, res) {
        try {
            const { id } = req.params;
            const { columnName, value } = req.body;

            const result = await this.updateByIdTable(id, value, columnName);

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Registro no encontrado"
                });
            }

            res.status(200).json({
                message: "Se actualizó el registro correctamente en "+this.table,
                id,
                columnName,
                newValue: value
            });
        } catch (error) {
            res.status(500).json({
                message: "Error al actualizar el registro",
                name: error.name,
                code: error.code || "unknown",
                errorMessage: error.message
            });
        }
    }

    async deleteById(req, res) {
        try {
            const { id } = req.params;
    
            const result = await this.deleteByIdTable(id);
    
            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Registro no encontrado en " + this.table
                });
            }
    
            res.status(200).json({
                message: "Registro eliminado correctamente de " + this.table,
                id
            });
        } catch (error) {
            res.status(500).json({
                message: "Error al eliminar el registro de " + this.table,
                name: error.name,
                code: error.code || "unknown",
                errorMessage: error.message
            });
        }
    }

    async getByID(req, res) {
        try {
            const { id } = req.params;
            const data = await this.getByIDTable(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar a "+this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }

    async getAllByParameters(req, res) {
        try {
            const { columns, values } = req.body;
            const data = await this.getAllByParametersTable(columns, values);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar a "+this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }

    async getAllTable() {
        switch (this.table) {
            case 'Rol':
                return await RolService.getAll();
            case 'Usuario':
                return await UsuarioService.getAll();
            case 'Empleado':
                return await EmpleadoService.getAll();
            case 'Tipo_Especialidad':
                return await Tipo_EspecialidadService.getAll();
            case 'Especialidad':
                return await EspecialidadService.getAll();
            case 'Vehiculo':
                return await VehiculoService.getAll();
            case 'Proveedor':
                return await ProveedorService.getAll();
            case 'Repuesto':
                return await RepuestoService.getAll();
            case 'Proveedor_Repuesto':
                return await Proveedor_RepuestoService.getAll();
            case 'Estado_Pedido':
                return await Estado_PedidoService.getAll();
            case 'Pedido':
                return await PedidoService.getAll();
            case 'Estado_Pedido_Detalle':
                return await Estado_Pedido_DetalleService.getAll();
            case 'Pedido_Detalle':
                return await Pedido_DetalleService.getAll();
            case 'Inventario':
                return await InventarioService.getAll();
            case 'Estado_Orden_Reparacion':
                return await Estado_Orden_ReparacionService.getAll();
            case 'Orden_Reparacion':
                return await Orden_ReparacionService.getAll();
            case 'Servicio':
                return await ServicioService.getAll();
            case 'Estado_Trabajo':
                return await Estado_TrabajoService.getAll();
            case 'Servicio_Orden_Reparacion':
                return await Servicio_Orden_ReparacionService.getAll();
            case 'Inventario_Orden_Reparacion':
                return await Inventario_Orden_ReparacionService.getAll();
            case 'Factura':
                return await FacturaService.getAll();
            case 'Pago':
                return await PagoService.getAll();
            case 'Chat_Usuario':
                return await Chat_UsuarioService.getAll();
            case 'Tipo_Notificacion':
                return await Tipo_NotificacionService.getAll();
            case 'Notificacion':
                return await NotificacionService.getAll();
            case 'Empleado_Orden_Reparacion':
                return await Empleado_Orden_ReparacionService.getAll();
            case 'TipoReporte':
                return await TipoReporteService.getAll();
            case 'Reporte':
                return await ReporteService.getAll();
            case 'Codigo_verificacion':
                return await Codigo_verificacionService.getAll();
            case 'Recibo':
                return await ReciboService.getAll();
            default:
                throw new Error(`Tabla ${this.table} no soportada`);
        }
    }

    async getByIDTable(id) {
        switch (this.table) {
            case 'Rol':
                return await RolService.getById(id);
            case 'Usuario':
                return await UsuarioService.getById(id);
            case 'Empleado':
                return await EmpleadoService.getById(id);
            case 'Tipo_Especialidad':
                return await Tipo_EspecialidadService.getById(id);
            case 'Especialidad':
                return await EspecialidadService.getById(id);
            case 'Vehiculo':
                return await VehiculoService.getById(id);
            case 'Proveedor':
                return await ProveedorService.getById(id);
            case 'Repuesto':
                return await RepuestoService.getById(id);
            case 'Proveedor_Repuesto':
                return await Proveedor_RepuestoService.getById(id);
            case 'Estado_Pedido':
                return await Estado_PedidoService.getById(id);
            case 'Pedido':
                return await PedidoService.getById(id);
            case 'Estado_Pedido_Detalle':
                return await Estado_Pedido_DetalleService.getById(id);
            case 'Pedido_Detalle':
                return await Pedido_DetalleService.getById(id);
            case 'Inventario':
                return await InventarioService.getById(id);
            case 'Estado_Orden_Reparacion':
                return await Estado_Orden_ReparacionService.getById(id);
            case 'Orden_Reparacion':
                return await Orden_ReparacionService.getById(id);
            case 'Servicio':
                return await ServicioService.getById(id);
            case 'Estado_Trabajo':
                return await Estado_TrabajoService.getById(id);
            case 'Servicio_Orden_Reparacion':
                return await Servicio_Orden_ReparacionService.getById(id);
            case 'Inventario_Orden_Reparacion':
                return await Inventario_Orden_ReparacionService.getById(id);
            case 'Factura':
                return await FacturaService.getById(id);
            case 'Pago':
                return await PagoService.getById(id);
            case 'Chat_Usuario':
                return await Chat_UsuarioService.getById(id);
            case 'Tipo_Notificacion':
                return await Tipo_NotificacionService.getById(id);
            case 'Notificacion':
                return await NotificacionService.getById(id);
            case 'Empleado_Orden_Reparacion':
                return await Empleado_Orden_ReparacionService.getById(id);
            case 'TipoReporte':
                return await TipoReporteService.getById(id);
            case 'Reporte':
                return await ReporteService.getById(id);
            case 'Codigo_verificacion':
                return await Codigo_verificacionService.getById(id);
            case 'Recibo':
                return await ReciboService.getById(id);
            default:
                throw new Error(`Tabla ${this.table} no soportada`);
        }
    }
    
    async insertToDBTable(data) {
        switch (this.table) {
            case 'Rol':
                return await RolService.create(data);
            case 'Usuario':
                return await UsuarioService.create(data);
            case 'Empleado':
                return await EmpleadoService.create(data);
            case 'Tipo_Especialidad':
                return await Tipo_EspecialidadService.create(data);
            case 'Especialidad':
                return await EspecialidadService.create(data);
            case 'Vehiculo':
                return await VehiculoService.create(data);
            case 'Proveedor':
                return await ProveedorService.create(data);
            case 'Repuesto':
                return await RepuestoService.create(data);
            case 'Proveedor_Repuesto':
                return await Proveedor_RepuestoService.create(data);
            case 'Estado_Pedido':
                return await Estado_PedidoService.create(data);
            case 'Pedido':
                return await PedidoService.create(data);
            case 'Estado_Pedido_Detalle':
                return await Estado_Pedido_DetalleService.create(data);
            case 'Pedido_Detalle':
                return await Pedido_DetalleService.create(data);
            case 'Inventario':
                return await InventarioService.create(data);
            case 'Estado_Orden_Reparacion':
                return await Estado_Orden_ReparacionService.create(data);
            case 'Orden_Reparacion':
                return await Orden_ReparacionService.create(data);
            case 'Servicio':
                return await ServicioService.create(data);
            case 'Estado_Trabajo':
                return await Estado_TrabajoService.create(data);
            case 'Servicio_Orden_Reparacion':
                return await Servicio_Orden_ReparacionService.create(data);
            case 'Inventario_Orden_Reparacion':
                return await Inventario_Orden_ReparacionService.create(data);
            case 'Factura':
                return await FacturaService.create(data);
            case 'Pago':
                return await PagoService.create(data);
            case 'Chat_Usuario':
                return await Chat_UsuarioService.create(data);
            case 'Tipo_Notificacion':
                return await Tipo_NotificacionService.create(data);
            case 'Notificacion':
                return await NotificacionService.create(data);
            case 'Empleado_Orden_Reparacion':
                return await Empleado_Orden_ReparacionService.create(data);
            case 'TipoReporte':
                return await TipoReporteService.create(data);
            case 'Reporte':
                return await ReporteService.create(data);
            case 'Codigo_verificacion':
                return await Codigo_verificacionService.create(data);
            case 'Recibo':
                return await ReciboService.create(data);
            default:
                throw new Error(`Tabla ${this.table} no soportada`);
        }
    }
    
    async updateByIdTable(id, value, columnName) {
        switch (this.table) {
            case 'Rol':
                return await RolService.updateById(id, columnName, value);
            case 'Usuario':
                return await UsuarioService.updateById(id, columnName, value);
            case 'Empleado':
                return await EmpleadoService.updateById(id, columnName, value);
            case 'Tipo_Especialidad':
                return await Tipo_EspecialidadService.updateById(id, columnName, value);
            case 'Especialidad':
                return await EspecialidadService.updateById(id, columnName, value);
            case 'Vehiculo':
                return await VehiculoService.updateById(id, columnName, value);
            case 'Proveedor':
                return await ProveedorService.updateById(id, columnName, value);
            case 'Repuesto':
                return await RepuestoService.updateById(id, columnName, value);
            case 'Proveedor_Repuesto':
                return await Proveedor_RepuestoService.updateById(id, columnName, value);
            case 'Estado_Pedido':
                return await Estado_PedidoService.updateById(id, columnName, value);
            case 'Pedido':
                return await PedidoService.updateById(id, columnName, value);
            case 'Estado_Pedido_Detalle':
                return await Estado_Pedido_DetalleService.updateById(id, columnName, value);
            case 'Pedido_Detalle':
                return await Pedido_DetalleService.updateById(id, columnName, value);
            case 'Inventario':
                return await InventarioService.updateById(id, columnName, value);
            case 'Estado_Orden_Reparacion':
                return await Estado_Orden_ReparacionService.updateById(id, columnName, value);
            case 'Orden_Reparacion':
                return await Orden_ReparacionService.updateById(id, columnName, value);
            case 'Servicio':
                return await ServicioService.updateById(id, columnName, value);
            case 'Estado_Trabajo':
                return await Estado_TrabajoService.updateById(id, columnName, value);
            case 'Servicio_Orden_Reparacion':
                return await Servicio_Orden_ReparacionService.updateById(id, columnName, value);
            case 'Inventario_Orden_Reparacion':
                return await Inventario_Orden_ReparacionService.updateById(id, columnName, value);
            case 'Factura':
                return await FacturaService.updateById(id, columnName, value);
            case 'Pago':
                return await PagoService.updateById(id, columnName, value);
            case 'Chat_Usuario':
                return await Chat_UsuarioService.updateById(id, columnName, value);
            case 'Tipo_Notificacion':
                return await Tipo_NotificacionService.updateById(id, columnName, value);
            case 'Notificacion':
                return await NotificacionService.updateById(id, columnName, value);
            case 'Empleado_Orden_Reparacion':
                return await Empleado_Orden_ReparacionService.updateById(id, columnName, value);
            case 'TipoReporte':
                return await TipoReporteService.updateById(id, columnName, value);
            case 'Reporte':
                return await ReporteService.updateById(id, columnName, value);
            case 'Codigo_verificacion':
                return await Codigo_verificacionService.updateById(id, columnName, value);
            case 'Recibo':
                return await ReciboService.updateById(id, columnName, value);
            default:
                throw new Error(`Tabla ${this.table} no soportada`);
        }
    }
    
    async deleteByIdTable(id) {
        switch (this.table) {
            case 'Rol':
                return await RolService.delete(id);
            case 'Usuario':
                return await UsuarioService.delete(id);
            case 'Empleado':
                return await EmpleadoService.delete(id);
            case 'Tipo_Especialidad':
                return await Tipo_EspecialidadService.delete(id);
            case 'Especialidad':
                return await EspecialidadService.delete(id);
            case 'Vehiculo':
                return await VehiculoService.delete(id);
            case 'Proveedor':
                return await ProveedorService.delete(id);
            case 'Repuesto':
                return await RepuestoService.delete(id);
            case 'Proveedor_Repuesto':
                return await Proveedor_RepuestoService.delete(id);
            case 'Estado_Pedido':
                return await Estado_PedidoService.delete(id);
            case 'Pedido':
                return await PedidoService.delete(id);
            case 'Estado_Pedido_Detalle':
                return await Estado_Pedido_DetalleService.delete(id);
            case 'Pedido_Detalle':
                return await Pedido_DetalleService.delete(id);
            case 'Inventario':
                return await InventarioService.delete(id);
            case 'Estado_Orden_Reparacion':
                return await Estado_Orden_ReparacionService.delete(id);
            case 'Orden_Reparacion':
                return await Orden_ReparacionService.delete(id);
            case 'Servicio':
                return await ServicioService.delete(id);
            case 'Estado_Trabajo':
                return await Estado_TrabajoService.delete(id);
            case 'Servicio_Orden_Reparacion':
                return await Servicio_Orden_ReparacionService.delete(id);
            case 'Inventario_Orden_Reparacion':
                return await Inventario_Orden_ReparacionService.delete(id);
            case 'Factura':
                return await FacturaService.delete(id);
            case 'Pago':
                return await PagoService.delete(id);
            case 'Chat_Usuario':
                return await Chat_UsuarioService.delete(id);
            case 'Tipo_Notificacion':
                return await Tipo_NotificacionService.delete(id);
            case 'Notificacion':
                return await NotificacionService.delete(id);
            case 'Empleado_Orden_Reparacion':
                return await Empleado_Orden_ReparacionService.delete(id);
            case 'TipoReporte':
                return await TipoReporteService.delete(id);
            case 'Reporte':
                return await ReporteService.delete(id);
            case 'Codigo_verificacion':
                return await Codigo_verificacionService.delete(id);
            case 'Recibo':
                return await ReciboService.delete(id);
            default:
                throw new Error(`Tabla ${this.table} no soportada`);
        }
    }

    async getAllByParametersTable(columns, values) {
        switch (this.table) {
            case 'Rol':
                return await RolService.getAllByParameters(columns, values);
            case 'Usuario':
                return await UsuarioService.getAllByParameters(columns, values);
            case 'Empleado':
                return await EmpleadoService.getAllByParameters(columns, values);
            case 'Tipo_Especialidad':
                return await Tipo_EspecialidadService.getAllByParameters(columns, values);
            case 'Especialidad':
                return await EspecialidadService.getAllByParameters(columns, values);
            case 'Vehiculo':
                return await VehiculoService.getAllByParameters(columns, values);
            case 'Proveedor':
                return await ProveedorService.getAllByParameters(columns, values);
            case 'Repuesto':
                return await RepuestoService.getAllByParameters(columns, values);
            case 'Proveedor_Repuesto':
                return await Proveedor_RepuestoService.getAllByParameters(columns, values);
            case 'Estado_Pedido':
                return await Estado_PedidoService.getAllByParameters(columns, values);
            case 'Pedido':
                return await PedidoService.getAllByParameters(columns, values);
            case 'Estado_Pedido_Detalle':
                return await Estado_Pedido_DetalleService.getAllByParameters(columns, values);
            case 'Pedido_Detalle':
                return await Pedido_DetalleService.getAllByParameters(columns, values);
            case 'Inventario':
                return await InventarioService.getAllByParameters(columns, values);
            case 'Estado_Orden_Reparacion':
                return await Estado_Orden_ReparacionService.getAllByParameters(columns, values);
            case 'Orden_Reparacion':
                return await Orden_ReparacionService.getAllByParameters(columns, values);
            case 'Servicio':
                return await ServicioService.getAllByParameters(columns, values);
            case 'Estado_Trabajo':
                return await Estado_TrabajoService.getAllByParameters(columns, values);
            case 'Servicio_Orden_Reparacion':
                return await Servicio_Orden_ReparacionService.getAllByParameters(columns, values);
            case 'Inventario_Orden_Reparacion':
                return await Inventario_Orden_ReparacionService.getAllByParameters(columns, values);
            case 'Factura':
                return await FacturaService.getAllByParameters(columns, values);
            case 'Pago':
                return await PagoService.getAllByParameters(columns, values);
            case 'Chat_Usuario':
                return await Chat_UsuarioService.getAllByParameters(columns, values);
            case 'Tipo_Notificacion':
                return await Tipo_NotificacionService.getAllByParameters(columns, values);
            case 'Notificacion':
                return await NotificacionService.getAllByParameters(columns, values);
            case 'Empleado_Orden_Reparacion':
                return await Empleado_Orden_ReparacionService.getAllByParameters(columns, values);
            case 'TipoReporte':
                return await TipoReporteService.getAllByParameters(columns, values);
            case 'Reporte':
                return await ReporteService.getAllByParameters(columns, values);
            case 'Codigo_verificacion':
                return await Codigo_verificacionService.getAllByParameters(columns, values);
            case 'Recibo':
                return await ReciboService.getAllByParameters(columns, values);
            default:
                throw new Error(`Tabla ${this.table} no soportada`);
        }
    }

}

module.exports = MasterController;