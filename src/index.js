require('./config/db');

const { Logger } = require('./shared');

Logger.info(`Spooney v${require('../package.json').version}`);
Logger.info(`Running on Node ${process.version}`);

const web = require('./web');
const bot = require('./bot');

web();
bot();
