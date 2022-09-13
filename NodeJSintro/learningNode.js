const a = 1; // const is constant variable, it can't be changed ever.
fs.copyFileSync ("file1.txt", "file2.txt");  // with this method you can copy one file into another. it has scr and destination src

// Proccess of starting new project/integratin external package
npm init // this is a command in a terminal to create package.json file. after you run this command, you need to click enter's and change some parameters if you wish.
npm install express  // then you need to install specific package
const express = require("express"); //then you require this package from editor. and then follow steps described in documentation


const supervillains = require('supervillains'); // require a specific module
var Mysupervillainname = supervillains.random(); // call function which randomly outputs suppervillain names

console.log(Mysupervillainname);


// create express server

const express = require ("express");
const app = express();
app.listen (8080);

// then you open a terminal and run server.js file. from browser you can get into server: localhost:8080 - like this.


//           SETT UP SERVER AND WRITE ENDPOINTS

1. npm init // this is a command in a terminal to create package.json file. after you run this command, you need to click enter's and change some parameters if you wish.
2. npm install express  // then you need to install specific package via terminal
3. //and then follow steps:
const express = require("express"); //then you require this package from editor.
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
