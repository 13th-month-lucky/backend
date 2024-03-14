var express = require('express');
var router = express.Router();

const User = require('../src/models/User');

router.get('/', async function (req, res, next) {
  const { nickname } = req.body;
  const result = await User.findOne({ nickname: nickname });

  res.send(result);
});

router.post('/', async function (req, res, next) {
  const { nickname, profile_image_url } = req.body;

  const result = await User.create({
    nickname: nickname,
    profile_image_url: profile_image_url,
  });

  res.send(result);
});

router.delete('/', async function (req, res, next) {
  const { nickname } = req.body;
  const result = await User.findOneAndDelete({ nickname: nickname });

  res.send(result);
});

module.exports = router;
