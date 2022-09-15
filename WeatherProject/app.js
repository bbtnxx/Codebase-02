const express = require ("express");
const https = require('https');
const api = express();


// get weather
api.get ("/", function (req,res) {


const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=0ec609b66feeab8f5f2d46cdf07ef435"
https. get (url, function (response) {
  console.log(response.statusCode);

response.on ("data", function (data) {   // response.on allows you to tap  into response and pick a property.
// console.log(data); //  you  could log data like this, but it will be in axadecimal format, so you need to parse JSON like above:
const weatherData = JSON.parse (data);
const temp = weatherData.main.temp
console.log(temp);
const description = weatherData.weather[0].description
console.log(description);

// so wi this code, you log: 1. statuscode. 2. temprature and 3. weather description
});


});


  res.send  ("<h1>soon you'll get a weather data here!</h1>");
});

// </ get weather />


api.listen (8080, function () {
console.log("api has started working on 8080 port.");
});
