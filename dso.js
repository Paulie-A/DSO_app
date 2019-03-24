//jshint esversion:6
const express = require("express");
const favicon = require('serve-favicon');
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

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

res.render("dsoresult", {dso:dso});
// res.send("Your Days Sales Outstanding (DSO) is " + dso + " days");
});

//routes for cei
app.get("/cei", function(req, res) {
  res.sendFile(__dirname + "/cei.html");
});

app.post("/cei", function(req, res) {
  var begArBal = Number(req.body.beg_ar_bal);
  var curCrSales = Number(req.body.cur_cr_sales);
  var endTotBal = Number(req.body.end_tot_bal);
  var endCurBal = Number(req.body.end_cur_bal);

  var cei = Math.ceil( (begArBal + curCrSales - endTotBal) / (begArBal + curCrSales - endCurBal) *100);

res.render("ceiresult", {cei:cei});
  // res.send("Your Collection Effectiveness Index result is " + cei + "%");
});

//route for results page
app.get("/result", function(req, res) {
  res.sendFile(__dirname + "/result.html");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
});
