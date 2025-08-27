const MasterController = require("./MasterController");
const UsuarioService = require("../services/UsuarioService");
const EmpleadoService = require("../services/EmpleadoService");

class EmpleadoController extends MasterController {
    constructor() {
        super('Empleado');
    }

    async insertToDB(req, res) {
        try {
            const data = req.body;
            if (!await this.verifyRol(data)) {
                res.status(403).json({
                    message: "El rol no corresponde a un Empleado"
                });
            } else if (!await this.verifyUser(data.id_usuario)) {
                res.status(403).json({
                    message: "El usuario ya se encuentra en la tabla " + this.table
                });
            } else {
                // Insertar Registro
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

    async verifyRol(data) {
        try {
            let usuario = await UsuarioService.getById(data.id_usuario);
            //verifica que sea del rol:
            if (usuario.rol === 3) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw new Error("Error al verificar rol: " + error.message);
        }
    }

    async verifyUser(idUser) {
        try {
            let colums = ["id_usuario"];
            let values = [idUser];
            let usuario = await EmpleadoService.getAllByParameters(colums, values);
            console.log(usuario.length);
            if (usuario.length === 0) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw new Error("Error al obtener Proveedores con IDUsuario: " + error.message);
        }
    }

    async getAllByMecanico(req, res) {
        try {
            let colums = [];
            let values = [];
            const { esMecanico, esInterno } = req.params;
            console.log('valores de EsMecanico y Es Interno', esMecanico, esInterno);
            if (esMecanico != 3) {
                colums.push('es_mecanico');
                values.push(esMecanico);
            }
            if (esInterno != 3) {
                colums.push('es_interno');
                values.push(esInterno);
            }
            console.log(colums);
            if (colums.length !== 0) {
                let data = await EmpleadoService.getAllByParameters(colums, values);
                res.status(200).json(data);
            } else {
                let data = await EmpleadoService.getAll();
                res.status(200).json(data);
            }
        } catch (error) {
            res.status(500).json({ message: "Error al encontrar vehículos con ID Cliente" + this.table, name: error.name, code: error.code || "unknown", errorMessage: error.message });
        }
    }

    async getAllEspecialistas(req, res) {
        try {
            const query = `
            SELECT e.id AS id_empleado, u.nombre, u.apellido, te.tipo_especialidad AS especialidad
            FROM Empleado e
            INNER JOIN Usuario u ON e.id_usuario = u.id
            INNER JOIN Especialidad esp ON e.id = esp.id_empleado
            INNER JOIN Tipo_Especialidad te ON esp.id_tipo_especialidad = te.id
            ORDER BY e.id, te.tipo_especialidad;
          `;

            const data = await EmpleadoService.executeQuery(query);

            res.status(200).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Error al encontrar especialistas",
                error: error.message,
            });
        }
    }

    async getAllEspecialistaByTipoEspecialidad(req, res) {
        try {
            const { idTE } = req.params;
            const query = `
SELECT 
    e.id AS id_empleado,
    u.nombre,
    u.apellido,
    te.tipo_especialidad AS especialidad
FROM Empleado e
INNER JOIN Usuario u 
    ON e.id_usuario = u.id
INNER JOIN Especialidad esp 
    ON e.id = esp.id_empleado
INNER JOIN Tipo_Especialidad te 
    ON esp.id_tipo_especialidad = te.id
WHERE te.id = ${idTE}
ORDER BY e.id, te.tipo_especialidad;

          `;

            const data = await EmpleadoService.executeQuery(query);

            res.status(200).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Error al encontrar especialistas",
                error: error.message,
            });
        }
    }

}

module.exports = new EmpleadoController();
