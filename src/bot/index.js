const { Client } = require('discord.js');

// const { Logger } = require('../shared');
const { TOKEN } = require('../config');

const events = require('./events');

module.exports = () => {
  const bot = new Client();

  bot.login(TOKEN);

  for (const eventName of Object.keys(events)) {
    bot.on(eventName, events[eventName].bind(null, bot));
  }
};
