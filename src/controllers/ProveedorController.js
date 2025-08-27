const MasterController = require("./MasterController");
const UsuarioService = require("../services/UsuarioService");
const ProveedorService = require("../services/ProveedorService");

class ProveedorController extends MasterController {
    constructor() {
        super('Proveedor');
    }

    async insertToDB(req, res) {
        try {
            const data = req.body;
            if (!await this.verifyRol(data)) {
                res.status(403).json({
                    message: "El rol no corresponde a un Proveedor" 
                });
            } else if (!await this.verifyUser(data.id_usuario)) {
                res.status(403).json({
                    message: "El usuario ya se encuentra en la tabla " + this.table
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
            let usuario = await UsuarioService.getById(data.id_usuario);
            //verifica que sea del rol proveedor:
            if (usuario.rol === 4) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw new Error("Error al verificar rol: " + error.message);
        }
    }

    async verifyUser(idUser) {
        try {
            let colums = ["id_usuario"];
            let values = [idUser];
            let usuario = await ProveedorService.getAllByParameters(colums, values);
            console.log(usuario.length);
            if (usuario.length === 0) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw new Error("Error al obtener Proveedores con IDUsuario: " + error.message);
        }
    }

    async getByServicio(req, res) {
        try {
            const { esServicio } = req.params;
            let colums = ["es_servicio"];
            let values = [esServicio];
            let data = await ProveedorService.getAllByParameters(colums, values);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar Proveedores por es_servicio "+this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }

    async getByIDUser(req, res) {
        try {
            const { idUser } = req.params;
            let colums = ["id_usuario"];
            let values = [idUser];
            let data = await ProveedorService.getAllByParameters(colums, values);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar Proveedores por id_usuario "+this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }
    
}

module.exports = new ProveedorController();
