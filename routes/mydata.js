var express = require("express");
var router = express.Router();

const fs = require("fs");
const MyDataJsonFile = require("../src/models/MyData.json");

const MyData = require("../src/models/MyData");
const User = require("../src/models/User");

const MIN_COST = 10000;
const MAX_COST = 9000000;

const MIN_RATE = 0.1;
const MAX_RATE = 0.3;

function assignRandomValues(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      assignRandomValues(obj[key]);
    } else if (typeof obj[key] === "boolean") {
      obj[key] = Math.random() < 0.5 ? true : false;
    } else if (typeof obj[key] === "number") {
      if (key === "taxPaidRate") {
        const taxPaidRate = Math.random() * (MAX_RATE - MIN_RATE) + MIN_RATE;
        obj[key] = taxPaidRate;
        console.log("rate: ", taxPaidRate);
      } else {
        obj[key] =
          Math.floor(
            (Math.random() * (MAX_COST - MIN_COST + 1) + MIN_COST) / 100
          ) * 100;
      }
    }
  }
}

router.post("/create", async function (req, res, next) {
  try {
    console.log("create");
    const { userId } = req.body;

    let obj = JSON.parse(JSON.stringify(MyDataJsonFile));
    assignRandomValues(obj);

    console.log("obj: ");

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
