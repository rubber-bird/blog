const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');

const app = express();
const LocalStrategy = require('passport-local').Strategy;

const AuthRouter = require('./routes/auth');
const PostsRouter = require('./routes/posts');

passport.use('login', new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password"
    },
    async (username, password, callback) => {
      console.log('ddd', username, password)
      try {
        const user = 'ss';// Find user in db

        if ( !user ) {
          callback(null, false, { msg: 'User not found.' });
          return;
        }

        const validate = 'sss';// compare passwords

        if (!validate) {
          callback(null, false, { msg: 'Password is wrong' });
          return;
        }

        callback(null, user, { msg: 'Logged in successfully' });
      } catch (error) {
        callback (error);
        return;
      }
    }
  )
);



app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(passport.initialize());


// passport.use(new LocalStrategy(
//   (username, passport, done) => {

//   }
// ))

app.use('/auth', AuthRouter);
app.use('/posts', PostsRouter);

module.exports = app;
