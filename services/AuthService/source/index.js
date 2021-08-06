'use strict';

const server = require('./server/server');
const config = require('./config/index');

console.log('-----------------------');
console.log('Starting Auth Sevice...');

// console.log(server, config);
// server.startServer(config);

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = 'source/user.proto';
const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
};

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const user = protoDescriptor.user;

const client = new user.UserService('0.0.0.0:50051', grpc.credentials.createInsecure());

client.GetUserInformation({h1:'222'}, (err, res) => {
  console.log(err,res)
});
