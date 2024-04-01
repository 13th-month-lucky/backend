var express = require("express");
var router = express.Router();

const EtfNews = require("../src/models/EtfNews");

router.get("/", function (req, res, next) {
  EtfNews.find()
    .then((news) => {
      res.json(news);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/:stockCode/", function (req, res, next) {
  const stockCode = req.params.stockCode;

  EtfNews.find({ code: stockCode })
    .then((etf) => {
      res.json(etf);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
