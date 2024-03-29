const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nickname: { type: String },
  myData: { type: mongoose.Types.ObjectId, ref: "MyData" },
  resultArray: [{ type: Number }],
  likedEtf: [{ type: String }],
  likedFund: [{ type: String }],
  birthday: { type: String, default: null },
  age: { type: Number, default: null },
  home: {
    type: Object,
    default: { address: null, size: 4, monthlyRent: null },
  }, // 집 주소, 크기, 월세
  earnedIncome: { type: Number, default: null }, // 근로 소득 금랙
  email: { type: String, default: null },
  salary: { type: Number, default: null },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
