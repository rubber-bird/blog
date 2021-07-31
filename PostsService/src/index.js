"use strict"

// Import
const server = require('./server');
const index = require('./config');
const packageJSONFile = require('../package.json');

// Microservice start
console.log('ʕ•́ᴥ•̀ʔっ');
console.log('Starting Posts Service');
console.log('Following config :', JSON.stringify(packageJSONFile));