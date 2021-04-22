const fs = require('fs');
const path = require('path');

const { Logger } = require('../../shared');

const dirFiles = fs.readdirSync(__dirname);
const eventFiles = dirFiles.filter((f) => f.match(/.+?\.event\.js$/));

Logger.debug(`Loading ${eventFiles.length} events.`, eventFiles);

const events = {};

for (const eventFile of eventFiles) {
  const handler = require(path.resolve(__dirname, eventFile));

  if (!handler || typeof handler !== "function") throw new Error('Missing event handler ' + eventFile);

  const eventName = path.basename(eventFile).match(/^.+?(?=\.)/)?.[0];
  events[eventName] = handler;
}

module.exports = events;
