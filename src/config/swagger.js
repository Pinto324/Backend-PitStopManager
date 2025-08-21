const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de tu Proyecto",
      version: "1.0.0",
      description: "Documentación automática con Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000", // Cambia el puerto si es diferente
      },
    ],
  },
  apis: [path.join(__dirname, "../routes/*.js")],// Aquí indicas dónde están tus rutas
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app, port) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`📄 Swagger Docs disponible en: http://localhost:${port}/api-docs`);
}

module.exports = swaggerDocs;
