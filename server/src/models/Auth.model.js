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

const findUser = (username) => {
  return new Promise((resolve, reject) => {
    db.query('select * from users where username=$1;', [username], (err, result) => {
      if (err) {
        reject(new Error(err.stack));
      }
      resolve(result.rows[0]);
    })
  })
};

const checkEmailOrUsername = (username, email) => {
  return new Promise((resolve, reject) => {
    db.query('select * from users where username=$1 or email=$2;', [username, email], (err, result) => {
      if(err) {
        // console.log(err);
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
