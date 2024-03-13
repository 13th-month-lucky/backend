var express = require('express');
var router = express.Router();
var axios = require('axios');
const https = require('https');

const HotIssue = require('../src/models/HotIssue');

// get hot issue stocks with shinhan API, and update in MongoDB
router.get('/update', async function (req, res, next) {
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

    await HotIssue.deleteMany({});
    const result = await stocks.map((ele, idx) => {
      HotIssue.create(ele);
      return ele;
    });

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
