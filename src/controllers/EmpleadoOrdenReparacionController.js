const MasterController = require("./MasterController");
const OrdenReparacionService = require("../services/OrdenReparacionService");
const EmpleadoOrdenReparacionService = require("../services/EmpleadoOrdenReparacionService");

class EmpleadoOrdenReparacionController extends MasterController {
    constructor() {
        super('Empleado_Orden_Reparacion');
    }
//id_orden_reparacion, id empleado
    async insertToDB(req, res) {
        try {
            const data = req.body;
            //verifica si el empleado está libre
            //verificar si el usuario se repite
            if (await EmpleadoOrdenReparacionService.verifyEmpleadoLibre(data.id_empleado)) {
                let jsonData = {
                    id_empleado: data.id_empleado,
                    id_orden_reparacion: data.id_orden_reparacion,
                    es_especialista: await EmpleadoOrdenReparacionService.verifyEspecialista(data.id_empleado)
                }
            // Insertar Registro
            const insertedId = await this.insertToDBTable(jsonData);
            res.status(201).json({
                message: "Registro insertado correctamente a " + this.table,
                id: insertedId
            });
            }else{

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

    async getEmpleadosDisponibles(req, res) {
        try {
            const { esEspecialista } = req.params;
            const data =  await EmpleadoOrdenReparacionService.getEmpleadosLibres(esEspecialista);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar Empleados libres según ID de Orden Reparacion" + this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }
}

module.exports = new EmpleadoOrdenReparacionController();
