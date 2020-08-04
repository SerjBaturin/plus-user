const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  sirname: String,
  email: String,
});

module.exports = mongoose.model("User", schema);
