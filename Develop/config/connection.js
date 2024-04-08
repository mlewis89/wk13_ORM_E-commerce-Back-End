//include process variables
require('dotenv').config();
//include sequilise
const Sequelize = require('sequelize');

//initalise sequelise settings
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PW, 
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// sequwlise settings
module.exports = sequelize;
