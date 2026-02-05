import { DataTypes, Model } from '@sequelize/core';
import sequelize from '../db/sequelize.js';

class Address extends Model {}

Address.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    street: { type: DataTypes.STRING(50), allowNull: false },
    street_number: { type: DataTypes.SMALLINT, allowNull: false },
    city: { type: DataTypes.STRING(30), allowNull: false },
    suburb: { type: DataTypes.STRING(30), allowNull: false },
    postal_code: { type: DataTypes.SMALLINT, allowNull: false },
  },
  { sequelize, modelName: 'address', tableName: 'address', timestamps: false },
);

export default Address;
