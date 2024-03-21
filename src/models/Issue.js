const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  rank: { type: Number },
  stbd_nm: { type: String },
  stock_code: { type: String },
});

const Stock = mongoose.model("Issue", stockSchema);
module.exports = Stock;
