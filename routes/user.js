var express = require("express");
var router = express.Router();

const User = require("../src/models/User");

router.post("/find", async function (req, res, next) {
  try {
    const { nickname } = req.body;
    const result = await User.findOne({ nickname: nickname });

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.post("/create", async function (req, res, next) {
  try {
    const { nickname } = req.body;

    const result = await User.create({
      nickname: nickname,
    });

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/", async function (req, res, next) {
  try {
    const { nickname } = req.body;
    const result = await User.findOneAndDelete({ nickname: nickname });

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.put("/like/etf", async function (req, res, next) {
  try {
    const { userId, code } = req.body;
    const result = await User.findByIdAndUpdate(
      userId,
      { $push: { likedEtf: code } },
      { new: true }
    );
    console.log(userId);
    console.log(result);

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.put("/dislike/etf", async function (req, res, next) {
  try {
    const { userId, code } = req.body;
    const result = await User.findByIdAndUpdate(
      userId,
      { $pull: { likedEtf: code } },
      { new: true }
    );

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.put("/like/fund", async function (req, res, next) {
  try {
    const { userId, code } = req.body;
    const result = await User.findByIdAndUpdate(
      userId,
      { $push: { likedFund: code } },
      { new: true }
    );

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.put("/dislike/fund", async function (req, res, next) {
  try {
    const { userId, code } = req.body;
    const result = await User.findByIdAndUpdate(
      userId,
      { $pull: { likedFund: code } },
      { new: true }
    );

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
