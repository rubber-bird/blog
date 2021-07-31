'use strict';

const express = require('express');
const Promise = require('bluebird');

const init = ( config ) => {
  return new Promise((resolve, reject) => {
    if (!config.serverSettings) {
      reject(new Error('The config should include server settings'));
    }

    if (!config.databaseSettings) {
      reject(new Error('The config should include database settings'));
    }

    const app = express();

    const server = app.listen(config.serverSettings.PORT, () => {
      console.log('config', config);
      resolve(server);
    })
  });
};

module.exports = Object.assign({}, { init });
