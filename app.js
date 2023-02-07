const express = require("express");
const app = express();
const geoip = require("geoip-lite");
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

// app.use((req, res, next) => {
//   // const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
//   const ip = "127.0.0.1";

//   const country = geoip.lookup("27.78.220.214");
//   console.log(country);
//   if (country === "CN") {
//     return res.status(403).send("Access Denied");
//   }
//   next();
// });

app.get("/", (req, res) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw err;
    res.send({
      data: data.toString().split(" "),
    });
  });
});

app.post("/admin", (req, res) => {
  const data = req.body.key.join(" ");

  fs.writeFile(filePath, data, (err) => {
    if (err) throw err;
  });

  res.send("");
});

app.post("/validate", (req, res) => {
  // const ip = req.body.data;
  // const country = geoip.lookup(ip);
  // if (country.country === "NL") {
  //   return res.status(403).send("Access Denied");
  // } else {
  //   res.send("");
  // }

  res.send("");
});

module.exports = app;
