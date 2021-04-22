const Sequelize = require('sequelize');
const { ulid } = require('ulid');

module.exports = {
  name: 'settings',
  options: {},
  associate() {},
  attributes: {
    id: {
      type: Sequelize.STRING(255),
      allowNull: false,
      primaryKey: true,
      defaultValue: ulid,
    },
    key: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    value: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
  },
};
