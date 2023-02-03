const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname);
exports.getKeyCode = (req, res) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  res.send("");
};
