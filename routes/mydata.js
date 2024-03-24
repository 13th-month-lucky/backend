var express = require("express");
var router = express.Router();

const fs = require("fs");
const MyData = require("../src/models/MyData.json");

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

router.get("/", function (req, res, next) {
  try {
    let obj = JSON.parse(JSON.stringify(MyData));

    assignRandomValues(obj);
    res.send(obj);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
