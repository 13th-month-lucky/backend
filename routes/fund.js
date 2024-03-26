var express = require("express");
const Fund = require("../src/models/Fund");
var router = express.Router();

// 모든 펀드 조회
router.get("/", function (req, res, next) {
  Fund.find()
    .then((fund) => {
      res.json(fund);
    })
    .catch((err) => {
      return next(err);
    });
});

// 펀드 코드로 조회
router.get("/:fundCode", function (req, res, next) {
  Fund.findOne({ code: req.params.fundCode })
    .then((fund) => {
      if (!fund)
        return res.status(404).json({ message: "펀드를 찾을 수 없습니다." });
      res.json(fund);
    })
    .catch((err) => {
      return next(err);
    });
});

// 펀드 코드로 기본 정보 조회
router.get("/:fundCode/info", function (req, res, next) {
  Fund.findOne({ code: req.params.fundCode })
    .then((fund) => {
      if (!fund)
        return res.status(404).json({ message: "펀드를 찾을 수 없습니다." });
      res.json(fund.data);
    })
    .catch((err) => {
      return next(err);
    });
});

// 펀드 코드 리스트로 기본 정보 조회
router.post("/info", function (req, res, next) {
  Fund.find({ code: { $in: req.body.fundCodeList } })
    .then((fund) => {
      if (!fund)
        return res.status(404).json({ message: "펀드를 찾을 수 없습니다." });
      res.json(fund);
    })
    .catch((err) => {
      return next(err);
    });
});

// 펀드 코드로 포트폴리오 조회
router.get("/:fundCode/portfolio", function (req, res, next) {
  Fund.findOne({ code: req.params.fundCode })
    .then((fund) => {
      if (!fund)
        return res.status(404).json({ message: "펀드를 찾을 수 없습니다." });
      res.json(fund.portfolio);
    })
    .catch((err) => {
      return next(err);
    });
});

// 펀드 코드로 수익률 조회
router.get("/:fundCode/profit", function (req, res, next) {
  Fund.findOne({ code: req.params.fundCode })
    .then((fund) => {
      if (!fund)
        return res.status(404).json({ message: "펀드를 찾을 수 없습니다." });
      res.json(fund.profit);
    })
    .catch((err) => {
      return next(err);
    });
});

// 펀드 코드로 기준 가격 조회
router.get("/:fundCode/base-price", function (req, res, next) {
  Fund.findOne({ code: req.params.fundCode })
    .then((fund) => {
      if (!fund)
        return res.status(404).json({ message: "펀드를 찾을 수 없습니다." });
      res.json(fund.basePrice);
    })
    .catch((err) => {
      return next(err);
    });
});
module.exports = router;
