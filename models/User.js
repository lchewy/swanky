const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
  facebookId: String,
  googleId: String
});

userSchema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("user", userSchema);
