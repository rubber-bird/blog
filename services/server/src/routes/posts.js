const express = require('express');
const postsRouter = express.Router();

// const { login, register } = require('../controllers/Auth.controller');

postsRouter.get('/', (req, res) => {
  res.status(200).send('sss');
});

postsRouter.post('/addPost', (req, res) => {
  res.status(201).send('added')
})

module.exports = postsRouter;
