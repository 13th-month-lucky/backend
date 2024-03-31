var express = require("express");
var router = express.Router();

const fs = require("fs");
const MyDataJsonFile = require("../src/models/MyData.json");

const MyData = require("../src/models/MyData");
const User = require("../src/models/User");

const MAX_DIFF = 200000;
const UNIT = 1000;

function assignRandomValues(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      assignRandomValues(obj[key]);
    } else if (typeof obj[key] === "boolean") {
      obj[key] = Math.random() < 0.5 ? true : false;
    } else if (typeof obj[key] === "number") {
      const randomIncrement =
        Math.floor((Math.random() * (MAX_DIFF * 2 + 1) - MAX_DIFF) / UNIT) *
        UNIT;
      obj[key] += randomIncrement;
    }
  }
}

router.post("/create", async function (req, res, next) {
  try {
    console.log("create");
    const { userId } = req.body;

    let obj = JSON.parse(JSON.stringify(MyDataJsonFile));
    assignRandomValues(obj);

    const user = await User.findById(userId);
    if (user.myData) {
      await MyData.findByIdAndDelete(user.myData);
    }

    const createdMyData = await MyData.create(obj);

    const updatedUser = await User.findByIdAndUpdate(userId, {
      myData: createdMyData._id,
    });

    res.send({ updatedUser, createdMyData });
  } catch (err) {
    res.send("err: " + err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    const { userId } = req.body;

    const userResult = await User.findOne({ _id: userId });
    const myDataResult = await MyData.findOne({ _id: userResult.myData });

    res.send(myDataResult);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
