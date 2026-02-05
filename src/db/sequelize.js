import { MySqlDialect } from '@sequelize/mysql';
import { Sequelize } from '@sequelize/core';

/**
 * Initialize Sequelize with MySQL dialect
 */
const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: 'reservation',
  user: 'root',
  password: 'root',
  host: 'host.docker.internal',
  port: 3306,
  showWarnings: true,
});

export default sequelize;
