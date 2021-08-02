"use strict"

// Import
const server = require('./server');
const config = require('./config');
const db = require('./config/db');
const model = require('./model');
const packageJSONFile = require('../package.json');

// Microservice start
console.log('ʕ•́ᴥ•̀ʔっ');
console.log('Starting Posts Service');
// console.log('with a following config :', JSON.stringify(packageJSONFile, null, 2));

process.on('Error: no db connection', () => {
  console.log('shit')
})

const { Client } = require('pg');
const connection = new Client({
  host: 'localhost',
  database: 'users',
  user: 'markoturchyn'
});
connection.connect();

// Starting everything here :)
console.log()
model.connect(connection)
  .then((model) => {
    config.model = model
    server.init(config)
    .then((res) => {
      console.log(`Service succesfully started at ${config.serverSettings.HOST}:${config.serverSettings.PORT}`);
    })
    .catch((err) => {
      console.error(err);
    });
  })
  .catch((err) => {
    console.error(err);
  });
