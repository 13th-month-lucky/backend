var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function (req, res, next) {
  // const kakaoUrl = 'https://kauth.kakao.com/oauth/authorize';
  // const resp = axios.get(kakaoUrl);
  res.send('complete');
});

module.exports = router;
