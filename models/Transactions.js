const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Transactions extends Model{}

Transactions.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    date_purchased:{
      type: DataTypes.DATE,
      allowNull:false,
      defaultValue: DataTypes.NOW,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Transactions',
  }
);

module.exports = Transactions