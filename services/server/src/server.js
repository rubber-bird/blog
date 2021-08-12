const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');

require('./auth/passport');

const app = express();
const LocalStrategy = require('passport-local').Strategy;

const AuthRouter = require('./routes/auth');
const PostsRouter = require('./routes/posts');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use('/auth', AuthRouter);
app.use('/posts', PostsRouter);

module.exports = app;
