"use strict"

// Import
const server = require('./server');
const config = require('./config');
const packageJSONFile = require('../package.json');

// Microservice start
console.log('ʕ•́ᴥ•̀ʔっ');
console.log('Starting Posts Service');
console.log('Following config :', JSON.stringify(packageJSONFile, null, 2));

server.init(config)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.error(err)
  });
