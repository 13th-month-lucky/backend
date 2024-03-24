var express = require("express");
var router = express.Router();

const fs = require("fs");
const MyDataJsonFile = require("../src/models/MyData.json");

const MyData = require("../src/models/MyData");
const User = require("../src/models/User");

const MIN_COST = 10000;
const MAX_COST = 10000000;

function assignRandomValues(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      assignRandomValues(obj[key]);
    } else if (typeof obj[key] === "boolean") {
      obj[key] = Math.random() < 0.5 ? true : false;
    } else if (typeof obj[key] === "number") {
      obj[key] =
        Math.floor(
          (Math.random() * (MAX_COST - MIN_COST + 1) + MIN_COST) / 100
        ) * 100;
    }
  }
}

router.post("/create", async function (req, res, next) {
  try {
    const { userId } = req.body;

    let obj = JSON.parse(JSON.stringify(MyDataJsonFile));

    assignRandomValues(obj);

    const user = await User.findById(userId);
    if (user.myData) {
      const myDataResp = await MyData.findByIdAndDelete(user.myData);
      console.log("resp: ", myDataResp);
    }

    const myDataResult = await MyData.create(obj);

    await User.findByIdAndUpdate(userId, {
      myData: myDataResult._id,
    });

    res.send({ myDataResult });
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    const { userId } = req.body;

    const userResult = await User.findOne({ _id: userId });
    const myDataResult = await MyData.findOne({ _id: userResult.myData });

    res.send({ myDataResult });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
