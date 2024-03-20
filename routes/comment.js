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

module.exports = router;
