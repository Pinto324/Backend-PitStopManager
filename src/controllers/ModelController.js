const pool = require('../config/db');

const fieldsArray = {
  Rol: ['rol'],
  Usuario: ['nombre', 'apellido', 'username', 'password', 'rol', 'email', 'telefono', 'correo_verificado', 'verificacion_activa'],
  Empleado: ['id_usuario', 'es_mecanico', 'es_interno'],
  Tipo_Especialidad: ['tipo_especialidad'],
  Especialidad: ['id_empleado', 'id_tipo_especialidad'],
  Vehiculo: ['id_cliente', 'marca', 'modelo', 'placas'],
  Proveedor: ['id_usuario', 'nombre_empresa', 'es_servicio', 'descripcion'],
  Repuesto: ['nombre_repuesto'],
  Proveedor_Repuesto: ['id_proveedor', 'id_repuesto', 'precio'],
  Estado_Pedido: ['estado'],
  Pedido: ['fecha_pedido', 'fecha_entrega', 'estado'],
  Estado_Pedido_Detalle: ['estado'],
  Pedido_Detalle: ['id_pedido', 'id_proveedor_repuesto', 'estado', 'cantidad_solicitada'],
  Inventario: ['id_repuesto', 'cantidad', 'precio_unitario'],
  Estado_Orden_Reparacion: ['estado'],
  Orden_Reparacion: ['id_vehiculo', 'fecha_ingreso', 'hora_ingreso', 'fecha_egreso', 'hora_egreso', 'estado'],
  Servicio: ['servicio', 'es_correctivo', 'descripcion', 'tiempo_estimado', 'precio'],
  Estado_Trabajo: ['estado'],
  Servicio_Orden_Reparacion: ['id_orden_reparacion', 'id_servicio', 'id_estado_trabajo'],
  Inventario_Orden_Reparacion: ['id_inventario', 'id_orden_reparacion', 'cantidad'],
  Factura: ['id_orden_reparacion', 'fecha', 'total'],
  Pago: ['id_factura', 'monto', 'fecha'],
  Chat_Usuario: ['id_orden_reparacion', 'mensaje', 'visto'],
  Tipo_Notificacion: ['tipo_notificacion'],
  Notificacion: ['id_pedido', 'id_tipo_notificacion', 'comentario', 'fecha', 'hora'],
  Empleado_Orden_Reparacion: ['id_empleado', 'id_orden_reparacion', 'es_especialista'],
  TipoReporte: ['tipo_reporte', 'mostrar_mecanico'],
  Reporte: ['id_empleado_orden_reparacion', 'id_tipo_reporte', 'observaciones', 'solucionado', 'fecha', 'hora'],
  Codigo_verificacion: ['id_usuario', 'codigo', 'fecha', 'hora', 'booleaan', 'alerta'],
  Recibo: ['id_pedido', 'fecha', 'total']
  
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

  static async getAllByParameters(table, columns, values) {
    try {
      let text = "";
      console.log('Table: '+table, 'columna:'+columns, 'values:'+ values)
      for (let index = 0; index < columns.length; index++) {
        text += `${columns[index]} = ? `;
        if (index !== columns.length - 1) {
          text += "AND ";
        }
      }
      console.log ('Ejecutando text:') 
      const query = `SELECT * FROM ${table} WHERE ${text}`;
      console.log("Ejecutando query:", query);
  
      const [rows] = await pool.query(query, values);
  
      return rows; // 👈 ahora sí devuelve resultados reales
    } catch (err) {
      console.error("Error in getAllByParameters:", err.message);
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
