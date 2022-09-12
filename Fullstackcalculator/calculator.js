const express = require("express");
const app = express();


app. get ("/", function (request,response) {
response.sendFile(__dirname + "/index.html");
}); // instead of a string like below, here we send a html file. now we want to write post endpoint

app. get ("/about", function (request,response) {
response.send ("This is Max, World!");
});


app.listen (8083, function (){
  console.log("calculator started on port 8083");
});
