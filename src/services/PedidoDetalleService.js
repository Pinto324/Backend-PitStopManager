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
}

module.exports = new PedidoDetalleService();
