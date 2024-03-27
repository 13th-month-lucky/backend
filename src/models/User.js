const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nickname: { type: String },
  myData: { type: mongoose.Types.ObjectId, ref: "MyData" },
  resultArray: [{ type: Number }],
  likedEtf: [{ type: String }],
  likedFund: [{ type: String }],
  birthday: { type: String, default: null },
  email: { type: String, default: null },
  salary: { type: Number, default: null },
  address: { type: String, default: null },
  addressDetail: { type: String, default: null },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
