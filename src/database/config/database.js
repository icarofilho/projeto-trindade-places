const {
  env: { DIALECT, HOST, USERNAME, PASSWORD, DATABASE },
} = process;

// module.exports = {
//   dialect: DIALECT,
//   host: HOST,
//   username: USERNAME,
//   password: PASSWORD,
//   database: DATABASE,
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
