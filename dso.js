//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});



//routes for DSO calculation
app.get("/dso", function(req, res) {
  res.sendFile(__dirname + "/dso.html");
});

app.post("/dso", function (req, res) {
var arBal = Number(req.body.Ar_bal);
var crSales = Number(req.body.credit_sales);
var days = Number(req.body.days);

var dso = Math.round (arBal / crSales * days);

res.send("Your DSO is " + dso);
});

//routes for cei
app.get("/cei", function(req, res) {
  res.sendFile(__dirname + "/cei.html");
});

//route for results page
app.get("/result", function(req, res) {
  res.sendFile(__dirname + "/result.html");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
