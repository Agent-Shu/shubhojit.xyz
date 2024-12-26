require("dotenv").config({ path: "./server/secrets.env" });

const https = require("https");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");


const app = express();
const path = require("path");
const port = 80;


app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());




app.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/home/home.html"));
});

app.get("/about", async (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/about/about.html"));
});



















app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "/../public/404/not_found.html"));
});


app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
  });
  


module.exports = app;




