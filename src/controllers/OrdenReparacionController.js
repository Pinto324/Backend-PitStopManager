const MasterController = require("./MasterController");
const OrdenReparacionService = require("../services/OrdenReparacionService");
const VehiculoService = require("../services/VehiculoService");
class OrdenReparacionController extends MasterController {
    constructor() {
        super('Orden_Reparacion');
    }
    //fecha ingreso, hora ingreso, id Vehículo

    async insertToDB(req, res) {
        try {
            const data = req.body;
            jsonData = {
                id_vehiculo: data.id_vehiculo,
                fecha_ingreso: data.fecha_ingreso,
                hora_ingreso: data.hora_ingreso,
                fecha_egreso: data.fecha_ingreso,
                hora_egreso: data.hora_ingreso,
                estado: 1
            }
            // Insertar Registro
            const insertedId = await this.insertToDBTable(jsonData);
            res.status(201).json({
                message: "Registro insertado correctamente a " + this.table,
                id: insertedId
            });

        } catch (error) {
            res.status(500).json({
                message: "Error al insertar registro a " + this.table,
                name: error.name,
                code: error.code || "unknown",
                errorMessage: error.message
            });
        }
    }

    async getByIDVehiculo(req, res) {
        try {
            const { idVehiculo } = req.params;
            let colums = ["id_vehiculo"];
            let values = [idVehiculo];
            let data = await OrdenReparacionService.getAllByParameters(colums, values);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar ordenes de reparación con ID Vehículo" + this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }

    async getByPlacaVehiculo(req, res) {
        try {
            const { placas } = req.params;
            let colums = ["placas"];
            let values = [placas];
            let vehiculo = await VehiculoService.getAllByParameters(colums, values);
            let idVehiculo = vehiculo[0].id;
            //posible if de verificacion
            let colums2 = ["id_vehiculo"];
            let values2 = [idVehiculo];
            let data = await OrdenReparacionService.getAllByParameters(colums2, values2);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar ordenes de reparación con ID Vehículo" + this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }

}

module.exports = new OrdenReparacionController();
