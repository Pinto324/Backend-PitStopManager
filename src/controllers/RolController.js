const express = require('express');
const ModelService = require('../services/ModelService');
const RolService = new ModelService('Rol');

class RolController {
    async getRoles(req, res) {
        try {
            const roles = await RolService.getAll();
            res.status(200).json(roles);
        } catch (error) {
            res.status(500).json({ message: "Roles no ecnontrados", name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }
    
    async getRolByUID(req, res) {
        try {
            const { id } = req.params;
            const rol = await RolService.getById(id);
            res.status(200).json(rol);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar a rol", name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }
}

module.exports = new RolController();