import { DataTypes, Model } from '@sequelize/core';
import sequelize from '../db/sequelize.js';

class Business extends Model {}

Business.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(50), allowNull: false },
    added: { type: DataTypes.DATE, allowNull: true },
    logo: { type: DataTypes.BIGINT, allowNull: true },
  },
  { sequelize, modelName: 'business', tableName: 'business', timestamps: false },
);

export default Business;
