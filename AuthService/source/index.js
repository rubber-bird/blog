'use strict'

const server = require('./server/server');
const config = require('./config/index');

console.log('-----------------------');
console.log('Starting Auth Sevice...');

console.log(server, config)
server.startServer(config)