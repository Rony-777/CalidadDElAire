const { Client } = require('pg');
const { config } = require("../config/config");

const connectionData = {
  user: config.dbUser,
  host: config.dbHost,
  database: config.dbName,
  password: config.dbPassword,
  port: config.dbPort,
}

const cliente = new Client(connectionData);
cliente.connect();

module.exports = cliente;