const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const Users = require('../models/Auth.model');

passport.use('login', new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password"
  },
  async (username, password, callback) => {
    // console.log('ddd', username, password)
    try {
      const user = await Users.findUser(username);

      if ( !user ) {
        callback(null, false, { msg: 'User not found.' });
        return;
      }

      const validate = await bcrypt.compare(password, user.password);

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
