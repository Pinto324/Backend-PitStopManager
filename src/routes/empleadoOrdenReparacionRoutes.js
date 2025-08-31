const express = require("express");
const router = express.Router();
const EmpleadoOrdenReparacionController = require("../controllers/EmpleadoOrdenReparacionController");

router.get("/empleadoordenreparacion/empleadoDisponible/:idOrden", EmpleadoOrdenReparacionController.getEmpleadosDisponibles.bind(EmpleadoOrdenReparacionController));

module.exports = router;