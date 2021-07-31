const passport = require('passport');
const bcrypt = require('bcrypt');

const Users = require('../models/Auth.model');

const login = (req, res, next) => {
  const { username, password } = req.body;
  passport.authenticate('login', {session: false},
  (err, user, info) => {
    console.log(err, user, info)
    res.send([err,user,info]);
  })(req,res, next);
};

const register = (req, res) => {
  const {
    username,
    email,
    password,
    firstName,
    lastName
  } = req.body;

    if (username && password) {
    Users.checkEmailOrUsername(username, email)
      .then((data) => {
        if (data.rows.length > 0) {
          res.status(418).json({
            msg: 'Username or email exists',
          });
          return;
        } else {
          bcrypt.genSalt(10, (err, salt) => {
            if (err) {
              console.log(err);
              res.sendStatus(500);
            }
            bcrypt.hash(password, salt, (error, hash) => {
              if (error) {
                console.log(err)
                res.sendStatus(500);
              }

              Users.createUser(
                email,
                username,
                password,
                salt,
                firstName,
                lastName,
              )
                .then((data) => {
                  res.status(201).send(data);
                })
                .catch((err) => {
                  console.log(err);
                  res.status(500).send(err);
                });
            });
          });
        }
      })
      .catch((err) => res.status(500).json({
        msg: err,
      }));
  } else if (!username || !password) {
    res.sendStatus(422);
  } else {
    res.sendStatus(400);
  }
};

module.exports = Object.assign({}, {
  login,
  register
});
