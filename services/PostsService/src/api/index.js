"use strict";

const passport = require('passport');

module.exports = (app, model) => {
  app.get('/', (req, res) => {
    res.send('Hello');
  });

  app.post('/posts/addpost', passport.authenticate('jwt', { session: false }), (req, res) => {
    const {
      title,
      postText
    } = req.body;

    const {
      userId
    } = req.user;

    model.createPost(
      userId.user_id,
      title,
      postText
    )
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      })

  })
};
