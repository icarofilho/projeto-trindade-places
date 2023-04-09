// require("dotenv").config();
// const { DIALECT, HOST, USERNAME, PASSWORD, DATABASE } = ;

// module.exports = {
//   dialect: process.env.DIALECT,
//   host: process.env.HOST,
//   username: process.env.USERNAME,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
//   define: {
//     timestamps: true,
//     underscored: true,
//     underscoredAll: true,
//   },
// };
module.exports = {
  dialect: "postgres", // o banco utilizado
  host: "localhost", // endereçamento
  username: "postgres", // username de conexão ao banco
  password: "1234", // senha de conexão ao banco
  database: "trindade-places", // nome do banco que será criado ou conectado
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
