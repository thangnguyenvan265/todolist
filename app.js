const express = require("express");
const app = express();
const port = 3000;
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res){
  var today = new Date();

  currentday = today.getDay();

  var kindOday = "";

  switch (currentday) {
    case 0:
    kindOday = "Sunday";
    break;
  case 1:
    kindOday = "Monday";
    break;
  case 2:
     kindOday = "Tuesday";
    break;
  case 3:
    kindOday = "Wednesday";
    break;
  case 4:
    kindOday = "Thursday";
    break;
  case 5:
    kindOday = "Friday";
    break;
  case 6:
    kindOday = "Saturday";

  }

  res.render("list", {day: kindOday});

});

app.listen(3000, function(req, res){
  console.log("Server is running on port 3000");
});
