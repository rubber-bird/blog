'use strict';

const express = require('express');
const Promise = require('bluebird');

const init = ( config ) => {
  console.log(config, 'at')
  return new Promise((resolve, reject) => {
    if (!config.serverSettings) {
      reject(new Error('The config should include server settings'));
    }

    if (!config.databaseSettings) {
      reject(new Error('The config should include server settings'));
    }

    const app = express();

    const server = app.listen(config.serverSettings.PORT, () => {
      resolve(server);
    })
    resolve(config);
  });
};

module.exports = Object.assign({}, { init });
