'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      static associate(models) {
        Photo.hasMany(models.Caption, {
          foreignKey: 'photo_id',
          as: 'captions'
        });
    }
  }
  photo.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    citation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'photo',
  });
  return photo;
};