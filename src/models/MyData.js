const mongoose = require("mongoose");

const myDataSchema = new mongoose.Schema({}, { strict: false });

const MyData = mongoose.model("MyData", myDataSchema);
module.exports = MyData;
