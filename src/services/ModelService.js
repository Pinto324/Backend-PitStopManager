// services/ModelService.js
const Rol = require('../models/Rol');
const Model = require('../controllers/ModelController');
const Usuario = require('../models/Usuario');

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

    async getObject(data) {
        switch (this.table) {
            case 'Rol':
                return new Rol(null, data.rol);
            case 'Usuario':
                return new Usuario(null, data.nombre, data.apellido, data.username, data.password, data.rol, data.email, data.telefono, data.correo_verificado);
        }
    }
}
module.exports = ModelService;



/*
getObject(data) {
    switch (this.table) {
      case 'Rol':
        return new Rol(null, data.rol);
      default:
        return data;
    }
  }*/