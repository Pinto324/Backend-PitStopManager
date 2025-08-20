const express = require('express');
//const ModelService = require('../services/ModelService');
const UsuarioService = require('../services/UsuarioService');
const RolService = require('../services/RolService');

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

    async getAllTable() {

        switch (this.table) {
            case 'Rol':
                return await RolService.getAll();
            case 'Usuario':
                return await UsuarioService.getAll();
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
            default:
                throw new Error(`Tabla ${this.table} no soportada`);
        }
    }


    async updateByIdTable(id, value, columnName) {
        switch (this.table) {
            case 'Rol':
                return await RolService.updateById(id, value, columnName);
            case 'Usuario':
                return await UsuarioService.updateById(id, value, columnName);
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
            default:
                throw new Error(`Tabla ${this.table} no soportada`);
        }
    }

    

}

module.exports = MasterController;