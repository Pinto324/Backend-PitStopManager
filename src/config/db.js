const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: 'metro.proxy.rlwy.net',     // tu host público
    user: 'root',                       // tu usuario
    password: 'qjwKPuQfrgABbChcQCozipfLeCgijzSF',
    database: /*'railway'*/ 'pitshop_manager',
    port: 15941,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

(async () => {
    try {
        const conn = await pool.getConnection();
        console.log("✅ Conexión exitosa a la base de datos en Railway");
        conn.release();
    } catch (err) {
        console.error("❌ Error al conectar con la base de datos:", err.message);
    }
})();

module.exports = { pool };

/*const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

const connectDB = async () => {
    try {
        await pool.getConnection();
        console.log("✅ Conectado a MySQL");
    } catch (error) {
        console.error("❌ Error en la conexión:", error);
        process.exit(1);
    }
};

module.exports = { pool, connectDB };
*/