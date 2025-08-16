const express = require("express");
const router = express.Router();
const RolController = require("../controllers/RolController");

router.get("/", RolController.getRoles);
router.get("/:id", RolController.getRolByUID);

module.exports = router;