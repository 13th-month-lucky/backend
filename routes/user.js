var express = require('express');
var router = express.Router();

const User = require('../src/models/User');

router.get('/', function (req, res, next) {
  const { nickname } = req.body;

  //찾기
});

router.post('/', async function (req, res, next) {
  const { nickname, profile_image_url } = req.body;

  const result = await User.create({
    nickname: nickname,
    profile_image_url: profile_image_url,
  });

  res.send(result);
});

module.exports = router;
