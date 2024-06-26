var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const cors = require("cors");
const { connectDB } = require("./src/utils/db");

var indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const issueRouter = require("./routes/issue");
const risingRouter = require("./routes/rising");
const commentRouter = require("./routes/comment");
const fundRouter = require("./routes/fund");
const etfRouter = require("./routes/etf");
const mydataRouter = require("./routes/mydata");
const quizRouter = require("./routes/quiz");
const tipRouter = require("./routes/tip");
const resultRouter = require("./routes/result");
const kospiRouter = require("./routes/kospi");
const etfNewsRouter = require("./routes/etfNews");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/user", userRouter);
app.use("/api/issue", issueRouter);
app.use("/api/rising", risingRouter);
app.use("/api/comment", commentRouter);
app.use("/api/fund", fundRouter);
app.use("/api/etf", etfRouter);
app.use("/api/mydata", mydataRouter);
app.use("/api/quiz", quizRouter);
app.use("/api/tip", tipRouter);
app.use("/api/result", resultRouter);
app.use("/api/kospi", kospiRouter);
app.use("/api/etfnews", etfNewsRouter);

connectDB();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
