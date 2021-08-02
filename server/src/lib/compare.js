const bcrypt = require('bcrypt');

module.exports = (password, hashedPossword, cb) => {
  bcrypt.compare(password, hashedPossword, cb);
}