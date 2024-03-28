const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  data: { type: Object, required: true },
  createdDate: { type: Date, default: Date.now },
});

const Result = mongoose.model("Result", resultSchema);
module.exports = Result;
