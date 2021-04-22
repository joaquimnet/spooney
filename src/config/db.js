const Sequelize = require('sequelize');
const { Logger } = require('../shared');
const { DB_HOST, DB_USER, DB_PASS, DB_DATABASE } = require('./');

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASS, {
  dialect: 'mysql',
  host: DB_HOST,
  logging: (msg) => Logger.debug(msg),
});

sequelize.authenticate().then(() => {
  Logger.info('DB Okay!');
});

module.exports = {
  sequelize,
};
