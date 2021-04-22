require('./config/db');

const web = require('./web');
const bot = require('./bot');

web();
bot();
