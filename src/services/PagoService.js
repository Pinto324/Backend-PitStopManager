const ModelService = require("./ModelService");
const Model = require("../controllers/ModelController");
class PagoService extends ModelService {
  constructor() {
    super('Pago');
  }
async ReporteIngresos() { 
   const querry = `
SELECT 
    p.id AS id_pago,
    p.fecha AS fecha_pago,
    p.monto AS ingreso,
    f.id AS id_factura,
    f.fecha AS fecha_recibo,
    f.total AS total_recibo
FROM Pago p
INNER JOIN Factura f 
    ON p.id_factura = f.id
ORDER BY p.fecha DESC;
        `;
            const Parametros = [];
            return await Model.executeSelect(querry, Parametros);
  }

}

module.exports = new PagoService();
