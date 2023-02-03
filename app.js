const express = require("express");
const app = express();
// const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
// const cookieParser = require("cookie-parser");
const keyCodeRoute = require("./src/routers/key-code");
const cors = require("cors");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({ limit: "10kb" }));
// app.use(cookieParser());

app.use(cors());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }

// const filePath = path.join(__dirname, "key-code.txt");

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// const data = "Hello, world!";

// fs.writeFile(filePath, data, (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

app.use("/", keyCodeRoute);

module.exports = app;
