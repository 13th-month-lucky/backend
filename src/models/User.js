const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nickname: { type: String },
  profile_image_url: { type: String },
  resultArray: [{ type: Number }],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
