const userservice = require('../grpc');

module.exports = {
  login: async (parents, args, context) => {
    // console.log('u', userservice)
    // console.log('ss', parents, args, context)

    let reqObj = {
      login: args.username,
      password: args.password
    };

    let resObj = {
      token: "ss"
    }

    let a;

    a = userservice.verifyLoginAsync(reqObj)
    return a;
  }
}
