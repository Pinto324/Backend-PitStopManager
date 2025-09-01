const ModelService = require("./ModelService");

class PedidoService extends ModelService {
  constructor() {
    super('Pedido');
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
