const { Logger } = require('../../shared');

module.exports = (bot) => {
  Logger.info('Ready! Logged in as', bot.user.tag);
};
