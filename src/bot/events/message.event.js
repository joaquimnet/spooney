module.exports = (bot, message) => {
  if (!message.author.bot) {
    message.reply('hi!');
  }
};
