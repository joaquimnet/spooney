const ponaserv = require('ponaserv');
const express = require('express');
const path = require('path');

const { Logger } = require('../shared');
const { PORT } = require('../config');

module.exports = () => {
  const app = express();

  ponaserv(app, {
    services: path.join(__dirname, './services'),
  });

  app.use(express.static(path.resolve(__dirname, 'public')));

  return app.listen(PORT ?? 3000, () => {
    Logger.info('Web server listening on port', PORT);
  });
};
