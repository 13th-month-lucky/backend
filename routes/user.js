var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/find', function (req, res, next) {
  res.send('complete');
});

module.exports = router;
