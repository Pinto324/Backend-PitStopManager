// controllers/UsuarioController.js
const MasterController = require('./MasterController');
const EmailService = require('../services/EmailService');
const CodigoVerificacionService = require('../services/CodigoVerificacionService');
const UsuarioService = require('../services/UsuarioService'); 
const cripto = require('../security/cripto');

class UsuarioController extends MasterController {
  constructor() {
    super('Usuario');
  }

  // Sobrescribir el método insertToDB para agregar funcionalidad de email
  async insertToDB(req, res) {
    try {
      const data = req.body;

      // 1. Encriptar la contraseña antes de insertar
      if (data.password) {
        data.password = await cripto.encriptar(data.password);
      }

      // 2. Insertar el usuario usando la lógica del padre
      const insertedId = await this.insertToDBTable(data);

      // 3. Enviar email de verificación (solo si tiene email)
      if (data.email) {
        try {
          const codigo = await CodigoVerificacionService.crearCodigoVerificacion(insertedId);

          await EmailService.enviarEmailVerificacion(
            data.email,
            codigo,
            data.nombre || data.username || 'Usuario'
          );

          console.log(`✅ Email de verificación enviado a: ${data.email}`);

        } catch (emailError) {
          console.error('⚠️ Error enviando email (usuario creado):', emailError.message);
        }
      }

      res.status(201).json({
        message: "Usuario creado correctamente. " +
          (data.email ? "Se ha enviado un código de verificación a tu email." : ""),
        id: insertedId,
        necesitaVerificacion: !!data.email
      });

    } catch (error) {
      console.error('Error en UsuarioController.insertToDB:', error);
      res.status(500).json({
        message: "Error al crear Usuario",
        name: error.name,
        code: error.code || "unknown",
        errorMessage: error.message
      });
    }
  }

  async getClientes(req, res) {
    try {
        let colums = ["rol"];
        let values = [2];
        let data = await UsuarioService.getAllByParameters(colums, values);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error al encontrar Clientes"+this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
    }
  }
  async ObtenerDatosDeVehiculos(req, res) {
    try {
        const { id } = req.params;
        let data = await UsuarioService.ObtenerDatosDeVehiculos(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error al encontrar vehiculos"+this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
    }
  }
  async ObtenerDatosDeVehiculosDetalle(req, res) {
    try {
        const { id } = req.params;
        let data = await UsuarioService.ObtenerDatosDeVehiculosDetalle(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error al encontrar detalle del vehiculo"+this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
    }
  }
    async reporteHistorialCliente(req, res) {
        try {
            const { id } = req.params;
            let data = await UsuarioService.reporteHistorialCliente(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Error al hacer reporte de trabajo por filtro trabajo" + this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
        
    }

  
}

module.exports = new UsuarioController();