require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER || 'root',
  port: process.env.MYSQL_PORT || '3306',
  password: process.env.MYSQL_PASSWORD || '89@junior',
  database: process.env.MYSQL_DATABASE || 'login',
  host: process.env.MYSQL_HOST || 'localhost',
  dialect: 'mysql',
  dialectOPtions: {
    timezone: 'Z',
  }, 
};

module.exports = {
  development: config,
  test: config,
  production: config,
}
