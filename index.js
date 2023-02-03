// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// dotenv.config({ path: "./config.env" });

const app = require("./app");

// const DB = process.env.DATABASE;
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then((res) => {
//     console.log("DB connected!!");
//   });

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Listen on port 127.0.0.1:${port}`);
});
