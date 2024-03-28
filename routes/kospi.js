var express = require("express");
var router = express.Router();
var axios = require("axios");

const Kospi = require("../src/models/Kospi");

router.get("/", async function (req, res, next) {
  try {
    const result = await Kospi.find({});

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
