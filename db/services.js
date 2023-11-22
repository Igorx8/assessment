const { Pool } = require("pg");
const { connectionString } = require("../helper/enviroments");
const { addLog } = require("../helper/logger");

async function connect() {
  if (global.connection) return global.connection.connect();

  const pool = new Pool({
    connectionString,
  });

  global.connection = pool;

  return pool.connect();
}

const setup = async () => {
    try {
      const client = await connect();
      const query = `
        CREATE TABLE IF NOT EXISTS dev_status 
        (
          id VARCHAR(50) CONSTRAINT dev_status_id_pkey PRIMARY KEY NOT NULL,
          type INT NOT NULL,
          protocol INT NOT NULL, 
          status INT NOT NULL,
          utc timestamp NOT NULL
        )
      `;

      await client.query(query);

      console.info('Database setup completed')

    } catch (e) {
      console.error(`Error on create table: ${e}`);
    }
};

const saveMessage = async (message) => {
  const { id, type, protocol, utc, status } = message;

  try {
    const client = await connect();
    await client.query(
      `INSERT INTO dev_status 
        (id, type, protocol, utc, status) 
        VALUES 
        ('${id}', ${type}, ${protocol}, '${utc}', ${status})`
    );

    addLog(JSON.stringify(message), 'messages');

  } catch (e) {
    console.error(`Error on save message: ${e}`);
  }
};

module.exports = {
  setup,
  saveMessage,
};
