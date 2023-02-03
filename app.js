const express = require("express");
const app = express();
// const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
// const cookieParser = require("cookie-parser");
// const keyCodeRoute = require("./src/routers/key-code");
const cors = require("cors");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({ limit: "10kb" }));
// app.use(cookieParser());

app.use(cors());

// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }

const filePath = path.join(__dirname, "key-code.txt");

// const data = "Hello, world!";

// fs.writeFile(filePath, data, (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

app.get("/", (req, res) => {
  // fs.readFile(filePath, "utf-8", (err, data) => {
  //   if (err) throw err;
  //   res.send(data);
  // });
});

module.exports = app;
