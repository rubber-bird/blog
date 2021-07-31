const Promise = require('bluebird');

const db = require('../db');

const createUser = (
  username,
  email,
  password,
  salt,
  firstName,
  lastName
) => {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO users (
      username,
      password,
      salt,
      email,
      firstName,
      lastName
    ) VALUES (
      $1,
      $2,
      $3,
      $4,
      $5,
      $6
    );`, [username, password, salt, email, firstName, lastName], (err, result) => {
      if (err) {
        reject(new Error(err.stack));
      }

      resolve(result);
    })
  })
};

const findUser = (id) => {
  return new Promise((resolve, reject) => {

  })
};

const checkEmailOrUsername = (username, email) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users WHERE username=$1 OR email=$2;", [username, email], (err, result) => {
      if(err) {
        reject(new Error(err.stack));
      }

      resolve(result);
    })
  })
};

module.exports = Object.assign({}, {
  createUser,
  checkEmailOrUsername,
  findUser
});
