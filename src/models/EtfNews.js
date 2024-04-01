const mongoose = require("mongoose");

const etfNewsSchema = new mongoose.Schema([
  {
    code: Number,
    data: [
      {
        news_title: String,
        news_content: String,
        news_img: String,
        news_link: String,
      },
    ],
  },
]);

const EtfNews = mongoose.model("EtfNews", etfNewsSchema);
module.exports = EtfNews;
