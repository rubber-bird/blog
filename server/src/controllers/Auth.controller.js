

const login = (req, res) => {
  res.status(200).send({
    msg: "hello"
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
