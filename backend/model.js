const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// a blueprint that introduce a user and what are the properties of user
const userSchema = new Schema({
  id: Number,
  name: String,
});

//asign thet userSchema model to a User
const User = mongoose.model("User", userSchema);

module.exports = User;
