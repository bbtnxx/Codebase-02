const express = require ("express");
const app = express(); // you can check server set up flow on expressjs.com

/*
app.get ("/", function (request, response) {
  console.log(request);
}); // via get method you get request log in terminal. "/" this is a location of a index page (localhost:8080/)
*/

app.get ("/", function (request,response){
  response.send ("<h1>Hello World!</h1>");
});  // "/" this parameter is a route: localhost:8080/

app.get ("/contact", function (request,response){
  response.send ("contact me via email: arabulimalkhazi@gmail.com");
});  // "/" this parameter is a route: localhost:8080/

app.get ("/about", function (request, response){
  response.send ("this is Max, IT PM at Zazmic inc")
});


app.listen (8080, function () {
  console.log("server started on port 8080");
}); // app.listen (8080) - this way you set app to listen 8080 port. then you add callback function just to know when server has started
