const MasterController = require("./MasterController");
const PedidoDetalleService = require("../services/PedidoDetalleService")

class PedidoDetalleController extends MasterController {
    constructor() {
        super('Pedido_Detalle');
    }
    //idproveedorrepuesto, cantidad solicitada, estado
    async insertToDB(req, res) {
        try {
            const data = req.body;
            if (!await this.verify(data)) {
                let colums = ['id_pedido', 'id_proveedor_repuesto'];
                let values = [data.id_pedido, data.id_proveedor_repuesto];
                const listPedidoDetalle = await PedidoDetalleService.getAllByParameters(colums, values);
                const pedidoDetalle = listPedidoDetalle[0];
                const updatedPedidoDetalle = await PedidoDetalleService.updateById(pedidoDetalle.id,"cantidad_solicitada",pedidoDetalle.cantidad_solicitada+data.cantidad_solicitada); 
                console.log(updatedPedidoDetalle)
                res.status(201).json({
                    message: "Registro actualizado correctamente a " + this.table,
                    id: updatedPedidoDetalle
                });
            } else{
                const insertedId = await this.insertToDBTable(data);
                res.status(201).json({
                    message: "Registro insertado correctamente a " + this.table,
                    id: insertedId
                });
            } 

        } catch (error) {
            res.status(500).json({
                message: "Error al insertar registro a " + this.table,
                name: error.name,
                code: error.code || "unknown",
                errorMessage: error.message
            });
        }
    }

    async verify(datos) {
        try {
            let colums = ['id_pedido', 'id_proveedor_repuesto'];
            let values = [datos.id_pedido, datos.id_proveedor_repuesto];
            console.log(colums);
            let data = await PedidoDetalleService.getAllByParameters(colums, values);
            console.log(data.length);
            if (data.length === 0) {
                return true;
            } else {
                return false;
            }

        } catch (error) {
            res.status(500).json({ message: "Error al encontrar Repuestos correspondientes a un Proveedor en Detalle del Pedido" + this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }

    async getPedidoDetalleByIdPedido(req, res) {
        try {
            const { idPedido } = req.params;
            let colums = ["id_pedido"];
            let values = [idPedido];
            console.log(idPedido);
            let data = await PedidoDetalleService.getAllByParameters(colums, values);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar Repuestos Solicitados correspondientes a un Detalle Pedido"+this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }

    async getPedidoByIDProveedor(req, res) {
        try {
            const { idProveedor } = req.params;
            let data = await PedidoDetalleService.getDetallePedidosProveedor(idProveedor);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar ordenes de reparación del empleado" + this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }

}

module.exports = new PedidoDetalleController();
