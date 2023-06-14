const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('keyword_db', 'naioak', 'Oak@0814581368', {
    host: 'coscinas02.cosci.swu.ac.th',
    port: 3306,
    dialect: 'mysql'  /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  module.exports = sequelize;

  