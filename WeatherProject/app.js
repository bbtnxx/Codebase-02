const express = require ("express");
const https = require('https');
const bodyParser = require('body-parser');

const api = express(); // start using express
api.use (bodyParser.urlencoded({extended: true}));


// api post city and get weather

api.get ("/", function (req, res) {
res.sendFile (__dirname + "/index.html");
});

api.post ("/", function (req, res) {
console.log(req.body.cityName);

  const query = req.body.cityName;
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query +  "&units=metric&appid=0ec609b66feeab8f5f2d46cdf07ef435&";


  https. get (url, function (response) {
    console.log(response.statusCode);

  response.on ("data", function (data) {   // response.on allows you to tap  into response and pick a property.
  // console.log(data); //  you  could log data like this, but it will be in axadecimal format, so you need to parse JSON like above:
  const weatherData = JSON.parse (data);
  const temp = weatherData.main.temp;
  console.log(temp);
  const description = weatherData.weather[0].description;
  console.log(description);
  const icon = weatherData.weather[0].icon;
  const imageURl = "http://openweathermap.org/img/wn/" +icon+ "@4x.png"
  res.write ("<p>weather description currently:" + " " + description + "<p>");
  res.write ("<h1>the temprature in" + " " + query + " " +  "is  " +  " " + temp + " " +  "degrees Celcius </h1>");
  res.write ("<image src=" + imageURl + " >");
  res. send ();
  // so wi this code, you log: 1. statuscode. 2. temprature and 3. weather description
  });
  });


  // </ post city and get weather />
});

api.listen (8080, function () {
console.log("api has started working on 8080 port.");
});
