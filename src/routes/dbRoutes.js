const express = require("express");
const router = express.Router();
const RolController = require("../controllers/RolController");
const UsuarioController = require("../controllers/UsuarioController");

//Rol Routes
router.get("/rol", RolController.getAll.bind(RolController));
router.get("/rol:id", RolController.getByID.bind(RolController));
router.post("/rol", RolController.insertToDB.bind(RolController));
router.put("/rol:id", RolController.updateById.bind(RolController));
router.delete("/rol:id", RolController.deleteById.bind(RolController));

//Usuario Routes
router.get("/usuario", UsuarioController.getAll.bind(UsuarioController));
router.get("/usuario:id", UsuarioController.getByID.bind(UsuarioController));
router.post("/usuario", UsuarioController.insertToDB.bind(UsuarioController));
router.put("/usuario:id", UsuarioController.updateById.bind(UsuarioController));
router.delete("/usuario:id", UsuarioController.deleteById.bind(UsuarioController));

module.exports = router;