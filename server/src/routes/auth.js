const express = require('express');
const authRouter = express.Router();

// const Auth

authRouter.get('/login', (req, res) => {
  res.send('login')
})

module.exports = authRouter;
