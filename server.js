const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const port = 3000;

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "sw.js"));
});

app.get("/", (req, res) => {
  const pathToHtml = path.resolve(__dirname, "build/index.html");
  const htmlContent = fs.readFileSync(pathToHtml, "utf-8");
  res.send(htmlContent);
});

// loading css files
app.use("/static", express.static(path.resolve(__dirname, "build")));

app.listen(port, () => console.log(`--- app is running on ----> `, port));
