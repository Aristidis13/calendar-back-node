import { DataTypes, Model } from '@sequelize/core';
import sequelize from '../db/sequelize.js';

class Service extends Model {}

Service.init(
  {
    id: { type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true },
    label: { type: DataTypes.STRING(100), allowNull: false },
    price: { type: DataTypes.DECIMAL(4, 2), allowNull: false },
    lasts: { type: DataTypes.TIME, allowNull: true },
  },
  { sequelize, modelName: 'service', tableName: 'service', timestamps: false },
);

export default Service;
