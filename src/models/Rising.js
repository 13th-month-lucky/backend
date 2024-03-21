const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  dd_cmpr_rank: { type: Number },
  now_rank: { type: Number },
  qry_numt: { type: Number },
  stbd_nm: { type: String },
  stk_indc_code: { type: String },
  stock_code: { type: String },
});

const Stock = mongoose.model("Rising", stockSchema);
module.exports = Stock;
