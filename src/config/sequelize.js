module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'spoon',
    host: 'localhost',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
};
