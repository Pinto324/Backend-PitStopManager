const MasterController = require("./MasterController");
const ServicioOrdenReparacionService = require("../services/ServicioOrdenReparacionService");
const ServicioService = require("../services/ServicioService");
const OrdenReparacionService = require("../services/OrdenReparacionService")

class ServicioOrdenReparacionController extends MasterController {
    constructor() {
        super('Servicio_Orden_Reparacion');
    }
    //idOrdenReparacion, idServicio
    async insertToDB(req, res) {
        try {
            const data = req.body;

            jsonData = {
                id_orden_reparacion: data.id_orden_reparacion,
                id_servicio: data.id_servicio,
                id_estado_trabajo: 2
            }
            // Insertar Registro
            const insertedId = await this.insertToDBTable(jsonData);
            //añade el tiempo al valor total estimado.
            calculateTime(insertedId);
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

    async getByOrdenReparacion(req, res) {
        try {
            const { idOrdenReparacion } = req.params;
            let colums = ["id_orden_reparacion"];
            let values = [idOrdenReparacion];
            let data = await ServicioOrdenReparacionService.getAllByParameters(colums, values);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar Servicios de una Orden Reparación con ID Orden Reparación" + this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }
//Tiempo en Horas
    async calculateTime(idServicioOR) {
        try {
            let servicioOR = await ServicioOrdenReparacionService.getById(idServicioOR);
        let horas = servicioOR.tiempo_estimado;  
        let valueFecha = `
            DATE(
                DATE_ADD(
                    STR_TO_DATE(CONCAT(fecha_egreso, ' ', hora_egreso), '%Y-%m-%d %H:%i:%s'),
                    INTERVAL ${horas} HOUR
                )
            )`;

        let valueHora = `
            TIME(
                DATE_ADD(
                    STR_TO_DATE(CONCAT(fecha_egreso, ' ', hora_egreso), '%Y-%m-%d %H:%i:%s'),
                    INTERVAL ${horas} HOUR
                )
            )`;
            //actualizar hora y fecha:
            await ServicioOrdenReparacionService.updateById(idServicioOR, valueFecha, 'fecha_egreso');
            await ServicioOrdenReparacionService.updateById(idServicioOR, valueHora, 'fecha_egreso');
  
        } catch (error) {
            throw new Error("Error al calcular tiempo de salida: " + error.message);
        }
    }

    
}

module.exports = new ServicioOrdenReparacionController();
