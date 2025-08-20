const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/UsuarioController");

router.get("/", UsuarioController.getUsuarios);
router.get("/:id", UsuarioController.getUsuarioByUID);
router.post("/add", UsuarioController.postUsuario);

module.exports = router;