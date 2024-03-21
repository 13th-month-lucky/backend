const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nickname: { type: String },
  resultArray: [{ type: Number }],
  likedEtf: [],
  likedFund: [],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
