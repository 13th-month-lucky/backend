var express = require("express");
var router = express.Router();

const User = require("../src/models/User");

router.post("/find", async function (req, res, next) {
  try {
    const { nickname } = req.body;
    const result = await User.findOne({ nickname: nickname });

    if (!result) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(result);
  } catch (err) {
    console.error("Error finding user:", err);
    return res.status(500).json({ error: "Internal server error" });
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

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.put("/info", async function (req, res, next) {
  try {
    const { userId, birthday, email, salary, address } = req.body;

    const result = await User.findByIdAndUpdate(userId, {
      email: email,
      birthday: birthday,
      salary: salary,
      address: address,
    });
    console.log(result);

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
