const mongoose = require("mongoose");

const tipSchema = new mongoose.Schema({
  content: { type: String },
  sub: { type: String },
});

const Tip = mongoose.model("tip", tipSchema);
module.exports = Tip;
