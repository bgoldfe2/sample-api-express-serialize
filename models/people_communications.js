const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');
const Communications = require('./communications');
const People = require('./people');

module.exports = sequelize.define('people_communications', {
    //id: {
    //  type: Sequelize.INTEGER,
    //  primaryKey: true,
    //  allowNull: false,
    //  autoIncrement: true,
    //  unique: true,
    //},
    people_id: {
      type: Sequelize.INTEGER,
      references: {
        model: People,
        key: People.people_id,
      }
    },
    communications_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Communications,
        key: Communications.communication_id,
      }
    },
  });