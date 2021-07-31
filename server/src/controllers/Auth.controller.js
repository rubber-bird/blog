

const login = (req, res) => {
  const { username, password } = req.body;
  res.status(200).send({
    msg: username
  })
};

const register = (req, res) => {
  res.status(201).send({
    msg: "register"
  })
}

module.exports = Object.assign({}, {
  login,
  register
});
