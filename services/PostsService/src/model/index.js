"use strict";

const model = (dbConnection) => {
  const getAllPosts = () => {
    return new Promise(( resolve, reject ) => {
      // if()
    })
  }

  return Object.create({
    getAllPosts
  })
}

const connect = (connection) => {
  return new Promise((resolve, reject) => {
    if (!connection) {
      reject(new Error('no db connection'));
    }
    resolve(model(connection));
  })
}

module.exports = Object.assign({}, { connect });
