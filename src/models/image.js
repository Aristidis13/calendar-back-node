import { DataTypes, Model } from '@sequelize/core';
import sequelize from '../db/sequelize.js';

class Image extends Model {}

Image.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    path: { type: DataTypes.STRING(255), allowNull: false },
    name: { type: DataTypes.STRING(150), allowNull: false },
  },
  { sequelize, modelName: 'image', tableName: 'image', timestamps: false },
);

export default Image;
