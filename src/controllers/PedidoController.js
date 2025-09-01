const PedidoService = require("../services/PedidoService");
const MasterController = require("./MasterController");
const { format, addDays } = require('date-fns');
const PedidoDetalleService = require("../services/PedidoDetalleService");
const InventarioService = require("../services/InventarioService")
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

    async updateEstadoPedidoByIDPedido(req, res) {
        try {
            const { id } = req.params;
            const { estado } = req.body;
            const registroUpdated = await PedidoService.updateEstadoByIDPedido(id, estado);
                      
                res.status(201).json({
                    message: "Stock actualizado",
                    id: registroUpdated
                });
            
        } catch (error) {
            throw new Error("Error al actualizar Respuestos con IDRepuesto: " + error.message);
        }
    }

    async aprovePedido(req, res) {
        try {
            const { id } = req.params;//estado 7
            const estado = 7; 
            const estadoDetallePedido = 3; 
            const repuestos = await PedidoService.getRepuestosByIDPedidoEstado(id, estadoDetallePedido);    
            console.log(repuestos);
            //

            this.addToInventario(repuestos);//generar recibo
            await PedidoService.updateEstadoByIDPedido(id, estado);
                res.status(201).json({
                    message: "Stock actualizado",
                    id: repuestos
                });
            
        } catch (error) {
            throw new Error("Error al actualizar Respuestos con IDRepuesto: " + error.message);
        }
    }


    async addToInventario(repuestos) {
        try {
            repuestos.forEach(async repuesto => {
                await InventarioService.updateStockByIDRepuesto(repuesto.id_repuesto, repuesto.cantidad_solicitada, 1);
            });
         
        } catch (error) {
            throw new Error("Error : " + error.message);
        }
    }

}

module.exports = new PedidoController();
