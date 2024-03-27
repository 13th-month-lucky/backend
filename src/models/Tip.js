const mongoose = require("mongoose");

const tipSchema = new mongoose.Schema({
  title: { type: String },
  subTitle: { type: Object },
});

const Tip = mongoose.model("tip", stockStipSchemachema);
module.exports = Tip;
