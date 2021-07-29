'use strict'

const routes = (app, options) => {
  const { repo } = options
  app.get('/', (req, res) => {
    res.send('www')
  })
}

module.exports = Object({}, {routes});
