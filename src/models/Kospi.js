const mongoose = require("mongoose");

const kospiSchema = new mongoose.Schema({}, { strict: false });

const Kospi = mongoose.model("Kospi", kospiSchema);
module.exports = Kospi;
