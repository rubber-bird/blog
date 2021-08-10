const userservice = require('../grpc');

module.exports = {
  login: async (parents, args, context) => {
    console.log(context)
    let reqObj = {
      login: args.username,
      password: args.password
    };

    let resObj = {
      token: "ss"
    }

    let result;

    try {
      result = userservice.verifyLoginAsync(reqObj)
    } catch (error) {
      return new Error('wrong password')
    }

    return result;
  }
}
