require("dotenv").config();
const express = require("express");
const cors = require("cors");
const loginRoutes = require("./src/routes/loginRoutes");
const rolRoutes = require("./src/routes/rolRoutes");

const app = express();

app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());

app.use("/api/login", loginRoutes);
app.use("/api/rol", rolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
