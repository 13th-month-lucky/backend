var express = require('express');
var router = express.Router();
var axios = require('axios');
const https = require('https');

const Issue = require('../src/models/Issue');

// get hot issue stocks with shinhan API, and update in MongoDB
router.post('/', async function (req, res, next) {
  try {
    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://gapi.shinhansec.com:8443/openapi/v1.0/ranking/issue?query_type=3',
      headers: {
        apiKey: process.env.SHINHAN_API_KEY,
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    };

    const resp = await axios(config);
    const stocks = resp.data.dataBody;

    console.log('stocks: ', stocks);

    await Issue.deleteMany({});

    stocks.map((ele, idx) => {
      Issue.create(ele);
    });

    res.send(stocks);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
