const MasterController = require("./MasterController");
const ProveedorRepuestoService = require("../services/ProveedorRepuestoService")

class ProveedorRepuestoController extends MasterController {
    constructor() {
        super('Proveedor_Repuesto');
    }

    async insertToDB(req, res) {
        try {
            const data = req.body;
            if (!await this.verify(data)) {
                res.status(403).json({
                    message: "Este proveedor ya tiene el respuesto en su catálogo."
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

    async verify(datos) {
        try {
            let colums = ['id_proveedor', 'id_repuesto'];
            let values = [datos.id_proveedor, datos.id_repuesto];
            console.log(colums);
            let data = await ProveedorRepuestoService.getAllByParameters(colums, values);
            console.log(data.length);
            if (data.length === 0) {
                return true;
            } else {
                return false;
            }

        } catch (error) {
            res.status(500).json({ message: "Error al encontrar Repuestos correspondientes a un Proveedor" + this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }

    async getRepuestosByIDProveedor(req, res) {
        try {
            const { idProveedor } = req.params;
            let colums = ["id_proveedor"];
            let values = [idProveedor];
            let data = await ProveedorRepuestoService.getAllByParameters(colums, values);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar Repuestos correspondientes a un Proveedor"+this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }

    async getProveedorByIDRepuesto(req, res) {
        try {
            const { idRepuesto } = req.params;
            let colums = ["id_repuesto"];
            let values = [idRepuesto];
            let data = await ProveedorRepuestoService.getAllByParameters(colums, values);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar Proveedores correspondientes a un Repuesto"+this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }
}

module.exports = new ProveedorRepuestoController();
