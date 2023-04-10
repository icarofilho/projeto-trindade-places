const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./src/swagger.json";

const endPointsFiles = ["src/app/routes/index.js"];

const doc = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "trindade-places",
    description: "API criada para estudos com sequelize + postgres",
  },
  host: "localhost:3333",
  basePath: "/",
  schemes: ["http"],
  consumes: ["application/json", "application/xml"],
  produces: ["application/json"],

  tags: [
    {
      name: "Users",
      description: "EndPoint para usuários",
    },
    {
      name: "Places",
      description: "EndPoint para rotas de local",
    },
    {
      name: "Session",
      description: "EndPoint para gerar token",
    },
  ],
};

swaggerAutogen(outputFile, endPointsFiles, doc);
