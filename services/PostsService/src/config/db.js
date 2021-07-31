const { Client } = require('pg');

module.exports = () => {
  return new Promise((resolve, reject) => {
    const client = new Client()
    client.connect()
      .then(() => {
        resolve(client);
      })
      .catch((err) => {
        reject(new Error(err.stack));
      });
  });
};
