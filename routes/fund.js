var express = require("express");
const Fund = require("../src/models/Fund");
var router = express.Router();

// 모든 펀드 조회
router.get("/", function (req, res, next) {
  Fund.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      return next(err);
    });
});

module.exports = router;
