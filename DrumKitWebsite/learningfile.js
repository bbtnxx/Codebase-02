                                // CONSTRUCTOR FUNCTION with methods

// so you got var, function and method (which is their combination).
var Engineer= {
name: "Max",
experience: 9,
jobtitile: "PM",
}

function code () {
alert ("can I code?");
};


var Engineer = {
  name: "Max",
  experience: 9,
  jobtitile: "PM",
  code: function () {
    alert ("Coding in progress...");
  }
};

Engineer.code();  // this is how yo call a method. so you got an object which has assigned function. this is a method, by calling method you tell an object to do something.

// then you got constructor function to easily update data

function Addengineer (name,experience,jobtitile) {
  this.name=name;
  this.experience=experience;
  this.jobtitle=jobtitile;
}

var Engineer2 = new Addengineer ("Nika", 9, "Javadev");

// you can also create a constructor function for a method (object.function) so that whenever you create new object he'll already have a method.

function CodeEngineer (name,experience,jobtitle, ) {
  this.name=name;
  this.experience=experience;
  this.jobtitle=jobtitile;
  this.code=function () {
    alert ("can I code?");
  }
};

var Engineer3 = new CodeEngineer ("giorgi", 4, "dev");  // after this code, you'll create an object who comes with this function, so he already can execute his work.

Engineer3.code ();


    // functions/higher order functions/callbacks

function Sayhi (name) {
  console.log ("Hello," + name);
};

Sayhi("Tom");

// calback

$0.addEventListener("click", function (e) {
console.log (e);
});   // with this, system will log click event,

// you add event listener to entire interface, if someone clicks a keyboard, logging function gets triggered and logs event itself:
document.addEventListener ("keydown", function (event) {
 console.log(event);
});
