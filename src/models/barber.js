import { DataTypes, Model } from '@sequelize/core';
import sequelize from '../db/sequelize.js';

class Barber extends Model {}

Barber.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(50), allowNull: false },
    img: { type: DataTypes.BIGINT, allowNull: true },
    shop_id: { type: DataTypes.BIGINT, allowNull: false },
  },
  { sequelize, modelName: 'barber', tableName: 'barber', timestamps: false },
);

export default Barber;
