require("tinv")();

const PORT = process.env.PORT ?? 3000;
const { TOKEN } = process.env;
const DB_HOST = process.env.DB_HOST ?? process.env.QOVERY_DATABASE_SPOON_HOST;
const DB_USER = process.env.DB_USER ?? process.env.QOVERY_DATABASE_SPOON_USERNAME;
const DB_PASS = process.env.DB_PASS ?? process.env.QOVERY_DATABASE_SPOON_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE ?? process.env.QOVERY_DATABASE_SPOON_NAME;

module.exports = {
  PORT,
  TOKEN,
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_DATABASE,
};
