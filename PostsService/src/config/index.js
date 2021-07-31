const serverSettings = {
  HOST: process.env.HOST,
  PORT: process.env.PORT
};

const databaseSettings = {

};

const loggerSettings = {
  mode: 'dev',
  other: {}
};

module.exports = Object.assign({}, {
  serverSettings,
  databaseSettings,
  loggerSettings
});