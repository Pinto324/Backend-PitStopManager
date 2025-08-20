// controllers/ModelController.js
const pool = require('../config/db');

const fieldsArray = {
  Rol: ['rol'],
  Usuario: ['nombre', 'apellido', 'username', 'password', 'rol', 'email', 'telefono', 'correo_verificado'],
  Codigo_verificacion: ['id_usuario', 'codigo', 'fecha', 'hora', 'booleaan', 'alerta']
  // aquí puedes ir agregando los demás...
};

class Model {
  static async create(table, data) {
    try {
      const fields = fieldsArray[table].join(', ');
      const placeholders = fieldsArray[table].map(() => '?').join(', ');
      const query = `INSERT INTO ${table} (${fields}) VALUES (${placeholders})`;
      const values = fieldsArray[table].map(field => data[field]);

      const [result] = await pool.query(query, values);
      return result.insertId || null;
    } catch (err) {
      console.error('Error inserting data:', err.message);
      throw err;
    }
  }

  static async findById(table, id) {
    try {
      const query = `SELECT * FROM ${table} WHERE id = ?`;
      const [rows] = await pool.query(query, [id]);
      return rows[0] || null;
    } catch (err) {
      console.error('Error in findById:', err.message);
      throw err;
    }
  }

  static async getAll(table) {
    try {
      const query = `SELECT * FROM ${table}`;
      const [rows] = await pool.query(query);
      return rows;
    } catch (err) {
      console.error('Error in getAll:', err.message);
      throw err;
    }
  }

  static async updateById(table, id, data, columnName) {
    try {
      const query = `UPDATE ${table} SET ${columnName} = ? WHERE id = ?`;
      const values = [data, id];
      const [result] = await pool.query(query, values);
      return result;
    } catch (err) {
      console.error('Error in updateById:', err.message);
      throw err;
    }
  }

  static async deleteById(table, id) {
    try {
      const query = `DELETE FROM ${table} WHERE id = ?`;
      const [result] = await pool.query(query, [id]);
      return result;
    } catch (err) {
      console.error('Error in deleteById:', err.message);
      throw err;
    }
  }
  static async findByCredentials(username, password) {
    try {
      const query = `
            SELECT * FROM Usuario
            WHERE (username = ? OR email = ?) 
            AND password = ?
            LIMIT 1
        `;
      const [rows] = await pool.query(query, [username, username, password]);
      return rows[0] || null;
    } catch (err) {
      console.error('Error in findByCredentials:', err.message);
      throw err;
    }
  }

}

module.exports = Model;
