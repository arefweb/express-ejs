const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("path");
const cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname, "front")));
app.set("views", path.join(__dirname, "front"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/second', (req, res) => {
  res.render('second');
});

app.get("/third", (req, res) => {
  res.render("third");
});

app.get("/json", (req, res) => {
  res.json({
    name: "Express.js Backend",
    author: "Aref Movahedzadeh",
    time: new Date().toLocaleString(),
  })
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

