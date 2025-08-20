const express = require('express');
const ModelService = require('../services/ModelService');
const UsuarioService = new ModelService('Usuario');

class UsuarioController {
    async getUsuarios(req, res) {
        try {
            const usuarios = await UsuarioService.getAll();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ message: "Usuarios no encontrados", name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }
    
    async getUsuarioByUID(req, res) {
        try {
            const { id } = req.params;
            const usuario = await UsuarioService.getById(id);
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar a Usuario", name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }

    async postUsuario(req, res) {
        try {
            const data = req.body;  
            const insertedId = await UsuarioService.create(data);
            res.status(201).json({
                message: "Usuario creado correctamente",
                id: insertedId
            });
        } catch (error) {
            res.status(500).json({
                message: "Error al crear Usuario",
                name: error.name,
                code: error.code || "unknown",
                errorMessage: error.message
            });
        }
    }
    
}

module.exports = new UsuarioController();