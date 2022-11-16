const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const port = 8000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

// loading css files
app.use("/static", express.static(path.resolve(__dirname, "build")));

app.listen(port, () => console.log(`--- app is running on ----> `, port));
