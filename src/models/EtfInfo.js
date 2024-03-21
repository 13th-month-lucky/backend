const mongoose = require("mongoose");

const etfInfoSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true },
  data: { type: Object, default: {} },
});

const EtfInfo = mongoose.model("EtfInfo", etfInfoSchema);
module.exports = EtfInfo;
