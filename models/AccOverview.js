const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AccOverview extends Model {}

AccOverview.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        balance: {
            type: DataTypes.INTEGER,
        },
        transactions:{
            type: DataTypes.STRING,
        },
        checkings_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Checkings',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'AccOverview',
      }
);


module.exports = AccOverview;