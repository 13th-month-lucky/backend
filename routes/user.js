var express = require('express');
var router = express.Router();

const User = require('../src/models/User');

router.post('/find', function (req, res, next) {
  const nickname = req.body.nickname;
  const email = req.body.email;

  res.send('nick: ' + nickname + ', email: ', email);
});

module.exports = router;
