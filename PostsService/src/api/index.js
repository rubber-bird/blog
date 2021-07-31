"use strict";

module.exports = (app, config) => {
  app.get('/', (req, res) => {
    res.send('Hello');
  });
};
