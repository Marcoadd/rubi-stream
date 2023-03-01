const { DataTypes } = require("sequelize");

const db = require("../utils/database");
const Genres = require('../models/genres.models')
const Series = require('../models/series.models')

const SerieGenre = db.define("serieGenre", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  genreId: {
    type: DataTypes.UUID,
    allowNull: false,
      references: {
        model: Genres,
        key: 'id'
      }
  },
  serieId: {
    type: DataTypes.UUID,
    allowNull: false,
      references: {
        model: Series,
        key: 'id'
     }
  },
});

module.exports = SerieGenre