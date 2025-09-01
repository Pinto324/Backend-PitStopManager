const ModelService = require("./ModelService");

class PedidoDetalleService extends ModelService {
  constructor() {
    super('Pedido_Detalle');
  }

  async getDetallePedidosProveedor(idProveedor, estado) {
    console.log(idProveedor);
    const querry = `
SELECT DISTINCT p.id, p.fecha_pedido, p.fecha_entrega, p.estado
FROM Pedido p
INNER JOIN Pedido_Detalle pd ON p.id = pd.id_pedido
INNER JOIN Proveedor_Repuesto pr ON pd.id_proveedor_repuesto = pr.id
INNER JOIN Proveedor prov ON pr.id_proveedor = prov.id
WHERE prov.id = ${idProveedor} AND p.estado = ${estado}
         `;
    return await this.executeQuery(querry);
  }

  async updateEstadoByIDDetallePedido(idDetallePedido, estado) {
    try {
        const updatedData = await this.updateById(idDetallePedido, "estado", estado);
        return updatedData;
       
    } catch (error) {
      throw new Error("Error al actualizar Respuestos con IDRepuesto: " + error.message);
    }
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

module.exports = new PedidoDetalleService();
