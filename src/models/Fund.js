const mongoose = require("mongoose");

const fundSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true },
  data: {
    type: Object,
    default: {},
  },
  portfolio: {
    type: Object,
    default: {},
  },
  profit: {
    type: Object,
    default: {},
  },
  basePrice: {
    type: Object,
    default: {},
  },
  // updated: { type: Date, required: true },
});

const Fund = mongoose.model("Fund", fundSchema);

module.exports = Fund;
