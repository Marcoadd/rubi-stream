const { DataTypes } = require("sequelize");
const Seasons = require('./seasons.models')

const db = require("../utils/database");

const Episodes = db.define("episodes", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  seasonId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Seasons,
      key: 'id'
    }
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  synopsis: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  episodeNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 1
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  episodeUrl:{
    type: DataTypes.STRING,
    allowNull: false
  },
  coverUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Episodes