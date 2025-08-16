const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/LoginController");
const authenticateToken = require('../security/authMiddleware');

router.post("/", authenticateToken, LoginController.login);
router.get('/', authenticateToken, (req, res) => {
    res.json({ message: 'Acceso concedido a ruta protegida', user: req.user });
});
module.exports = router;