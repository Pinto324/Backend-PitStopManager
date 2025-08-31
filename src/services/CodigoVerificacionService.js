// services/CodigoVerificacionService.js
const Model = require('../controllers/ModelController');
const ModelService = require("./ModelService");

class CodigoVerificacionService extends ModelService {
    constructor() {
        super('Codigo_verificacion');
      }
    async crearCodigoVerificacion(idUsuario) {
        try {
            const EmailService = require('./EmailService');
            const codigo = EmailService.generarCodigoVerificacion();

            // Preparar los datos en el orden exacto de fieldsArray
            const data = {
                id_usuario: idUsuario,
                codigo: codigo,
                fecha: new Date().toISOString().split('T')[0], // YYYY-MM-DD
                hora: new Date().toTimeString().split(' ')[0], // HH:MM:SS
                booleaan: 0, // 0 = false en MySQL
                alerta: 0    // 0 = false en MySQL
            };

            // Insertar en la tabla Codigo_verificacion
            const insertedId = await Model.create('Codigo_verificacion', data);
            return codigo;

        } catch (error) {
            console.error('Error creando código de verificación:', error.message);
            throw error;
        }
    }
    async GenerarCodigoAutenticacion(idUsuario) {
        try {
            const EmailService = require('./EmailService');
            const codigo = EmailService.generarCodigoVerificacion();

            // Preparar los datos en el orden exacto de fieldsArray
            const data = {
                id_usuario: idUsuario,
                codigo: codigo,
                fecha: new Date().toISOString().split('T')[0], // YYYY-MM-DD
                hora: new Date().toTimeString().split(' ')[0], // HH:MM:SS
                booleaan: 1,
                alerta: 0   
            };

            // Insertar en la tabla Codigo_verificacion
            const insertedId = await Model.create('Codigo_verificacion', data);
            return codigo;

        } catch (error) {
            console.error('Error creando código de verificación:', error.message);
            throw error;
        }
    }
    async verificarCodigo(idUsuario, codigoIngresado, EsAutenticacion) {
        try {
            const pool = require('../config/db');
            const query = `
                SELECT * FROM Codigo_verificacion 
                WHERE id_usuario = ? AND codigo = ? 
                AND booleaan = ?
                AND fecha = CURDATE()
                ORDER BY id DESC LIMIT 1
            `;

            const [rows] = await pool.query(query, [idUsuario, codigoIngresado, EsAutenticacion]);

            if (rows.length > 0) {
                console.log(`✅ Código válido encontrado: ${rows[0].id}`);
                // Actualizar usuario como verificado
                await pool.query(
                    'UPDATE Usuario SET correo_verificado = true WHERE id = ?',
                    [idUsuario]
                );

                // Marcar como verificado
                await pool.query(
                    'UPDATE Codigo_verificacion SET booleaan = 1 WHERE id = ?',
                    [rows[0].id]
                );


                return true;
            }

            console.log('❌ Código inválido o expirado');
            return false;

        } catch (error) {
            console.error('Error verificando código:', error.message);
            throw error;
        }
    }
    
}

module.exports = new CodigoVerificacionService();