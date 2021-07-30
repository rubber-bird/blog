// Simple configuration file

// Database Settings
const dbSettings = {

};

// Server Settings
const serverSettings = {
  port: process.env.PORT || 3000
};

module.exports = Object.assign({}, { dbSettings, serverSettings });
