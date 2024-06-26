var express = require("express");
var router = express.Router();
var axios = require("axios");
const https = require("https");

const EtfChart = require("../src/models/EtfChart");
const EtfInfo = require("../src/models/EtfInfo");
const EtfOverView = require("../src/models/EtfOverView");

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
  EtfInfo.find()
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

//etf정보+차트 전체 조회 => 우성이
router.get("/overview", function (req, res, next) {
  EtfOverView.find()
    .then((etf) => {
      res.json(etf);
    })
    .catch((err) => {
      next(err);
    });
});

//etf정보 + 차트 하나만 조회 => 우성이
router.get("/:stockCode/overview", function (req, res, next) {
  const stockCode = req.params.stockCode;

  EtfOverView.find({ code: stockCode })
    .then((etf) => {
      res.json(etf);
    })
    .catch((err) => {
      next(err);
    });
});

//etf종목코드 + etf이름 조회 => 뉴스 기사
router.get("/news", function (req, res, next) {
  EtfChart.find()
    .then((etf) => {
      const result = etf.map((element, index) => {
        return {
          code: element.code,
          name: element.chart.output1.hts_kor_isnm,
        };
      });
      // console.log(result);
      res.json(result);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
