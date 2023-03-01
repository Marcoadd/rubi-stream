const { DataTypes } = require("sequelize");

const db = require("../utils/database");
const Genres = require('../models/genres.models')
const Movies = require('../models/movies.models')

const MovieGenre = db.define("movieGenre", {
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
  movieId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Movies,
      key: 'id'
    }
  }
});

module.exports = MovieGenre