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
                    message: "El rol no corresponde a un Proveedor en " + this.table
                });
            } else if (!this.verifyUser(data.id_usuario)) {
                res.status(403).json({
                    message: "El usuario ya se encuentra en Proveedores " + this.table
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
            if (usuario.length === 0) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw new Error("Error al obtener Proveedores con IDUsuario: " + error.message);
        }
    }
}

module.exports = new ProveedorController();
