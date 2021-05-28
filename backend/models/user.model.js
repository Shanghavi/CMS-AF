const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email:String,
  name: String,
  age: String,
  
});

const user = mongoose.model("User", UserSchema);
module.exports = user;
