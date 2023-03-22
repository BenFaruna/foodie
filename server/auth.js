const passport = require('passport');
const LocalStrategy = require('passport-local');

const Customer = require('./models/customers.model');

const { validatePassword, } = require('./utils');

const strategy = new LocalStrategy(async function verify(email, password, cb) {
  const customer = await Customer.findOne({ email: email }).select('username email password');

  if (customer) {
    if (validatePassword(password, customer.password)){
      return cb(null, customer);
    }
}
  return  cb(null, false, { message: 'Incorrect email or password' });
});

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, {
      id: user.id,
      username: user.username,
    });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

passport.use(strategy);

module.exports = passport;
