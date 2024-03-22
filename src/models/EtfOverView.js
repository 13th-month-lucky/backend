const mongoose = require("mongoose");

const etfOverViewSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true },
  data: { type: Object, default: {} },
  chart: { type: Object, default: {} },
});

const EtfOverView = mongoose.model("EtfOverView", etfOverViewSchema);
module.exports = EtfOverView;
