import { DataTypes, Model } from '@sequelize/core';
import sequelize from '../db/sequelize.js';

class Shop extends Model {}

Shop.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    business_id: { type: DataTypes.BIGINT, allowNull: false },
    name: { type: DataTypes.STRING(50), allowNull: false },
    img: { type: DataTypes.BIGINT, allowNull: true },
    opening_time: { type: DataTypes.TIME, allowNull: false },
    closing_time: { type: DataTypes.TIME, allowNull: false },
    address_id: { type: DataTypes.BIGINT, allowNull: false },
  },
  { sequelize, modelName: 'shop', tableName: 'shop', timestamps: false },
);

export default Shop;
