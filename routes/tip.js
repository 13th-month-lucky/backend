var express = require("express");
var router = express.Router();
var axios = require("axios");

const Tip = require("../src/models/Rising");

router.post("/", async function (req, res, next) {
  try {
    const { title, subTitle } = req.body;
    const result = await Tip.create({ title: title, subTitle: subTitle });

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

module.exports = router;
