var express = require("express");
var router = express.Router();

const Result = require("../src/models/Result");

// user의 연말정산결과 모두 조회
router.get("/:userId", async function (req, res, next) {
  try {
    const { userId } = req.params;
    const result = await Result.find({ userId: userId });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

// user의 연말정산 결과 추가
router.post("/:userId", async function (req, res, next) {
  try {
    const { userId } = req.params;
    const { data } = req.body;

    const result = await Result.create({
      userId: userId,
      data: data,
    });

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

// 연말정산 결과 수정
router.put("/:resultId", async function (req, res, next) {
  try {
    const { resultId } = req.params;
    const { data } = req.body;
    const result = await Result.findByIdAndUpdate(
      resultId,
      { data },
      { new: true }
    );

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
