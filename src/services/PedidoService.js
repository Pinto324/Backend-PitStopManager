const ModelService = require("./ModelService");

class PedidoService extends ModelService {
  constructor() {
    super('Pedido');
  }

  async getRepuestosByIDPedidoEstado(idPedido, estado) {
    const querry = `
SELECT 
    r.id AS id_repuesto,
    r.nombre_repuesto,
    pd.id AS id_pedido_detalle,
    pd.cantidad_solicitada,
    pd.estado AS estado_detalle,
    pr.precio,
    prov.nombre_empresa AS proveedor
FROM Pedido_Detalle pd
INNER JOIN Proveedor_Repuesto pr ON pd.id_proveedor_repuesto = pr.id
INNER JOIN Repuesto r ON pr.id_repuesto = r.id
INNER JOIN Proveedor prov ON pr.id_proveedor = prov.id
WHERE pd.id_pedido = ${idPedido} 
  AND pd.estado = ${estado} 
         `;
    return await this.executeQuery(querry);
  }

  async updateEstadoByIDPedido(idPedido, estado) {
    try {
        const updatedData = await this.updateById(idPedido, "estado", estado);
        return updatedData;
       
    } catch (error) {
      throw new Error("Error al actualizar Respuestos con IDRepuesto: " + error.message);
    }
  }
}

module.exports = new PedidoService();
