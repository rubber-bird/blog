const { Pool } = require('pg');

const client = new Pool();

client.connect();

client.on('error', (err) => {
  console.log(err);
});

module.exports = client;