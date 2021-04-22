require("tinv")();

const { PORT } = process.env;
const { TOKEN } = process.env;
const { DB_HOST } = process.env;
const { DB_USER } = process.env;
const { DB_PASS } = process.env;
const { DB_DATABASE } = process.env;

module.exports = {
  PORT,
  TOKEN,
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_DATABASE,
};
