// services/CodigoVerificacionService.js
const Model = require('../controllers/ModelController');
const ModelService = require('./ModelService');
const { format } = require('date-fns');
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

        const now = new Date();
        
        const fecha = format(now, 'yyyy-MM-dd');
        const hora = format(now, 'HH:mm:ss');

        const data = {
            id_usuario: idUsuario,
            codigo: codigo,
            fecha: fecha,
            hora: hora,
            booleaan: 1,
            alerta: 0   
        };

        const insertedId = await Model.create('Codigo_verificacion', data);
        return codigo;

    } catch (error) {
        console.error('Error creando código de verificación:', error.message);
        throw error;
    }
}
async verificarCodigo(idUsuario, codigoIngresado, EsAutenticacion) {
    let connection;
    try {
        const pool = require('../config/db');
        connection = await pool.getConnection();
        
        // Iniciar transacción
        await connection.beginTransaction();

        const query = `
            SELECT * FROM Codigo_verificacion 
            WHERE id_usuario = ? AND codigo = ? 
            AND booleaan = ?
            AND fecha = CURDATE()
            ORDER BY id DESC LIMIT 1
        `;

        const [rows] = await connection.query(query, [idUsuario, codigoIngresado, EsAutenticacion]);

        if (rows.length > 0) {
            console.log(`✅ Código válido encontrado: ${rows[0].id}`);
            
            // 1. Actualizar usuario como verificado
            if (!EsAutenticacion) { 
                await connection.query(
                'UPDATE Usuario SET correo_verificado = true WHERE id = ?',
                [idUsuario]
                );
            }


            // 2. Eliminar el código de verificación
            await connection.query(
                'DELETE FROM Codigo_verificacion WHERE id = ?',
                [rows[0].id]
            );

            // Confirmar transacción
            await connection.commit();
            console.log('✅ Transacción completada exitosamente');
            
            return true;
        }

        console.log('❌ Código inválido o expirado');
        
        // Si no hay código válido, hacer rollback por seguridad
        if (connection) await connection.rollback();
        return false;

    } catch (error) {
        if (connection) await connection.rollback();
        console.error('Error verificando código:', error.message);
        throw error;
    } finally {
        if (connection) connection.release();
    }
}
    
}

module.exports = new CodigoVerificacionService();