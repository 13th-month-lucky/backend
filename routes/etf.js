var express = require("express");
var router = express.Router();
var axios = require("axios");
const https = require("https");

const EtfChart = require("../src/models/EtfChart");
const EtfInfo = require("../src/models/EtfInfo");

//etf 종목의 정보 하나만 조회 - public
router.get("/:stockCode/info", function (req, res, next) {
  const stockCode = req.params.stockCode;

  EtfInfo.find({ code: stockCode })
    .then((etf) => {
      res.json(etf);
    })
    .catch((err) => {
      next(err);
    });
});

//Etf정보 전체 조회
router.get("/info", function (req, res, next) {
  const stockCode = req.params.stockCode;

  EtfInfo.find()
    .then((etf) => {
      res.json(etf);
    })
    .catch((err) => {
      next(err);
    });
});

//etfChart 하나만 조회
router.get("/:stockCode/chart", function (req, res, next) {
  const stockCode = req.params.stockCode;

  EtfChart.find({ code: stockCode })
    .then((etf) => {
      res.json(etf);
    })
    .catch((err) => {
      next(err);
    });
});

//etf 차트 전체 조회
router.get("/chart", function (req, res, next) {
  const stockCode = req.params.stockCode;

  EtfChart.find()
    .then((etf) => {
      res.json(etf);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
