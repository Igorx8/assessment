require("dotenv/config");

const host = process.env.POSTGRES_HOST;
const port = process.env.POSTGRES_PORT;
const pwd = process.env.POSTGRES_PASSWORD;
const db = process.env.POSTGRES_DB;
const user = process.env.POSTGRES_USER;

const apiHost = process.env.API_HOST;
const listennerPort = process.env.API_LISTENER_PORT;
const emmiterPort = process.env.API_EMMITER_PORT;

const connectionString = `postgresql://${user}:${pwd}@${host}:${port}/${db}`;

module.exports = {
  connectionString,
    apiHost,
    listennerPort,
    emmiterPort
};
