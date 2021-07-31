const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');

const app = express();
const LocalStrategy = require('passport-local').Strategy;

const AuthRouter = require('./routes/auth');

passport.use(
  'signup',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.create({ email, password });
        return done(null, user);
      } catch (e) {
        done(e);
      }
    }
  )
);

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

passport.use(new LocalStrategy(
  (username, passport, done) => {

  }
))

app.use('/auth', AuthRouter);

module.exports = app;
