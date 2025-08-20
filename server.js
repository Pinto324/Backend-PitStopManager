require("dotenv").config();
const express = require("express");
const cors = require("cors");
const loginRoutes = require("./src/routes/loginRoutes");
const rolRoutes = require("./src/routes/rolRoutes");
const usuarioRoutes = require("./src/routes/usuarioRoutes");

const app = express();

app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());

app.use("/api/login", loginRoutes);
app.use("/api/rol", rolRoutes);
app.use("/api/usuario", usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
