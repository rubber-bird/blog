const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const Promise = require('bluebird');

const PROTO_PATH = "./user.proto";

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const user = protoDescriptor.user;

const client = new user.UserService('0.0.0.0:50051', grpc.credentials.createInsecure());

const verifyLoginAsync = (reqObj) => {
  return new Promise((resolve, reject) => {
    client.VerifyLogin(reqObj, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  verifyLoginAsync,
};
