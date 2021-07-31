"use strict"

// Import
const server = require('./server');
const config = require('./config');
const packageJSONFile = require('../package.json');

// Microservice start
console.log('ʕ•́ᴥ•̀ʔっ');
console.log('Starting Posts Service');
console.log('with a following config :', JSON.stringify(packageJSONFile, null, 2));

console.log(config, 'ss')
server.init(config)
  .then((res) => {
    console.log(`Service succesfully started at ${config.serverSettings.HOST}:${config.serverSettings.PORT}`)
    console.log(res)
  })
  .catch((err) => {
    console.error(err)
  });
