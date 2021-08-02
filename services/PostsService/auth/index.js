const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'This is my key';

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
  const user = jwt_payload;
  done(null, user);
}));