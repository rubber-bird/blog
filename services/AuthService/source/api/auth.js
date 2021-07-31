'use strict'

module.exports = (app, options) => {
  const { repo } = options
  app.get('/', (req, res) => {
    res.send('www')
  })
}
