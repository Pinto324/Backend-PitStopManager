const MasterController = require("./MasterController");
const InventarioService = require("../services/InventarioService.js");
const RepuestoService = require("../services/RepuestoService.js");

class InventarioController extends MasterController {
    constructor() {
        super('Inventario');
    }

    async insertToDB(req, res) {
        try {
            const data = req.body;
            if (!await this.verifyRepuesto(data.id_repuesto)) {
                res.status(403).json({
                    message: "El repuesto ya se encuentra en el inventario."
                });
            } else {
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

    async verifyRepuesto(idRepuesto) {
        try {
            let colums = ["id_repuesto"];
            let values = [idRepuesto];
            let inventario = await InventarioService.getAllByParameters(colums, values);
            console.log(inventario.length);
            if (inventario.length === 0) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw new Error("Error al obtener Respuestos con IDRepuesto: " + error.message);
        }
    }

    async updateStockByIDInventario(req, res) {
        try {
            const { id } = req.params;
            const { cantidad, esAbastecer } = req.body;

            //Verificamos la cantidad en Stock
            let repuestoInventario = await InventarioService.getById(id);

            if (esAbastecer) {
                const updatedData = await InventarioService.updateById(id, "cantidad", cantidad + repuestoInventario.cantidad);
                let repuesto = await RepuestoService.getById(repuestoInventario.id_repuesto);
                res.status(201).json({
                    message: "Se han agregado " + cantidad + " unidades de " + repuesto.nombre_repuesto + " al " + this.table,
                });
            } else {
                if ((repuestoInventario.cantidad - cantidad) < 0) {
                    res.status(403).json({
                        message: "No se cuenta con esa cantidad de unidades."
                    });
                } else {
                    const updatedData = await InventarioService.updateById(id, "cantidad", repuestoInventario.cantidad - cantidad);
                    let repuesto = await RepuestoService.getById(repuestoInventario.id_repuesto);
                    res.status(201).json({
                        message: "Se han descontado " + cantidad + " unidades de " + repuesto.nombre_repuesto + " al " + this.table,
                    });
                }
            }            
        } catch (error) {
            throw new Error("Error al actualizar Respuestos con IDRepuesto: " + error.message);
        }
    }

    async getIDInvByIDRepuesto(req, res) {
        try {
            const { idRepuesto } = req.params;
            let colums = ["id_repuesto"];
            let values = [idRepuesto];
            let data = await InventarioService.getAllByParameters(colums, values);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar Repuestos en Inventario por id_repuesto "+this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }
}

module.exports = new InventarioController();
