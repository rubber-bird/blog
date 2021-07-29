const { dbSettings, serverSettings } = require('./config')
const db = require('./postgres');

module.exports = Object.assign({}, { db, dbSettings, serverSettings });
