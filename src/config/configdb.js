const dotenv = require('dotenv').config();

const env = process.env;

const configdb = {
  db: {
    host: env.DB_HOST || 'localhost',
    port: env.DB_PORT || '5032',
    user: env.DB_USER || 'postgres',
    password: env.DB_PASSWORD || '123456',
    database: env.DB_NAME || 'juegopreguntas',
  }
};

module.exports = configdb;