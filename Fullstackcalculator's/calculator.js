const express = require("express"); // this way you incorporate package to a project
const bodyParser = require ("body-parser"); // without this package, we can't parse the values of post method. this package allows
// us to go into post routes ("/") and  parse the passed values

const app = express(); // this way you start using a package in a project
app.use (bodyParser.urlencoded({extended: true})); // body-parser works with express so there's no need to create from scratch

app. get ("/", function (request,response) {
response.sendFile(__dirname + "/index.html");
}); // instead of a string like below, here we send a html file. now we want to write post endpoint

app. get ("/about", function (request,response) {
response.send ("This is Max, World!");
});

app.post ("/", function (request, response) {
// console.log(request.body); - this is body-parse package. reques.body - this way it logs entire body of html. or you can tap into object properties and say: request.body.num1

var num1 = Number (request.body.num1);  // you put Number in front of var. otherwise javascript will read this values as strings and just adds to each other e.g 1+4 = 14
var num2 = Number (request.body.num2);
var result= num1+num2;

response.send ("the result of the calculation is" + " " + result);
});


// BMI calculator

app. get ("/bmicalculator", function (request,response) {
response.sendFile(__dirname + "/bmicalculator.html");
});

app.post ("/bmicalculator", function (request, response) {
console.log(request.body);

var weight = parseFloat(request.body.weight);
var height = parseFloat(request.body.height);

var bmi = Math.floor (weight/(height*height));

response. send ("your body max index is" + " " + bmi);

});


app.listen (8022, function (){
  console.log("calculator started on port 8083");
});
