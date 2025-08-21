require("dotenv").config();
const express = require("express");
const cors = require("cors");
const loginRoutes = require("./src/routes/loginRoutes");
const dbRoutes = require("./src/routes/dbRoutes");

const app = express();

const swaggerDocs = require("./src/config/swagger");

app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());

app.use("/api/login", loginRoutes);
app.use("/api", dbRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
	console.log('Documentación en http://localhost:3000/api-docs');
});
swaggerDocs(app, PORT);