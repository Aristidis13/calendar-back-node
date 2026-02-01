import { MySqlDialect } from '@sequelize/mysql';
import { Sequelize } from '@sequelize/core';

/**
 * Initialize Sequelize with MySQL dialect
 */
const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: 'mydb',
  user: 'root',
  password: 'mypass',
  host: 'localhost',
  port: 3306,
  showWarnings: true,
});

export default sequelize;
