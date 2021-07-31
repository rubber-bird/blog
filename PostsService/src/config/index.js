const serverSettings = {
  HOST: process.env.HOST,
  PORT: process.env.PORT
};

const databaseSettings = {

};

module.exports = Object.assign({}, {
  serverSettings,
  databaseSettings
});