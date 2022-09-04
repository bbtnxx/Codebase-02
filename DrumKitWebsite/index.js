/*           //addEventListener to first button solution: 1. you pick an object (button) 2. you add a method (addEventListener) 3. you add a parameter (click)
4.you create a function which will be called after clicking this object

document.querySelector ("button").addEventListener("click", clickhandler);

function clickhandler () {
  alert ("I got cliecked!");
}
in this solution we use Named Function, which means function is indipendently represented                  */

// addEventListener to every button solution
var numberofdrumbuttons = document.querySelectorAll (".drum").length; // create a var which is a lenght of an object
for (var i=0; i<numberofdrumbuttons; i++) { // create var loop, 1. which is zero 2. which is less then length of .drum class 3. which is icreased by 1 after every loop but does not exceed number of drumbuttons
document. querySelectorAll (".drum") [i].addEventListener ("click", function () {



});
}  // in this solution we use unanymous function.


//  var audio = new Audio('sounds/tom-1.mp3');
//  audio.play();


alert ("hello world")
