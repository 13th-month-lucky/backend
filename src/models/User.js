const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nickname: { type: String },
  resultArray: [{ type: Number }],
  likedEtf: [{ type: mongoose.Types.ObjectId, ref: "EtfInfo" }],
  likedFund: [{ type: mongoose.Types.ObjectId, ref: "Fund" }],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
