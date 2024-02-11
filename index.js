const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Rebornian48 Test API");
});

app.get("/versi", (req, res) => {
    res.send("Versi 1.0.0");
});

app.listen(port, () => {
  console.log(`Aplikasi memakai port ${port}`);
});
