
const PROTO_PATH = 'user.proto';
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const getUserInformation = (call, callback) => {
  callback(null, { h2: 'sss' });
}

const verifyLogin = (call, callback) => {
  console.log(call.request);
  callback(null, {
    token: "ijdijiwedoj"
  })
}

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
const server = new grpc.Server();

server.addService(user.UserService.service, {
  GetUserInformation: getUserInformation,
  VerifyLogin: verifyLogin,
});

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
})
