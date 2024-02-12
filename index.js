const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Rebornian48 Test API");
});

app.get("/versi", (req, res) => {
    res.send("Versi 1.0.0");
});

app.get("/author", (req, res) => {
  res.send("Rebornian48");
});

app.get("/kategori", (req, res) => {
  const kat = [{
    id:1,
    nama:'member'  
  },{
    id:2,
    nama:'lagu'
  },{
    id:3,
    nama:'lokasi_teater'
  },{
    id:2,
    nama:'lokasi_konser'
  }
]
  res.send(kat);
});

app.listen(port, () => {
  console.log(`Aplikasi memakai port ${port}`);
});
