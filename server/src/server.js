const express = require('express');
const logger = require('morgan');

const app = express();

const AuthRouter = require('./routes/auth')

app.use(logger('dev'));

app.use('/auth', AuthRouter);

module.exports = app;
