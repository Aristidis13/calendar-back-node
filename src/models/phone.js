import { DataTypes, Model } from '@sequelize/core';
import sequelize from '../db/sequelize.js';

class Phone extends Model {}

Phone.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    shop_id: { type: DataTypes.BIGINT, allowNull: false },
    value: { type: DataTypes.STRING(15), allowNull: false },
  },
  { sequelize, modelName: 'phone', tableName: 'phone', timestamps: false },
);

export default Phone;
