const MasterController = require("./MasterController");
const PagoService = require("../services/PagoService");

class PagoController extends MasterController {
    constructor() {
        super('Pago');
    }

    async reporteIngresos(req, res) {
        try {
            let data = await PagoService.ReporteIngresos();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al hacer reporte ingresos" + this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
        
    }

        async reporteEgresos(req, res) {
        try {
            let data = await PagoService.ReporteEgresos();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al hacer reporte ingresos" + this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
        
    }


}

module.exports = new PagoController();
