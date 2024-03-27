var express = require("express");
var router = express.Router();
var axios = require("axios");

const Tip = require("../src/models/Tip");

router.post("/", async function (req, res, next) {
  try {
    const { content, sub } = req.body;
    const result = await Tip.create({ content: content, sub: sub });

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.get("/", async function (req, res, next) {
  try {
    const result = await Tip.find({});

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    const tipId = req.params.id;
    const result = await Tip.findByIdAndDelete(tipId);

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
