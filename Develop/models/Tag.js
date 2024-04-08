//include libraries
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

//create Tag Model
Tag.init(
  {
    //Tag id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //Tag Name
    tag_name: {
      type: DataTypes.STRING
    }

  },
  {
    //setiings
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);
//export Tag Model
module.exports = Tag;
