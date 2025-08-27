const MasterController = require("./MasterController");
const VehiculoService = require("../services/VehiculoService");
const UsuarioService = require("../services/UsuarioService")
class VehiculoController extends MasterController {
    constructor() {
        super('Vehiculo');
    }

    async insertToDB(req, res) {
        try {
            const data = req.body;

            if (!await this.verifyPlacas(data.placas)) {
                res.status(403).json({
                    message: "Las placas del vehículo ya se encuentran registradas en la tabla " + this.table
                });
            } else if (!await this.verifyRol(data)) {
                res.status(403).json({
                    message: "El rol no corresponde a un Cliente" 
                });
            } else {
                // Insertar Registro
                const insertedId = await this.insertToDBTable(data);
                res.status(201).json({
                    message: "Registro insertado correctamente a " + this.table,
                    id: insertedId
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Error al insertar registro a " + this.table,
                name: error.name,
                code: error.code || "unknown",
                errorMessage: error.message
            });
        }
    }

    async verifyRol(data) {
        try {
            let usuario = await UsuarioService.getById(data.id_cliente);
            if (usuario.rol === 2) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw new Error("Error al verificar rol: " + error.message);
        }
    }

    async getByIDUser(req, res) {
        try {
            const { idUser } = req.params;
            let colums = ["id_cliente"];
            let values = [idUser];
            let data = await VehiculoService.getAllByParameters(colums, values);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar vehículos con ID Cliente"+this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }
    
    async verifyPlacas(placa) {
        try {
            let colums = ["placas"];
            let values = [placa];
            let data = await VehiculoService.getAllByParameters(colums, values);
            if (data.length === 0) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw new Error("Error al obtener Vehículos con placas: " + error.message);
        }
    }

}

module.exports = new VehiculoController();
