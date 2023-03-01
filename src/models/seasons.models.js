const { DataTypes } = require("sequelize");
const Series = require('../models/series.models')

const db = require("../utils/database");

const Season = db.define("seasons", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  serieId: {
    type: DataTypes.UUID,
    references: {
      model: Series,
      key: 'id'
    }
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  synopsis: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  seasonNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  releaseYear: {
    type: DataTypes.STRING,
    allowNull: false
  },
  coverUrl: {
    type: DataTypes.STRING,
    allowNull: false
},
trillerUrl: {
    type: DataTypes.STRING,
    allowNull: false
}
});

module.exports = Season