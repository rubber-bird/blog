'use strict'

const repository = (db) => {
  // db right here
  const db;

  const auth = () => {
    return new Promise((resolve, reject) => {

    })
  }

  const register = () => {
    return new Promise((resolve, reject) => {

    })
  }

  return Object.create({
    auth,
    register
  })
}

const connect = (connection) => {
  return new Promise((resolve, reject) => {
    if (!connection) {
      reject(new Error('no connection'))
    }

    resolve(repository(connection))
  })
}

module.exports = Object.assign({}, { connect });
