"use strict";

const model = (dbConnection) => {
  const getAllPosts = () => {
    return new Promise(( resolve, reject ) => {
      dbConnection.query('select * from posts_schema.posts;', (err, result) => {
        if (err) {
          reject(new Error(err.stack));
        }

        resolve(result.rows);
      })
    })
  }

  const createPost = (
    userId,
    title,
    postText
  ) => {
    return new Promise(( resolve, reject ) => {
      dbConnection.query('insert into posts_schema.posts (user_id, title, content) VALUES ($1, $2, $3) RETURNING post_id;',
      [userId, title, postText], (err, result) => {
        if (err) {
          reject(new Error(err.stack));
        }

        resolve(result.rows[0]["post_id"]);
      });
    });
  };

  return {
    getAllPosts,
    createPost
  }
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
