const mongoose = require("mongoose");

const etfChartSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true },
  chart: { type: Object, default: {} },
});

const EtfChart = mongoose.model("EtfChart", etfChartSchema);
module.exports = EtfChart;
