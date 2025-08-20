// services/EmailService.js
const nodemailer = require('nodemailer');
const crypto = require('crypto');

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'Gmail', // o el servicio que uses
            auth: {
                user: "branps18@gmail.com",
                pass: "ysjs dmac rpdm dwee"
            }
        });
    }

    // Generar código aleatorio de 6 dígitos
    generarCodigoVerificacion() {
        return crypto.randomInt(100000, 999999).toString();
    }

    // Enviar email de verificación
    async enviarEmailVerificacion(email, codigo, nombreUsuario) {
        try {
            const mailOptions = {
                from: "branps18@gmail.com",
                to: email,
                subject: 'Verificación de cuenta - PitShop Manager',
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #333;">Verificación de Cuenta</h2>
                        <p>Hola ${nombreUsuario},</p>
                        <p>Gracias por registrarte en PitShop Manager. Tu código de verificación es:</p>
                        <div style="background-color: #f0f0f0; padding: 20px; text-align: center; margin: 20px 0;">
                            <h1 style="color: #007bff; margin: 0; font-size: 32px;">${codigo}</h1>
                        </div>
                        <p>Este código expirará en 1 hora.</p>
                        <p>Si no solicitaste este registro, por favor ignora este email.</p>
                        <br>
                        <p>Saludos,<br>Equipo de PitShop Manager</p>
                    </div>
                `
            };

            await this.transporter.sendMail(mailOptions);
            console.log(`✅ Email de verificación enviado a: ${email}`);
            return true;
        } catch (error) {
            console.error('❌ Error enviando email:', error);
            throw error;
        }
    }
}

module.exports = new EmailService();