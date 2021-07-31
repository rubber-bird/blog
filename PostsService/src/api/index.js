"use strict";

module.exports = (app, model) => {
  console.log(model)
  app.get('/', (req, res) => {
    res.send('Hello');
  });
};
