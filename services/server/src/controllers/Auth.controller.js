const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Users = require('../models/Auth.model');

const login = (req, res, next) => {
  const { username, password } = req.body;
  passport.authenticate('login', {session: false},
  (err, user, info) => {
    // console.log(err, user, info)
    if (err) {
      res.status(500).send(err);
    } else if (!user && info) {
      res.status(322).send(info);
    } else if (user && info) {
      // console.log(user);
      jwt.sign({
        userId: user
      }, 'This is my key', (err, token) => {
        if (err) {
          res.sendStatus(500);
        }
        res.status(200).send({
          msg: 'Success',
          token: token
        });
      });
    }

    // res.send([err,user,info]);
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

    if (username && email && password) {
    Users.checkEmailOrUsername(username, email)
      .then((data) => {
        if (data.rows.length > 0) {
          return res.status(418).json({
            msg: 'Username or email exists',
          });
        } else {
          bcrypt.genSalt(10, (err, salt) => {
            if (err) {
              return res.sendStatus(500);
            }
            bcrypt.hash(password, salt, (error, hash) => {
              if (error) {
                console.log(error);
                return res.sendStatus(500);
              }

              Users.createUser(
                email,
                username,
                hash,
                salt,
                firstName,
                lastName,
              )
                .then((data) => {
                  return res.status(201).send(data);
                })
                .catch((err) => {
                  return res.status(322).send({
                    msg: "username or email has to be unique"
                  });
                });
            });
          });
        }
      })
      .catch((err) => {
        return res.status(322).send({
          msg: "username or email has to be unique"
        });
      });
  } else if (!username || !password) {
    return res.sendStatus(422);
  } else {
    return res.sendStatus(400);
  }
};

module.exports = Object.assign({}, {
  login,
  register
});
