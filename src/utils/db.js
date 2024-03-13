const mongoose = require('mongoose');
require('dotenv').config();

function connectDB() {
  mongoose
    .connect(process.env.MONGO_CONNECT, {
      retryWrites: true,
      w: 'majority',
    })
    .then(() => {
      console.log('mongoDB connected');
    })
    .catch((err) => {
      console.log('error in connectDB');
    });
}

function disconnectDB() {
  mongoose
    .disconnect()
    .then(() => {
      console.log('mongoDB disconnected');
    })
    .catch((err) => console.log(err));
}

module.exports = {
  connectDB,
  disconnectDB,
};
