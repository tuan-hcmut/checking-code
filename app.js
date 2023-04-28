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

const listKey = {
  256053653: "6083638211648177",
  248576822: "1665417788762220",
  268732425: "7542006558403738",
};

app.get("/", (req, res) => {
  res.send(listKey);
});

app.post("/admin", (req, res) => {
  const data = req.body.key.join(" ");

  fs.writeFile(filePath, data, (err) => {
    if (err) throw err;
  });

  res.send("");
});

app.post("/validate", (req, res) => {
  const ip = req.body.data;
  const country = geoip.lookup(ip);
  console.log(ip, country.country);
  if (country && country.country === "NL") {
    return res.status(403).send("Access Denied");
  } else {
    res.send({
      country: country.country,
    });
  }
});

module.exports = app;
