var express = require("express");
var router = express.Router();

const Comment = require("../src/models/Comment");

router.get("/:code", async function (req, res, next) {
  try {
    const code = req.params.code;

    const result = await Comment.find({ code: code });

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    const { nickname, profileImageUrl, code, depth, content } = req.body;

    const result = await Comment.create({
      nickname: nickname,
      profileImageUrl: profileImageUrl,
      code: code,
      depth: depth,
      content: content,
    });

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.put("/reply", async function (req, res, next) {
  try {
    const { commentId, replyId } = req.body;

    const result = await Comment.findByIdAndUpdate(
      commentId,
      { $push: { replyIds: replyId } },
      { new: true }
    );

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
