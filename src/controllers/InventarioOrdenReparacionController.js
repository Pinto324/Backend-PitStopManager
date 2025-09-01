const MasterController = require("./MasterController");
const InventarioService = require("../services/InventarioService");
const InventarioOrdenReparacionService = require("../services/InventarioOrdenReparacionService");

class InventarioOrdenReparacionController extends MasterController {
    constructor() {
        super('Inventario_Orden_Reparacion');
    }

    async insertToDB(req, res) {
        try {
            const data = req.body;
            //console.log(data);
            if (!await this.verifyRepuesto(data)) {
                res.status(403).json({
                    message: "No hay stock suficiente en el Inventario."
                });
            } else {
                //Reducir Existencias
                await InventarioService.updateStockByIDInventario(data.id_inventario,data.cantidad,0);
                const insertedId = await this.insertToDBTable(data);
                      
                res.status(201).json({
                    message: "Registro insertado correctamente a " + this.table+", Inventario ha sido actualizado",
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

    async verifyRepuesto(data) {
        try {
            let inventario = await InventarioService.getById(data.id_inventario);
            if (inventario.cantidad >= data.cantidad) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw new Error("Error al obtener Respuestos del Inventario: " + error.message);
        }
    }

    async getByIDOrdenReparacion(req, res) {
        try {
            const { idOrdenReparacion } = req.params;
            let colums = ["id_orden_reparacion"];
            let values = [idOrden];
            let data = await InventarioOrdenReparacionService.getAllByParameters(colums, values);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar Repuestos Usados en Orden de Reparación "+this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }

}

module.exports = new InventarioOrdenReparacionController();
