const MasterController = require("./MasterController");
const { format, addDays } = require('date-fns');
class PedidoController extends MasterController {
    constructor() {
        super('Pedido');
    }
    //crearPedido 
    async insertToDB(req, res) {
        try {
            // Insertar Registro
            let data = {
                fecha_pedido: format(new Date(), 'yyyy-MM-dd'),
                fecha_entrega: format(addDays(new Date(), 7), 'yyyy-MM-dd'),
                estado: 1
            }
            const insertedId = await this.insertToDBTable(data);
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
}

module.exports = new PedidoController();
