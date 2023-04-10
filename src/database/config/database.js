const {
  env: { DB_DIALECT, DB_HOST, DB_PASSWORD, DB_USERNAME, DATABASE_NAME },
} = process;

module.exports = {
  dialect: DB_DIALECT,
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DATABASE_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
