require("dotenv").config();
const express = require("express");
const cors = require("cors");
const loginRoutes = require("./src/routes/loginRoutes");
const dbRoutes = require("./src/routes/dbRoutes");
const vehiculoRoutes = require("./src/routes/vehiculoRoutes"); 
const empleadoRoutes = require("./src/routes/empleadoRoutes"); 
const proveedorRoutes = require("./src/routes/proveedoresRoutes"); 
const inventarioRoutes = require("./src/routes/inventarioRoutes"); 
const ordenReparacionRoutes = require("./src/routes/ordenReparacionRoutes.js"); 
const ServicioOrdenReparacionRoutes = require("./src/routes/servicioOrdenReparacionRoutes.js"); 
const empleadoOrdenReparacionRoutes = require("./src/routes/empleadoOrdenReparacionRoutes.js"); 
const app = express();

const swaggerDocs = require("./src/config/swagger");

app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());

app.use("/api/login", loginRoutes);
app.use("/api", dbRoutes);
app.use("/api", vehiculoRoutes);
app.use("/api", empleadoRoutes);
app.use("/api", proveedorRoutes);
app.use("/api", inventarioRoutes);
app.use("/api", ordenReparacionRoutes);
app.use("/api", empleadoOrdenReparacionRoutes);
app.use("/api", ServicioOrdenReparacionRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
swaggerDocs(app, PORT);