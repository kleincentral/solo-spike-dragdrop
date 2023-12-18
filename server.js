const express = require("express");

const app = express();

let PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "test") {
  PORT = 5002;
}

app.use(express.json());
app.use(express.static("build"));

module.exports = app.listen(PORT, function () {
  console.log("Listening on port: ", PORT);
});
