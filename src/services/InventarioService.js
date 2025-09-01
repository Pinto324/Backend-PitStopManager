const ModelService = require("./ModelService");

class InventarioService extends ModelService {
  constructor() {
    super('Inventario');
  }

  async updateStockByIDInventario(idInventario, cantidad, esAbastecer) {
    try {
      let repuestoInventario = await this.getById(idInventario);
      
      if (esAbastecer) {
        const updatedData = await this.updateById(idInventario, "cantidad", (cantidad + repuestoInventario.cantidad));
        return updatedData;
      } else {
        //console.log('Entra a updateStock', repuestoInventario, cantidad)
        const updatedData = await this.updateById(idInventario, "cantidad", (repuestoInventario.cantidad - cantidad));
        return updatedData;
      }
    } catch (error) {
      throw new Error("Error al actualizar Respuestos con IDRepuesto: " + error.message);
    }
  }

  async updateStockByIDRepuesto(idRepuesto, cantidad, esAbastecer) {
    try {
      let colums = ["id_repuesto"];
      let values = [idRepuesto];
      let data = await this.getAllByParameters(colums, values);
      let repuestoInventario = data[0];
      console.log('Imprime el Respuesto', repuestoInventario);
      if (esAbastecer) {
        const updatedData = await this.updateById(repuestoInventario.id, "cantidad", (cantidad + repuestoInventario.cantidad));
        return updatedData;
      } else {
        //console.log('Entra a updateStock', repuestoInventario, cantidad)
        const updatedData = await this.updateById(repuestoInventario.id, "cantidad", (repuestoInventario.cantidad - cantidad));
        return updatedData;
      }
    } catch (error) {
      throw new Error("Error al actualizar Respuestos con IDRepuesto: " + error.message);
    }
  }
}

module.exports = new InventarioService();
