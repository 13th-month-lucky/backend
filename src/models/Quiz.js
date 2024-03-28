const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  problem: { type: String },
  answer: { type: String },
  description: { type: String },
});

const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;
