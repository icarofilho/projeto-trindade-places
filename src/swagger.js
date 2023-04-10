const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./src/swagger.json";

const endPointsFiles = ["src/app/routes/index.js"];

const doc = {
  swagger: "3.0",
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
  ],
};

swaggerAutogen(outputFile, endPointsFiles, doc);
