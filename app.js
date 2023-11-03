const express = require("express");
const app = express();
const port = 3000;
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

var Items = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res){
  var today = new Date();

  var options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  };

  var day = today.toLocaleDateString("en-US", options);

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
