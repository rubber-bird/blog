const express = require('express')
const logger = require('morgan')
const Promise = require('bluebird')
const api = require('../api/auth')

const startServer = (options) => {
  return new Promise((resolve, reject) => {
    if (!options.port) {
      let err = new Error('The server should be started on available port')
      reject(err)
    }

    const app = express()
    app.use(morgan('dev'))
    // app.use()

    api(app, options)

    const server = app.listen(options.port, () = resolve(server))
  })
}

module.exports = Object.assign(({}, {startServer}));
