const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  nickname: { type: String },
  profileImageUrl: { type: String },
  code: { type: String },
  depth: { type: Number },
  content: { type: String },
  likeIds: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  replyIds: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
  createdDate: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
