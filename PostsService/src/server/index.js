'use strict';

const express = require('express');
const logger = require('morgan');
const Promise = require('bluebird');

const api = require('../api');
const model = require('../model');

const init = ( config ) => {
  return new Promise((resolve, reject) => {
    if (!config.serverSettings) {
      reject(new Error('The config should include server settings'));
    }

    if (!config.databaseSettings) {
      reject(new Error('The config should include database settings'));
    }

    if (!config.loggerSettings) {
      reject(new Error('The config should include logger settings'));
    }

    const app = express();

    app.use(logger(config.loggerSettings.mode, config.loggerSettings.other));

    api(app, config);

    const server = app.listen(config.serverSettings.PORT, config.serverSettings.HOST, () => {
      console.log('config', config);
      resolve(server);
    })
  });
};

module.exports = Object.assign({}, { init });
