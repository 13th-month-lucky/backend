var express = require('express');
var router = express.Router();

const User = require('../src/models/User');

router.post('/find', async function (req, res, next) {
  try {
    const { nickname } = req.body;
    const result = await User.findOne({ nickname: nickname });

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.post('/create', async function (req, res, next) {
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

router.delete('/', async function (req, res, next) {
  try {
    const { nickname } = req.body;
    const result = await User.findOneAndDelete({ nickname: nickname });

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
