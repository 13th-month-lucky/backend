var express = require("express");
var router = express.Router();

const Result = require("../src/models/Result");

// user의 연말정산결과 모두 조회
router.get("/user/:userId", async function (req, res, next) {
  try {
    const { userId } = req.params;
    const result = await Result.find({ userId: userId }).sort({
      createdDate: -1,
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

// user의 연말정산 결과 생성
router.post("/user/:userId", async function (req, res, next) {
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

// 특정 연말정산 결과 조회
router.get("/:resultId", async function (req, res, next) {
  try {
    const { resultId } = req.params;

    const result = await Result.findById(resultId);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

// 연말정산 결과 업데이트
router.put("/:resultId", async function (req, res, next) {
  try {
    const { resultId } = req.params;
    const { data } = req.body;

    let result;
    await Result.findById(resultId).then(async (r) => {
      const newData = {
        ...r.data,
        ...data,
      };

      result = await Result.updateOne(
        { _id: resultId },
        { data: newData },
        { new: true }
      );
    });

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
