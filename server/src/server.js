const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

const AuthRouter = require('./routes/auth')

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.use('/auth', AuthRouter);

module.exports = app;
