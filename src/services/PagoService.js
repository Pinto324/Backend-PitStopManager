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
async ReporteEgresos() { 
   const querry = `
SELECT 
    pd.id AS id_pedido_detalle,
    p.id AS id_pedido,
    p.fecha_pedido,
    pr.nombre_empresa AS proveedor,
    r.nombre_repuesto AS producto,
    pd.cantidad_solicitada AS cantidad,
    prr.precio AS precio_unitario,
    (pd.cantidad_solicitada * prr.precio) AS total_gasto
FROM Pedido_Detalle pd
INNER JOIN Pedido p 
    ON pd.id_pedido = p.id
INNER JOIN Proveedor_Repuesto prr 
    ON pd.id_proveedor_repuesto = prr.id
INNER JOIN Proveedor pr 
    ON prr.id_proveedor = pr.id
INNER JOIN Repuesto r 
    ON prr.id_repuesto = r.id
WHERE pd.estado = 7
ORDER BY p.fecha_pedido DESC;

        `;
            const Parametros = [];
            return await Model.executeSelect(querry, Parametros);
  }
}



module.exports = new PagoService();
