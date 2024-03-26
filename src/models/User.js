const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nickname: { type: String },
  myData: { type: mongoose.Types.ObjectId, ref: "MyData" },
  resultArray: [{ type: Number }],
  likedEtf: [{ type: String }],
  likedFund: [{ type: String }],
  birthday: { type: String },
  email: { type: String },
  salary: { type: Number },
  address: { type: Number },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
