var express = require("express");
var router = express.Router();

const Quiz = require("../src/models/Quiz");

//json파일 넣기
router.post("/create", async function (req, res, next) {
  try {
    const result = await Quiz.insertMany(req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

//Quiz 전체 조회
router.get("/info", function (req, res, next) {
  Quiz.find()
    .then((quiz) => {
      res.json(quiz);
    })
    .catch((err) => {
      next(err);
    });
});
module.exports = router;
