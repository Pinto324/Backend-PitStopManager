const { pool } = require("../config/db");

class RolService {
    async getRols() {
        const [result] = await pool.execute(
            "select * from Rol;"
        );
        return result;
    }
    async getRolByID(id_rol) {
        const [result] = await pool.execute(
            "select * from rol where id_rol=?;",
            [id_rol]
        );
        return result[0];
    }
}

module.exports = new RolService();