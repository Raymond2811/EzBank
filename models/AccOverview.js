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
            defaultValue: 'EzBank Checking Account',
        },
        balance: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        transactions:{
            type: DataTypes.STRING,
            defaultValue: '',
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