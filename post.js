const { Client } = require("pg");

const connectionData = {
  host: "localhost",
  user: "postgres",
  database: "likeme",
  password: "44182",
  port: 5433,
};

const clientDB = new Client(connectionData);

module.exports = clientDB;