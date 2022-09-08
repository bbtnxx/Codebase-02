// pure JS vs JQuery - setting the value

document.querySelector ("h1").style.color = "red";

$("h1").css ("color", "red");

// JS vs JQuery  - retreiving an existing value

console.log (document.querySelector("h1").style.color);

console.log $("h1").css ("color");


// You can 1. create a style in advance 2. write an event, so if this happens, assign this style to this object.
$("h1").addClass ("bigtitle");

$("h1").addClass ("bigtitle margin-50"); // you can assign to classes to a n object at time. bigtittle and margin-50 are different classes.

// you can manipulate object's text with JQuery

$("h1").text("Goodbye"); // before it was "Hello", now I changed it to Goodbye.
document.querySelector("h1").innerHTML="hi"; // this is with JS

// you can manipulate object attributes, such as source, href and etc.
