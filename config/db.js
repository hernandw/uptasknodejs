const { Sequelize } = require('sequelize');
require('dotenv').config({path: '.env'});

const sequelize = new Sequelize(process.env.DB_DATABASES, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
        define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  });

  module.exports = sequelize;