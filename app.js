const express = require("express");
const app = express();
const port = 3000;
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");
const date = require(__dirname + "/date.js");

var Items = [];
var workItems = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res){

  var day = date.getDate();
  res.render("list", {kindOday: day, itemtodo: Items});

});

app.post("/", function(req, res){
  newItem = req.body.newItem;
  Items.push(newItem);

  res.redirect("/");
})

app.listen(3000, function(req, res){
  console.log("Server is running on port 3000");
});

//About page

app.get("/about", function(req,res){
  res.render("about");
})

//Work page
