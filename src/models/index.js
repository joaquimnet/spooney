const fs = require('fs');
const path = require('path');

const Sequelize = require('sequelize');

const { Logger } = require('../shared');
const { sequelize } = require('../config/db');

const dirFiles = fs.readdirSync(__dirname);
const modelFiles = dirFiles.filter((f) => f.match(/\.model\.js$/));

Logger.debug(`Loading ${modelFiles.length} models.`, modelFiles);

const models = {};
const allSchemas = [];

for (const modelFile of modelFiles) {
  const schema = require(path.resolve(__dirname, modelFile));

  if (!schema.name) throw new Error('Model without name');
  if (!schema.attributes || !Object.keys(schema.attributes).length)
    throw new Error('Model without attributes');

  models[schema.name] = sequelize.define(schema.name, schema.attributes, {
    ...(schema.options || {}),
    tableName: schema.name,
  });

  allSchemas.push(schema);
}

for (const schema of allSchemas) {
  if (schema.associate) {
    schema.associate(models, sequelize, Sequelize);
  }
}

module.exports = models;
